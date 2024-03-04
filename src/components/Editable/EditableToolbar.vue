<template>
  <transition name="slide-fade">
    <div
      ref="floating"
      class="q-editable-toolbar"
      v-show="active"
      @mousedown="handleMouseDown"
    >
      <q-button-group>
        <q-dropdown :distance="10" v-if="type">
          <template #trigger>
            <q-button size="small" caret>
              <q-icon name="type"></q-icon>
            </q-button>
          </template>
          <q-menu>
            <q-menu-item> Preview </q-menu-item>
            <q-menu-item> Preview </q-menu-item>
            <q-menu-item> Preview </q-menu-item>
          </q-menu>
        </q-dropdown>
        <q-tooltip content="Bold" v-if="weight">
          <template #anchor>
            <q-button size="small" @click="surround('bold')">
              <q-icon name="type-bold"></q-icon>
            </q-button>
          </template>
        </q-tooltip>
        <q-tooltip content="Italic" v-if="italic">
          <template #anchor>
            <q-button size="small" @click="surround('italic')">
              <q-icon name="type-italic"></q-icon>
            </q-button>
          </template>
        </q-tooltip>
        <q-tooltip content="Underline" v-if="underline">
          <template #anchor>
            <q-button size="small" @click="surround('underline')">
              <q-icon name="type-underline"></q-icon>
            </q-button>
          </template>
        </q-tooltip>
        <q-tooltip content="Strike" v-if="strikeThrough">
          <template #anchor>
            <q-button size="small" @click="surround('strikeThrough')">
              <q-icon name="type-strikethrough"></q-icon>
            </q-button>
          </template>
        </q-tooltip>
        <q-tooltip content="Link" v-if="link">
          <template #anchor>
            <q-dropdown
              class="q-editable-toolbar__item q-editable-toolbar__item--link"
              :distance="10"
              placement="bottom"
              v-if="link"
            >
              <template #trigger>
                <q-button size="small">
                  <q-icon name="link-45deg"></q-icon>
                </q-button>
              </template>
              <q-input placeholder="Add a link" size="small"></q-input>
            </q-dropdown>
          </template>
        </q-tooltip>
        <q-tooltip content="Code" v-if="code">
          <template #anchor>
            <q-button size="small" @click="surround('superscript')">
              <q-icon name="code-slash"></q-icon>
            </q-button>
          </template>
        </q-tooltip>
      </q-button-group>
    </div>
  </transition>
</template>

<script>
import { computePosition } from "@floating-ui/dom";

import {
  QButtonGroup,
  QButton,
  QInput,
  QTooltip,
  QIcon,
  QDropdown,
  QMenu,
  QMenuItem,
} from "quicker.style";

export default {
  name: "QEditableToolbar",
  components: {
    QButtonGroup,
    QButton,
    QInput,
    QTooltip,
    QIcon,
    QDropdown,
    QMenu,
    QMenuItem,
  },
  props: {
    x: {
      type: Number,
    },
    y: {
      type: Number,
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (prop) =>
        [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "right",
          "right-start",
          "right-end",
          "left",
          "left-start",
          "left-end",
        ].includes(prop),
    },
    type: {
      type: Boolean,
      default: false,
    },
    weight: {
      type: Boolean,
      default: true,
    },
    italic: {
      type: Boolean,
      default: true,
    },
    underline: {
      type: Boolean,
      default: true,
    },
    strikeThrough: {
      type: Boolean,
      default: true,
    },
    link: {
      type: Boolean,
      default: true,
    },
    // TODO: 
    code: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.reposition();
    });
  },
  watch: {
    active(value) {
      if (value) {
        this.addActiveListeners();
      } else {
        this.removeActiveListeners();
      }

      this.reposition();
    },
  },
  computed: {
    classObject() {
      const classes = [
        {
          "q-editable-toolbar--active": this.active,
        },
      ];

      return classes;
    },
  },
  methods: {
    handleMouseDown() {
      return false;
    },

    reposition() {
      const floatingEl = this.$refs.floating;
      let virtualEl;

      if (this.x && this.y) {
        let arr = {
          width: 0,
          height: 0,
          x: this.x,
          y: this.y,
          top: this.y,
          left: this.x,
          right: this.x,
          bottom: this.y,
        };

        virtualEl = {
          getBoundingClientRect() {
            return arr;
          },
        };
      }

      if (virtualEl && floatingEl) {
        computePosition(virtualEl, floatingEl, {
          placement: this.placement,
        }).then(({ x }) => {
          Object.assign(this.$refs.floating.style, {
            left: `${x}px`,
            top: `${this.y}px`,
          });
        });
      }
    },

    show() {
      if (this.active) {
        return undefined;
      }

      this.active = true;
    },

    hide() {
      if (!this.active) {
        return undefined;
      }

      this.active = false;
    },

    handlePanelSelect() {
      this.hide();
    },

    addActiveListeners() {
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
      document.addEventListener("scroll", this.handleDocumentMouseDown);
    },

    removeActiveListeners() {
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
      document.removeEventListener("scroll", this.handleDocumentMouseDown);
    },

    handleDocumentMouseDown(event) {
      // Close when clicking outside of the containing element
      const path = event.composedPath();

      if (this.$el && !path.includes(this.$el)) {
        this.hide();
      }
    },

    handleDocumentKeyDown(event) {
      if (event.key === "Tab" || event.key === "Escape") {
        // Tabbing within an active menu should close the dropdown and refocus the trigger
        if (this.isActive) {
          event.preventDefault();
          this.hide();
          return;
        }
      }
    },

    createLink() {
      document.execCommand("createLink", true, "www.google.com");
    },

    surround(commandName) {
      document.execCommand(commandName);
    },
  },
};
</script>

<style src="./EditableToolbar.styles.scss" lang="scss"></style>

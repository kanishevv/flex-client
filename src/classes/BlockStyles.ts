import type { IBlockStyles, TypeStyle, TypeStyleWithUnits } from '@/interfaces/IBlock'
import {
  type Position,
  type ZIndex,
  BoxSizing,
  type Display,
  Width,
  MinWidth,
  MaxWidth,
  Height,
  MinHeight,
  MaxHeight,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  AlignItems,
  AlignContent,
  MarginTop,
  MarginLeft,
  MarginBottom,
  MarginRight,
  PaddingTop,
  PaddingRight,
  PaddingLeft,
  PaddingBottom,
  Top,
  Bottom,
  Left,
  Right
} from '@/interfaces/css'
import { StylePosition } from './StylePosition'
import { StyleDisplay } from './StyleDisplay'
import { StyleBoxSizing } from './StyleBoxSizing'
import { StyleWidth } from './StyleWidth'
import { StyleMinWidth } from './StyleMinWidth'
import { StyleMaxWidth } from './StyleMaxWidth'
import { StyleHeight } from './StyleHeight'
import { StyleMinHeight } from './StyleMinHeight'
import { StyleMaxHeight } from './StyleMaxHeight'
import { StyleFlexDirection } from './StyleFlexDirection'
import { StyleFlexWrap } from './StyleFlexWrap'
import { StyleJustifyContent } from './StyleJustifyContent'
import { StyleAlignItems } from './StyleAlignItems'
import { StyleAlignContent } from './StyleAlignContent'
import { StyleMarginBottom } from './StyleMarginBottom'
import { StyleMarginLeft } from './StyleMarginLeft'
import { StyleMarginRight } from './StyleMarginRight'
import { StyleMarginTop } from './StyleMarginTop'
import { StylePaddingBottom } from './StylePaddingBottom'
import { StylePaddingLeft } from './StylePaddingLeft'
import { StylePaddingTop } from './StylePaddingTop'
import { StylePaddingRight } from './StylePaddingRight'
import { StyleBottom } from './StyleBottom'
import { StyleLeft } from './StyleLeft'
import { StyleRight } from './StyleRight'
import { StyleTop } from './StyleTop'
import { StyleZIndex } from './StyleZIndex'

class BlockStyles {
  position: TypeStyle<Position>
  top: TypeStyleWithUnits<Top | number>
  right: TypeStyleWithUnits<Right | number>
  bottom: TypeStyleWithUnits<Bottom | number>
  left: TypeStyleWithUnits<Left | number>
  zIndex: TypeStyle<ZIndex | number>
  display: TypeStyle<Display>
  boxSizing: TypeStyle<BoxSizing>
  width: TypeStyleWithUnits<Width | number>
  minWidth: TypeStyleWithUnits<MinWidth | number>
  maxWidth: TypeStyleWithUnits<MaxWidth | number>
  height: TypeStyleWithUnits<Height | number>
  minHeight: TypeStyleWithUnits<MinHeight | number>
  maxHeight: TypeStyleWithUnits<MaxHeight | number>
  flexDirection: TypeStyle<FlexDirection>
  flexWrap: TypeStyle<FlexWrap>
  justifyContent: TypeStyle<JustifyContent>
  alignItems: TypeStyle<AlignItems>
  alignContent: TypeStyle<AlignContent>
  marginTop: TypeStyleWithUnits<MarginTop | number>
  marginRight: TypeStyleWithUnits<MarginRight | number>
  marginBottom: TypeStyleWithUnits<MarginBottom | number>
  marginLeft: TypeStyleWithUnits<MarginLeft | number>
  paddingTop: TypeStyleWithUnits<PaddingTop | number>
  paddingRight: TypeStyleWithUnits<PaddingRight | number>
  paddingBottom: TypeStyleWithUnits<PaddingBottom | number>
  paddingLeft: TypeStyleWithUnits<PaddingLeft | number>

  constructor(styles: IBlockStyles | null = null) {
    this.position = new StylePosition(styles?.position.value)
    this.top = new StyleTop(styles?.top.value, styles?.top.unit)
    this.right = new StyleRight(styles?.right.value, styles?.right.unit)
    this.bottom = new StyleBottom(styles?.bottom.value, styles?.bottom.unit)
    this.left = new StyleLeft(styles?.left.value, styles?.left.unit)
    this.zIndex = new StyleZIndex(styles?.zIndex.value)
    this.display = new StyleDisplay(styles?.display.value)
    this.flexDirection = new StyleFlexDirection(styles?.flexDirection.value)
    this.flexWrap = new StyleFlexWrap(styles?.flexWrap.value)
    this.justifyContent = new StyleJustifyContent(styles?.justifyContent.value)
    this.alignItems = new StyleAlignItems(styles?.alignItems.value)
    this.alignContent = new StyleAlignContent(styles?.alignContent.value)
    this.boxSizing = new StyleBoxSizing(styles?.boxSizing.value)
    this.width = new StyleWidth(styles?.width.value)
    this.minWidth = new StyleMinWidth(styles?.minWidth.value)
    this.maxWidth = new StyleMaxWidth(styles?.maxWidth.value)
    this.height = new StyleHeight(styles?.height.value)
    this.minHeight = new StyleMinHeight(styles?.minHeight.value)
    this.maxHeight = new StyleMaxHeight(styles?.maxHeight.value)
    this.marginTop = new StyleMarginTop(styles?.marginTop.value)
    this.marginRight = new StyleMarginRight(styles?.marginRight.value)
    this.marginBottom = new StyleMarginBottom(styles?.marginBottom.value)
    this.marginLeft = new StyleMarginLeft(styles?.marginLeft.value)
    this.paddingTop = new StylePaddingTop(styles?.paddingTop.value)
    this.paddingRight = new StylePaddingRight(styles?.paddingRight.value)
    this.paddingBottom = new StylePaddingBottom(styles?.paddingBottom.value)
    this.paddingLeft = new StylePaddingLeft(styles?.paddingLeft.value)

    // TODO: Border, Outline, Background
  }

  public get styles() {
    return Object.entries(this).map(([key, value]) => `${key}:${value.styleValue}`)
  }
}

export { BlockStyles }

import type { IText } from '.'
import type { IComponent } from './IComponent'
import type { IImage } from './IImage'
import type { IVideo } from './IVideo'
import type {
  Position,
  Top,
  Right,
  Bottom,
  Left,
  Display,
  Width,
  MinWidth,
  MaxWidth,
  MinHeight,
  MaxHeight,
  Height,
  MarginTop,
  MarginRight,
  MarginBottom,
  MarginLeft,
  PaddingTop,
  PaddingRight,
  PaddingBottom,
  PaddingLeft,
  BoxSizing,
  ZIndex,
  FlexWrap,
  FlexDirection,
  JustifyContent,
  AlignItems,
  AlignContent
} from './css'
import type { Units } from './units'

type TypeStyle<ValueType> = {
  value: ValueType
}

type TypeStyleWithUnits<ValueType> = {
  value: ValueType
  unit: Units
}

type TypeMarginStyle = {
  top: TypeStyleWithUnits<MarginTop>
  right: TypeStyleWithUnits<MarginRight>
  bottom: TypeStyleWithUnits<MarginBottom>
  left: TypeStyleWithUnits<MarginLeft>
}

type TypePaddingStyle = {
  top: TypeStyleWithUnits<PaddingTop>
  right: TypeStyleWithUnits<PaddingRight>
  bottom: TypeStyleWithUnits<PaddingBottom>
  left: TypeStyleWithUnits<PaddingLeft>
}

interface IBlockStyles {
  position: TypeStyle<Position>
  top: TypeStyleWithUnits<Top>
  right: TypeStyleWithUnits<Right>
  bottom: TypeStyleWithUnits<Bottom>
  left: TypeStyleWithUnits<Left>
  zIndex: TypeStyle<ZIndex>
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

  // setPosition(position: Position): void
}

interface IBlock extends IComponent {
  styles: IBlockStyles
  children: Array<IBlock | IImage | IVideo | IText> | []
}

export type {
  IBlock,
  IBlockStyles,
  TypeStyle,
  TypeStyleWithUnits,
  TypeMarginStyle,
  TypePaddingStyle
}

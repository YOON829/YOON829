import type {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import type { WidthHeight } from "./WidthHeight";
import {LeftRightTopBottom} from "./LeftRightTopBottom";

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
    LeftRightTopBottom & {
    src?: string;
  };

// prettier-ignore
// className: _className 얘를 뺌 왜 뻄??
export const Div: FC<DivProps> = ({
  width, height, style: _style, src, left, right, top , bottom, ...props
}) => {
  // backgroundImage: src && `url(${src})` 백틱써야함 ''로 하면 스트링으로 인식함
  const style = {..._style, width, height, backgroundImage: src && `url(${src})` , left, right, top , bottom}
  return <div {...props} style={style}></div>
}
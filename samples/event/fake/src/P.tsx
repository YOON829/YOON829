// import { Children, type FunctionComponent, type ReactNode } from "react";

// export type PProps = {
//   children?: ReactNode;
// };

// const P: FunctionComponent<PProps> = (props) => {
//   const { children } = props;
//   return <p children={children} />;
// };

// export default P;

import { FunctionComponent, PropsWithChildren } from "react";

export type PProps = {};

const P: FunctionComponent<PropsWithChildren<PProps>> = (props) => {
  return <p {...props} />;
};

//자식들에게 프롭스를 넘길떄 해당 타입을 선언하면 된다.

export default P;

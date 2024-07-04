// import ArrowComponent from "./ArrowComponent";

// export default function App() {
//   return <div>Hello function-keyword component!</div>;
// }

import { FunctionComponent } from "react";

export type ArrowComponentProps = {
  href: string;
  text: string;
};

export const ArrowComponent: FunctionComponent<ArrowComponentProps> = (
  props
) => {
  const { href, text } = props;
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  );
};

export default ArrowComponent;
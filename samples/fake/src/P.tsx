import type {FC, PropsWithChildren, ReactNode} from 'react'
import {PropsWithRef} from "react";

:

export type PProps = {
    children?: ReactNode;
};

// const P: FC<PProps> = (props) =>{
//     const { children } = props;
//     return <p children={children} />;
// };

const P: FC<PropsWithChildren<PProps>> = (props) => {
    return <p {...props> />;
};



export default App;
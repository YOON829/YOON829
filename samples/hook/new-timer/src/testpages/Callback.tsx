import { useMemo, useCallback } from "react";
import { Title } from "../components";
import { Button } from "../theme/daisyui";
import * as D from "../data";


export default function CopyMe() {

    const onClick = useCallback(() => {alert('click')},[]);
    const buttons = useMemo(() => (
        D.makeArray(3)
            .map(D.randomName)
            .map((name, index) => {

                <Button
                    key={index}
                    onClick={onClick}
                    className="btn-primary btn-wid btn-xs" />
                    {name}
                </button>
        }),
    }),
[onclick]
};

import * as React from 'react'
import {FunctionComponent, HTMLAttributes} from "react";

type Props = HTMLAttributes<HTMLHeadingElement> & {
    icon?: string;
};

const Box: FunctionComponent<Props> = ({ children, icon= 'ℹ'  }) => {

    const backgroundClass = icon === 'ℹ' ? 'bg-blue-100' : 'bg-blue-500'

    return (
        <div className={`rounded-md p-6 shadow-lg my-8 ${backgroundClass}`}>
            {children}
        </div>
    );
};

export default Box;

import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { HeadingNode } from '@prezly/slate-types';

import { getHeadingTagName, slugifyNodeText } from './lib';
import { HeadingTag } from './types';
import styles from './Heading.module.scss';

type Props = HTMLAttributes<HTMLHeadingElement> & {
    node: HeadingNode;
    level: HeadingTag;
    downgrade?: boolean;
};

const Heading: FunctionComponent<Props> = ({ children, level, downgrade, node, ...props }) => {
    // When components are server side rendered from nextjs /api `useRouter` is unavailable
    // Currently it is a case for algolia indexation webhooks
    // That's a reason why we need to render share icon link conditionally
    const router = useRouter();

    const headingElementTagName = getHeadingTagName(level, downgrade);
    const id = props.id || slugifyNodeText(node.children);
    const headingProps = {
        ...props,
        id,
        className: classNames(props.className, styles.heading),
    };

    return React.createElement(
        headingElementTagName,
        headingProps,
        <>
            {router && (
                <a href={`${router.asPath}#${id}`} className={styles.anchor}>
                    <span className={styles.icon}>🔗</span>
                </a>
            )}
            {children}
        </>,
    );
};

export default Heading;

import React, { FunctionComponent } from 'react';
import { Node, Options, Renderer } from '@prezly/slate-renderer';
import '@prezly/slate-renderer/build/styles.css';
import {
    BULLETED_LIST_NODE_TYPE,
    DOCUMENT_NODE_TYPE,
    HEADING_1_NODE_TYPE,
    HEADING_2_NODE_TYPE,
    LINK_NODE_TYPE,
    PARAGRAPH_NODE_TYPE,
    QUOTE_NODE_TYPE,
} from '@prezly/slate-types';

interface Props {
    nodes: Node | Node[];
}

const options: Options = {
    // [BULLETED_LIST_NODE_TYPE]: ({ children }) => <ul>{children}</ul>,
    // [DOCUMENT_NODE_TYPE]: ({ children, node }) => (
    //     <section data-version={node.version}>{children}</section>
    // ),
    // [HEADING_1_NODE_TYPE]: ({ children }) => <h1>{children}</h1>,
    // [HEADING_2_NODE_TYPE]: ({ children }) => <h2>{children}</h2>,
    // [LINK_NODE_TYPE]: ({ children, node }) => <a href={node.href}>{children}</a>,
    // [PARAGRAPH_NODE_TYPE]: ({ children }) => <p>{children}</p>,
    // [QUOTE_NODE_TYPE]: ({ children }) => <blockquote>{children}</blockquote>,
};

const SlateRenderer: FunctionComponent<Props> = ({ nodes }) => (
    <Renderer nodes={nodes} options={options} />
);

export default SlateRenderer;

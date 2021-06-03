import React, { FunctionComponent } from 'react';
import { Node, Options, Renderer } from '@prezly/slate-renderer';
import '@prezly/slate-renderer/build/styles.css';
import GithubSnippet from "@/components/GithubSnippet";
import {Text, Heading, UnorderedList, ListItem} from '@chakra-ui/react';

import {
    BULLETED_LIST_NODE_TYPE,
    NUMBERED_LIST_NODE_TYPE,
    LIST_ITEM_NODE_TYPE,
    LIST_ITEM_TEXT_NODE_TYPE,
    DOCUMENT_NODE_TYPE,
    HEADING_1_NODE_TYPE,
    HEADING_2_NODE_TYPE,
    LINK_NODE_TYPE,
    PARAGRAPH_NODE_TYPE,
    QUOTE_NODE_TYPE,
} from '@prezly/slate-types';
import AnchoredHeading from "@/components/Heading";
import Box from "@/components/Box/Box";

interface Props {
    nodes: Node | Node[];
}


const options: Options = {
    [LIST_ITEM_TEXT_NODE_TYPE]: ({ children }) => <>{children}</>,
    [LIST_ITEM_NODE_TYPE]: ({ children }) => <ListItem my="2">{children}</ListItem>,
    [BULLETED_LIST_NODE_TYPE]: ({ children }) => <UnorderedList my="4">{children}</UnorderedList>,
    [NUMBERED_LIST_NODE_TYPE]: ({ children }) => <UnorderedList my="4">{children}</UnorderedList>,
    // [DOCUMENT_NODE_TYPE]: ({ children, node }) => (
    //     <section data-version={node.version}>{children}</section>
    // ),
    [HEADING_1_NODE_TYPE]: ({ children, node }) => <AnchoredHeading level="h1" node={node}><Heading s="h2" size="xl" my="4">{children}</Heading></AnchoredHeading>,
    [HEADING_2_NODE_TYPE]: ({ children, node }) => <AnchoredHeading level="h2" node={node}><Heading s="h3" size="lg" my="4">{children}</Heading></AnchoredHeading>,
    // [LINK_NODE_TYPE]: ({ children, node }) => <a href={node.href}>{children}</a>,
    [PARAGRAPH_NODE_TYPE]: ({ children, node }) => {
        if (node && node.children[0].text) {
            const text = node.children[0].text as string;
            if (text.substring(0, 19) === 'https://github.com/') {
                return <GithubSnippet src={text} />;
            }
        }

        if (node && node.children[0].text) {
            const text = node.children[0].text as string;
            if (text.substring(0, 1) === 'ℹ' || text.substring(0,1) === '💡') {
                return <Box icon={text.substring(0, 1)}>{children}</Box>;
            }
        }

        return (<Text mb="4">{children}</Text>);
    },
    // [QUOTE_NODE_TYPE]: ({ children }) => <blockquote>{children}</blockquote>,
};

const SlateRenderer: FunctionComponent<Props> = ({ nodes }) => (
    <Renderer nodes={nodes} options={options} />
);

export default SlateRenderer;

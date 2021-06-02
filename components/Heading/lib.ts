import { InlineNode, isInlineNode, isTextNode, TextNode } from '@prezly/slate-types';
import { HeadingTag } from './types';
import clamp from "@/utils/clamp";
import slugify from "@/utils/slugify";

type Node = InlineNode | TextNode;

export const slugifyNodeText = (node: Node | Node[]) => {
    const targetNodes = Array.isArray(node) ? node : [node];

    const text = targetNodes
        .map((node) => {
            if (isTextNode(node)) {
                return node.text;
            }

            if (isInlineNode(node)) {
                return slugifyNodeText(node.children);
            }
        })
        .filter(Boolean)
        .join('');

    return slugify(text);
};

export const getHeadingTagName = (level: HeadingTag, downgrade: boolean): HeadingTag => {
    return level.replace(/\d$/, (level: string) => {
        const levelNumber = parseInt(level, 10);
        const targetLevel = downgrade ? levelNumber + 1 : levelNumber;
        return String(clamp(targetLevel, 1, 6));
    }) as HeadingTag;
};

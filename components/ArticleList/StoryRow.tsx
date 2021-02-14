import {Box, Flex, Heading, Img, Link, LinkBox, LinkOverlay, Text, useColorModeValue as mode} from "@chakra-ui/react";
import React from "react";
import {ExtendedStory} from "@prezly/sdk/dist/types";

interface BlogProps {
    story: ExtendedStory
}


export const StoryRow = (props: BlogProps) => {
    const {title, subtitle, author = 'Gijs Nelissen', preview_image, slug } = props.story;
    const category = 'blog';
    const href = `/${slug}`;

    let mediaUrl = null;
    if (preview_image) {
        const mediaParsed = JSON.parse(preview_image);
        mediaUrl = `https://cdn.uc.assets.prezly.com/${mediaParsed.uuid}/file.png`;
    }

    return (
        <Box display={{ md: "flex" }}>
            <Box flexShrink={0}>
                {mediaUrl &&
                    <Img height="60" width="60" alt={title} src={mediaUrl} borderRadius="lg" />
                }
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    Blog
                </Text>
                <Link
                    mt={1}
                    display="block"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                >
                    { title}
                </Link>
                <Text mt={2} color="gray.500">
                    { subtitle }
                </Text>
            </Box>
        </Box>
    )
}
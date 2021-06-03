import {Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {ExtendedStory} from "@prezly/sdk/dist/types";

interface BlogProps {
    story: ExtendedStory
}


export const StoryRow = (props: BlogProps) => {
    const {title, subtitle, slug } = props.story;
    const href = `/${slug}`;

    return (
        <Box display={{ md: "flex" }}>
            <Box mt={{ base: 4, md: 0 }} as="a" href={href}>
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    Blog
                </Text>
                <Heading s="h3" size="l">{ title}</Heading>
                <Text mt={2} color="gray.500">
                    { subtitle }
                </Text>
            </Box>
        </Box>
    )
}

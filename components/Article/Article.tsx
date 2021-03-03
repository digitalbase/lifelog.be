import * as React from 'react'
import {FunctionComponent} from "react";
import dynamic from 'next/dynamic';
import { Box, Heading, Text, useColorModeValue as mode } from '@chakra-ui/react'
import {ExtendedStory} from "@prezly/sdk/dist/types/Story";

interface Props {
    story: ExtendedStory;
}

const DynamicSlateRenderer = dynamic(() => import('@/components/SlateRenderer'));

const Article: FunctionComponent<Props> = ({ story }) => {

    const storyContent = JSON.parse(story.content);

    return (
        <Box as="section" bg={mode('white.100', 'gray.700')} py="12">
            <Box
                textAlign="left"
                bg={mode('white', 'gray.800')}
                maxW="3xl"
                mx="auto"
                px={{ base: '8', md: '8' }}
                py="6"
                rounded="lg"
            >
                <Box maxW="4xl" mx="auto">
                    <Heading mt="4" fontWeight="extrabold">
                        { story.title}
                    </Heading>
                    <Text fontSize="3xl" my="4" fontWeight="medium">
                        { story.subtitle}
                    </Text>

                    {storyContent && (
                        <Text fontSize="lg">
                            <DynamicSlateRenderer nodes={storyContent.children} />
                        </Text>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Article;

import React, {FunctionComponent} from 'react';
import {Box, Heading, Link, SimpleGrid, Text, useColorModeValue as mode} from '@chakra-ui/react'
import {BsArrowRight} from 'react-icons/bs'
import {ExtendedStory} from "@prezly/sdk/dist/types/Story";
import {StoryRow} from "@/components/ArticleList/StoryRow";


interface Props {
    stories: Array<ExtendedStory>;
}

const ArticleListVertical: FunctionComponent<Props> = ({ stories }) => {

    return (
        <Box as="section" bg={mode('gray.50', 'gray.800')} py={{ base: '10', sm: '24' }}>
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                <Heading size="xl" mb="8" fontWeight="extrabold">
                    Blog Articles
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 1 }} spacing="12" mb="12">
                    {stories.map((story) => (
                        <StoryRow story={story} key={story.id}/>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default ArticleListVertical;

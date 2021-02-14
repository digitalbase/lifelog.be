import React, {FunctionComponent} from 'react';
import {Box, Heading, Link, SimpleGrid, useColorModeValue as mode} from '@chakra-ui/react'
import {BsArrowRight} from 'react-icons/bs'
import {ExtendedStory} from "@prezly/sdk/dist/types/Story";
import {Blog} from "@/components/ArticleList/StoryCard";


interface Props {
    stories: Array<ExtendedStory>;
}

const ArticleList: FunctionComponent<Props> = ({ stories }) => {

    return (
        <Box as="section" bg={mode('gray.50', 'gray.800')} py={{ base: '10', sm: '24' }}>
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                <Heading size="xl" mb="8" fontWeight="extrabold">
                    Latest articles
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12" mb="10">
                    {stories.map((story) => (
                        <Blog story={story} />
                    ))}
                </SimpleGrid>
                <Link fontSize="xl" fontWeight="bold" color={mode('blue.600', 'blue.400')}>
                    <span>View all articles</span>
                    <Box as={BsArrowRight} display="inline-block" ms="2" />
                </Link>
            </Box>
        </Box>
    );
};

export default ArticleList;

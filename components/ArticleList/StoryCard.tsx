import { Flex, Heading, Img, LinkBox, LinkOverlay, Text, useColorModeValue as mode} from "@chakra-ui/react";
import React from "react";
import {ExtendedStory} from "@prezly/sdk/dist/types";

interface BlogProps {
    story: ExtendedStory
}


export const StoryCard = (props: BlogProps) => {
    const {title, subtitle, preview_image, slug } = props.story;
    const category = 'blog';
    const href = `/${slug}`;

    let mediaUrl = null;
    if (preview_image) {
        const mediaParsed = JSON.parse(preview_image);
        mediaUrl = `https://cdn.uc.assets.prezly.com/${mediaParsed.uuid}/file.png`;
    }

    return (
        <LinkBox
            as="article"
            bg={{sm: mode('white', 'gray.700')}}
            shadow={{sm: 'base'}}
            rounded={{sm: 'md'}}
            overflow="hidden"
            transition="all 0.2s"
            _hover={{shadow: {sm: 'lg'}}}
        >
            <Flex direction="column">
                {mediaUrl &&
                    <Img height="60" objectFit="cover" alt={title} src={mediaUrl}/>
                }
                <Flex direction="column" px={{sm: '6'}} py="5">
                    <Text casing="uppercase" letterSpacing="wider" fontSize="xs" fontWeight="semibold" mb="2"
                          color="gray.500">
                        {category}
                    </Text>
                    <Heading as="h3" size="sm" mb="2" lineHeight="base">
                        <LinkOverlay href={href}>{title}</LinkOverlay>
                    </Heading>
                    <Text noOfLines={2} mb="8" color={mode('gray.600', 'gray.400')}>
                        {subtitle}
                    </Text>
                    {/*<Flex align="baseline" justify="space-between" fontSize="sm" color={mode('gray.600', 'gray.400')}>*/}
                    {/*    <Text>*/}
                    {/*        By{' '}*/}
                    {/*        <Box as="a" textDecor="underline" href="">*/}
                    {/*            {author}*/}
                    {/*        </Box>*/}
                    {/*    </Text>*/}
                    {/*    <Link href="#">*/}
                    {/*        <Box as={BsClockFill} display="inline-block" me="2" opacity={0.4}/>3 min read*/}
                    {/*    </Link>*/}
                    {/*</Flex>*/}
                </Flex>
            </Flex>
        </LinkBox>
    )
}

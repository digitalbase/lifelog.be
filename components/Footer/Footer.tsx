import React, { FunctionComponent } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Box, ButtonGroup, Flex, IconButton, Link, Stack, Text } from '@chakra-ui/react'
import {NavLink} from "@/components/Header/NavLink";

const Footer: FunctionComponent = () => {

    return (
        <Box as="footer" role="contentinfo" py="6">
            <Flex direction={{ base: 'column', md: 'row' }} maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} align="center">
                <a aria-current="page" aria-label="Back to Home page" href="/" rel="home">
                    Lifelog.be
                </a>
                <Stack
                    my={{ base: '6', md: 0 }}
                    direction={{ base: 'column', md: 'row' }}
                    marginStart={{ md: '8' }}
                    fontSize="sm"
                    spacing={{ base: '2', md: '8' }}
                    textAlign={{ base: 'center', md: 'start' }}
                >
                    <Text>&copy; {new Date().getFullYear()} Gijs Nelissen</Text>
                    <Text><a href={'/blog'}>Blog</a></Text>
                    <Text><a href={'/about'}>About</a></Text>
                </Stack>
                <ButtonGroup marginStart={{ md: 'auto' }} color="gray.600" variant="ghost">
                    <IconButton as="a" href="https://www.linkedin.com/in/gijsnelissen/" aria-label="LinkedIn" icon={<FaLinkedin />} />
                    <IconButton as="a" href="https://github.com/digitalbase" aria-label="Github" icon={<FaGithub />} />
                    <IconButton as="a" href="https://twitter.com/digitalbase" aria-label="Twitter" icon={<FaTwitter />} />
                </ButtonGroup>
            </Flex>
        </Box>
    );
};

export default Footer;

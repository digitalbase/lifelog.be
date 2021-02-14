import React, { FunctionComponent } from 'react';
import { Box, Button, Flex, HStack, useColorModeValue as mode, VisuallyHidden } from '@chakra-ui/react';
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'

const Header: FunctionComponent = () => {

    return (
        <Box>
            <Box as="header" bg={mode('white', 'gray.800')} borderBottomWidth="1px">
                <Box maxW="7xl" mx="auto" py="4" px={{ base: '6', md: '8' }}>
                    <Flex as="nav" justify="space-between">
                        <HStack spacing="8">
                            <Box as="a" href="#" rel="home">
                                <VisuallyHidden>Envelope app</VisuallyHidden>
                                Lifelog.be
                            </Box>
                            <HStack display={{ base: 'none', lg: 'flex' }} spacing="8">
                                <NavLink.Desktop active><a href={'/'}>Home</a></NavLink.Desktop>
                                <NavLink.Desktop><a href={'/about'}>About</a></NavLink.Desktop>
                            </HStack>
                        </HStack>
                        <Flex align="center">
                            <Box ml="5">
                                <MobileNav />
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;

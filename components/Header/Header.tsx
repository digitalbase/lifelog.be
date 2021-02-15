import React, { FunctionComponent } from 'react';
import {Box, IconButton, Flex, HStack, useColorMode, Stack, Switch, useColorModeValue as mode} from '@chakra-ui/react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { MobileNav } from './MobileNav';
import { NavLink } from './NavLink';

const Header: FunctionComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    //const ToggleIcon = colorMode === 'light' ? <FaTwitter /> : <FaFacebook />;

    return (
        <Box>
            <Box as="header" bg={mode('white', 'gray.800')} borderBottomWidth="1px">
                <Box maxW="7xl" mx="auto" py="4" px={{ base: '6', md: '8' }}>
                    <Flex as="nav" justify="space-between">
                        <HStack spacing="8">
                            <Box as="a" href="#" rel="home">
                                <a href={'/'}>Lifelog.be</a>
                            </Box>
                            <HStack display={{ base: 'none', lg: 'flex' }} spacing="8">
                                <NavLink.Desktop active><a href={'/'}>Home</a></NavLink.Desktop>
                                <NavLink.Desktop><a href={'/all'}>Blog</a></NavLink.Desktop>
                                <NavLink.Desktop><a href={'/about'}>About</a></NavLink.Desktop>
                            </HStack>
                        </HStack>

                        <Flex align="center">
                            <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
                                <IconButton
                                    onClick={toggleColorMode}
                                    sRound
                                    size="sm"
                                    fontSize="xl"
                                    aria-label="Toggle dark mode"
                                    variant="ghost"
                                    color="current"
                                    icon={colorMode === 'light' ? <BsMoon /> : <BsSun />}
                                />
                            </HStack>
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

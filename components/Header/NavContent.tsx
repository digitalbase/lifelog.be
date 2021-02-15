import {
    Box,
    Flex,
    FlexProps,
    HStack,
    useDisclosure,
    IconButton, useColorMode
} from '@chakra-ui/react'
import * as React from 'react'
import { NavLink } from './NavLink'
import { NavMenu } from './NavMenu'
import { Submenu } from '@/components/Header/SubMenu'
import { ToggleButton } from './ToggleButton'
import { links } from './_data'
import {BsMoon, BsSun} from "react-icons/bs";

const MobileNavContext = (props: FlexProps) => {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Flex align="center" justify="space-between" className="nav-content__mobile" {...props}>
                <Box flexBasis="6rem">
                    <ToggleButton isOpen={isOpen} onClick={onToggle} />
                </Box>
                <Box as="a" rel="home" mx="auto">
                    Lifelog.be
                </Box>
                <HStack spacing="8" justify="space-between">
                    <IconButton
                        onClick={toggleColorMode}
                        size="sm"
                        fontSize="xl"
                        aria-label="Toggle dark mode"
                        variant="ghost"
                        color="current"
                        icon={colorMode === 'light' ? <BsMoon /> : <BsSun />}
                    />
                </HStack>
            </Flex>
            <NavMenu animate={isOpen ? 'open' : 'closed'}>
                {links.map((link, idx) =>
                    link.children ? (
                        <Submenu.Mobile key={idx} link={link} />
                    ) : (
                        <NavLink.Mobile key={idx} href={link.href}>
                            {link.label}
                        </NavLink.Mobile>
                    ),
                )}
            </NavMenu>
        </>
    )
}

const DesktopNavContent = (props: FlexProps) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex className="nav-content__desktop" align="center" justify="space-between" {...props}>
            <Box as="a" href="#" rel="home">
                Lifelog.be
            </Box>
            <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
                {links.map((link, idx) => (
                    <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
                        {link.children ? <Submenu.Desktop link={link} /> : <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>}
                    </Box>
                ))}
            </HStack>
            <HStack spacing="8" justify="space-between">
                <IconButton
                    onClick={toggleColorMode}
                    size="sm"
                    fontSize="xl"
                    aria-label="Toggle dark mode"
                    variant="ghost"
                    color="current"
                    icon={colorMode === 'light' ? <BsMoon /> : <BsSun />}
                />
            </HStack>
        </Flex>
    )
}

export const NavContent = {
    Mobile: MobileNavContext,
    Desktop: DesktopNavContent,
}
import { useNavMenu } from './useNavMenu';
import {
    Box,
    Collapse,
    Link,
    Badge,
    Text,
    Heading,
    SimpleGrid,
    useDisclosure,
    GridItem,
    Grid,
    useColorModeValue
} from '@chakra-ui/react';
import * as React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { LinkInterface } from './_data';
import { NavLink } from './NavLink';
import { SubmenuItem as DesktopMenuItem } from '@/components/Header/SubmenuItem';
import { NavMenu } from '@/components/Header/NavMenu';
import {BsArrowRight} from "react-icons/bs";
import {mode} from "@chakra-ui/theme-tools";

interface SubmenuProps {
    link: LinkInterface
}

const DesktopSubmenu = (props: SubmenuProps) => {
    const { link } = props
    const { isOpen, getMenuProps, getTriggerProps } = useNavMenu();
    const [...rest] = link.children;

    return (
        <>
            <NavLink.Desktop display="flex" alignItems="center" as="button" type="button" px="4" fontWeight="semibold" {...getTriggerProps()}>
                <Box>{link.label}</Box>
                <Box marginStart="2" as={FaChevronDown} fontSize="xs" />
            </NavLink.Desktop>

            <NavMenu {...getMenuProps()} animate={isOpen ? 'open' : 'closed'} zIndex="1">
                <Box maxW="7xl" mx="auto" px="8">
                    <Grid
                        spacing="10"
                        templateColumns="repeat(6, 1fr)"
                        gap={12}
                    >
                        <GridItem colSpan={2}>
                            <Badge>#SME</Badge>
                            <Heading size="md" mb={4} mt={2} mr={4}>Solving Marketing Attribution</Heading>
                            <Text fontSize="l" mb={2}>
                                I have yet to meet the first marketer telling me they have solved marketing attribution.
                            </Text>
                            <Text fontSize="l" mb={2}>
                                Sure, plenty of talks throwing around keywords such as <Text as="cite">multi touch attribution</Text> and numerous blog posts about how important marketing attribution is.
                            </Text>

                            <Text fontSize="l" mb={2}>
                                In this project I came up with a way to analyse and store the different sources a visitor comes from and feed that back to segment.com.
                            </Text>

                            <Link fontSize="l" href="/all" fontWeight="bold" color={useColorModeValue('blue.600', 'blue.400')}>
                                <span>View all articles</span>

                                <Box as={BsArrowRight} display="inline-block" ms="2" />
                            </Link>

                        </GridItem>
                        <GridItem colSpan={4}>
                            <SimpleGrid spacing="10" columns={2}>
                                {rest?.map((item, idx) => (
                                    <DesktopMenuItem key={idx} title={item.label} href={item.href} >
                                        {item.description}
                                    </DesktopMenuItem>
                                ))}
                            </SimpleGrid>
                        </GridItem>
                    </Grid>

                </Box>
            </NavMenu>
        </>
    )
}

const MobileSubMenu = (props: SubmenuProps) => {
    const { link } = props
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box zIndex="1">
            <NavLink.Mobile as="button" textAlign="start" type="button" cursor="pointer" onClick={onToggle} paddingEnd="4">
                <Heading mb={4}>Modern online and offline payments for Africa</Heading>
                <Text fontSize="xl">
                    Paystack helps businesses in Africa get paid by anyone, anywhere in the
                    world
                </Text>

            </NavLink.Mobile>
            <Collapse in={isOpen}>
                <Box pl="5">
                    {link.children?.map((item, idx) => (
                        <NavLink.Mobile key={idx} href={item.href}>
                            {item.label}
                        </NavLink.Mobile>
                    ))}
                </Box>
            </Collapse>
        </Box>
    )
}

export const Submenu = {
    Mobile: MobileSubMenu,
    Desktop: DesktopSubmenu,
}

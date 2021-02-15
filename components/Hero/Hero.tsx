import React, { FunctionComponent } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { Box, Button, Heading, Img, Link, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';

const Hero: FunctionComponent = () => {

    return (
        <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="16">
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '3rem', lg: '2rem' }} mt="8" align={{ lg: 'center' }} justify="space-between">
                    <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
                        <Box pos="absolute" w="100%" h="100%" top="-4" left="-4" bg={mode('gray.200', 'gray.700')} />
                        <Img
                            w="full"
                            pos="relative"
                            h={{ lg: '100%' }}
                            objectFit="cover"
                            src="https://ucarecdn.com/de234bd9-ccb9-46a6-8af2-67a30d4a3f92/_DSC0320Edit.jpg"
                            alt="Screening talent"
                        />
                    </Box>
                    <Box flex="1" maxW={{ lg: '520px' }}>
                        <Text size="xs" textTransform="uppercase" fontWeight="semibold" color={mode('blue.600', 'blue.300')} letterSpacing="wide">
                            Lifelog.be
                        </Text>
                        <Heading as="h1" size="3xl" color={mode('blue.600', 'blue.300')} mt="8" fontWeight="extrabold" letterSpacing="tight">
                            Hello! I'm Gijs
                        </Heading>
                        <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
                            On this page I write about <a href={'https://www.prezly.com/'}>running a company</a> and other things related to the web.
                        </Text>
                        <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
                            I love to build stuff like this blog, JS/TS glue code and stuff in the real world.
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
                            <Button as="a" href="https://www.twitter.com/digitalbase" target="_blank" size="lg" minW="210px" colorScheme="blue" height="14" px="8" leftIcon={<Box as={FaTwitter} fontSize="2xl"  />}>
                                Contact
                            </Button>
                            <Button
                                size="lg"
                                as="a"
                                href={"/about"}
                                bg="white"
                                color="gray.900"
                                _hover={{ bg: 'gray.50' }}
                                height="14"
                                px="8"
                                shadow="base"
                            >
                                About me
                            </Button>
                        </Stack>
                        <Text mt="8" color={mode('gray.600', 'gray.400')}>
                            This blog was built using Next.js, Chakra and Prezly API.{' '}
                            <Link href="https://github.com/digitalbase/lifelog.be" textDecoration="underline">
                                See the code
                            </Link>
                        </Text>
                    </Box>

                </Stack>
            </Box>
        </Box>
    );
};

export default Hero;

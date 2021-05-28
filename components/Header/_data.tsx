import * as React from 'react'

export interface LinkInterface {
    label: string
    href?: string
    children?: Array<{
        label: string
        description?: string
        href: string
    }>
}

export const links: LinkInterface[] = [
    { label: 'Blog', href: '/all' },
    {
        label: 'The Best Newsroom',
        children: [
            {
                label: 'Ad-tech, hosting and Frameworks for top-20 newsrooms',
                description: 'I\'m interested in the ad stack of the most important newsrooms: Are they all using Google Analytics? Who is using segment.com and on average how many ad trackers can we detect?',
                href: '/ad-tech-of-top-20-newsrooms',
            },
            {
                label: 'Searching for the best newsroom',
                description: 'To prepare for this project I wanted to get some inspiration from the best newsrooms out there. Googling my favourite brands with search queries like \'Apple newsroom\' or \'Red Bull newsroom\' turned out to be really underwhelming.',
                href: '/searching-for-the-perfect-newsroom',
            },
            {
                label: 'Building the perfect newsroom',
                description: 'While I\'m searching for inspiration to design, build and integrate the best possible newsroom in Prezly I wanted to share the plans on how we\'re want to do this.',
                href: '/building-the-perfect-newsroom',
            },
            {
                label: 'What makes a good newsroom?',
                description: 'In this post, I will explore different ways to score those newsrooms on their technical foundations. Obviously, a good newsroom is about a lot more than performance and accessibility but let\'s start with the basics.',
                href: '/what-makes-a-good-newsroom',
            },
        ],
    },
    {
        label: 'Solving Marketing Attribution',
        children: [
            {
                label: 'The project',
                description: 'How this project started',
                href: '/solving-marketing-attribution-using-segment',
            },
            {
                label: 'Day 1: The Masterplan',
                description: 'This is the first day in a series to solve marketing attribution.',
                href: '/day-1-the-masterplan',
            },
            {
                label: 'Day 2: Capture Segment events',
                description: 'Today I only want to deploy some simple code to capture and store track() and identify() calls.',
                href: '/day-2-capture-segment-events',
            },
            {
                label: 'Day 3: Cleanup + Identify Visitor source',
                description: 'Dropping Express and Serverless-HTTP',
                href: '/day-3-cleanup-identify-visitor-source/',
            },
            {
                label: 'Day 4: Run in production + API',
                description: 'Add an API to query results and run in production',
                href: '/day-4-run-in-production--api',
            },
            {
                label: 'Day 5: Feed 2 million events',
                description: 'Import historic events into our stack',
                href: '/day-5-feed-old-events',
            },
            {
                label: 'Day 6: Return attribution data',
                description: 'Today we will feed the information we gathered back to segment.com and all enabled sources',
                href: '/day-6-feeding-source-attribution-data-back-to-segmentcom',
            },
            {
                label: 'Day 7: Reporting on visitor sources',
                description: 'Check what this all looks like in Mixpanel and Customer.io',
                href: '/day-7--reporting-on-visitor-sources',
            },
            {
                label: 'Day 8: Feed in (Hubspot) sales data',
                description: 'Adding information about deal size/status',
                href: '/day-8--feeding-in-sales-data',
            },
            {
                label: 'Day 9: Dealing with tracking-ad blockers',
                description: 'Ad blockers/New browsers change the data by about 20%',
                href: '/day-9--dealing-with-trackingad-blockers',
            },
        ],
    },
    { label: 'About me', href: '/about' },
]

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
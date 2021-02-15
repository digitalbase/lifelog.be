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
                description: 'The code idea behind this project',
                href: '#',
            },
            {
                label: 'Day 1: The Masterplan',
                description: 'This is the first day in a series to solve marketing attribution.',
                href: '#',
            },
            {
                label: 'Day 2: Capture Segment events',
                description: 'Do even more with Assistants, plugins and integrations.',
                href: '#',
            },
            {
                label: 'Day 3: Doing next',
                description: 'Get updates, articles and insights from the team.',
                href: '#',
            },
            {
                label: 'Day 4: The Masterplan',
                description: 'This is the first day in a series to solve marketing attribution.',
                href: '#',
            },
            {
                label: 'Day 5: Capture Segment events',
                description: 'Do even more with Assistants, plugins and integrations.',
                href: '#',
            },
            {
                label: 'Day 6: Doing next',
                description: 'Get updates, articles and insights from the team.',
                href: '#',
            },
            {
                label: 'Day 7: Capture Segment events',
                description: 'Do even more with Assistants, plugins and integrations.',
                href: '#',
            },
            {
                label: 'Day 8: Doing next',
                description: 'Get updates, articles and insights from the team.',
                href: '#',
            },
        ],
    },
    { label: 'About me', href: '/about' },
]
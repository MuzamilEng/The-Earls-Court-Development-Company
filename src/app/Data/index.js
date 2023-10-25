import React from 'react'
import { Icon } from '@iconify/react';

export const header = [
    {
        logo: 'images/logo.svg',
        navLists: [
            {
                name: 'Aboust Us',
                href: '/about'
            },
            {
                name: 'Development',
                href: '/development'
            },
            {
                name: "What's On",
                href: '/WhatsOn'
            }, {
                name: 'Consultation',
                href: '/consultation'
            }, {
                name: 'Our Community',
                href: '/Community'
            }, {
                name: 'News',
                href: '/News'
            },
            {
                name: 'Contact',
                href: '/Contact'
            }
        ],
        icons: [
            {
                url: 'linkedIn',
                icon: <Icon icon="uiw:linkedin" />
            },
            {
                url: 'Instagram',
                icon: <Icon icon="uil:instagram" />
            },
            {
                url: 'twitter',
                icon: <Icon icon="simple-icons:x" />,
            },

        ]
    }
]

export const post_Content = [
    //date, title, topic, info, info2, line1, line2, line3, line4, img, feedBack, downLoad_btn, consultation, readMore

    {
        date: 'OCTOBER 2019',
        img: 'images/img1.png',
        title: 'Initial listen',
        topic: 'exercise',
        info: 'The first phase of engagement began when The Earls Court Development Company (ECDC) was a small team in summer 2020, having acquired the site in December 2019. This phase focused on building a rich picture of the site, the area and the history of the previous owners using internal expertise, those who previously worked on the site, stakeholders and workshops with external organisations such as Wordsearch Place and Mindfolio.',
    },
    {
        date: 'AUGUST 2021',
        img: 'images/img2.png',
        title: 'Summer 2021',
        topic: 'fun days',
        info: 'Following the early listening exercise, we kicked off our extensive public consultation in summer 2021 with a series of family fun day events that were held on and around the Earls Court site. The three events involved a range of activities being put on for local families and communities, with members of the project team on hand to provide information and encourage attendees to provide feedback via the online survey.',
        feedBack: 'Summary of summer engagement events',
        events: 'We held three events over the summer to gather feedback from the local community on the Earls ',
        download_btn: 'Download',
    },
    {
        date: 'AUGUST 2021',
        img: 'images/img3.png',
        title: 'Our vision for the site -',
        topic: 'To bring the wonder back to Earls Court',
        info: 'The next phase of consultation took place from December 2021 onwards, involving four in-person events, a webinar and an online survey. At these events, we introduced our vision and four key priorities for the site for the first time.',
        line1: 'You can view what we shared at these events here.',
        info2: 'During this phase, we launched our masterplanning workshops, which allow people who live and work in the area to take a more detailed look at different aspects of our proposals. The themes we looked at during t',
        line2: 'What was the wonder',
        line3: 'The Urban Design Framework',
        line4: 'City living, working and playing in 5, 10 and 20 years’ time',
        feedBack: 'Vision for the masterplan feedback summary report',
        download_btn: 'Download',
        consultation: 'ECDC consultation boards winter 2021',
        readMore: 'Read more',
    }
]

export const footer = [
    {
        title: 'The Earls Court Development Company',
        link_section: [
            {
                title: "About Us",
                links: [
                    { label: 'The Team', url: 'team' }, { label: 'Our Vision', url: 'ourVision' }
                ]
            },
            {
                title: "What's On",
                links: [
                    { label: 'Beach Rugby at Earls', url: 'beach' }, { label: 'CourtBBC Earth', url: 'courtBBc' }, { label: 'ExperienceEmpress StudiosArt', url: 'experience' }, { label: 'InstallationThe Community', url: 'installation' }, { label: 'HubThe Pop Up Lillie', url: 'hub' }, { label: 'RoadArtist in', url: 'road' }, { label: 'ResidenceImmersive theatre at', url: 'immersive' }, { label: 'the former Mannequin', url: 'mannequin' }, { label: 'FactoryHomes', url: 'factory' }, { label: 'GuardianshipSkills', url: 'skills' }, { label: 'CentreLondon Design Taylor - 20 Things', url: 'taylor' }, { label: "Earl's CourtLillie Road Shops", url: "shops" }
                ]
            },
            {
                title: "Our Community",
                links: [
                    { label: "Events Calendar", url: 'events' }, { label: "Earls Court Future Programme", url: 'future' }, { label: "Earls Court Community Fund", url: 'community' }, { label: "Spotify Soundtracks", url: 'spotify' }, { label: "Events Calendar Archive", url: 'archive' }, { label: "Social Value Report", url: 'report' }
                ]
            },
            {
                title: "News",
                links: [
                    { label: 'Press Releases', url: 'press-releases' }
                ]
            }
        ],
        signUp: "NewsLetter Sign-up",
        icons: [
            {
                url: 'linkedIn',
                icon: <Icon icon="uiw:linkedin" />
            },
            {
                url: 'Instagram',
                icon: <Icon icon="uil:instagram" />
            },
            {
                url: 'twitter',
                icon: <Icon icon="simple-icons:x" />,
            },

        ]

    }
]
export const smallFooter = [
    {
        title: 'The Earls Court Development Company',
        link_section: [
            {
                title: "About Us",
                links: [
                    { label: 'The Team', url: 'team' }, { label: 'Our Vision', url: 'ourVision' }
                ]
            },
            {
                title: "What's On",
                links: [
                    { label: 'Beach Rugby at Earls', url: 'beach' }, { label: 'CourtBBC Earth', url: 'courtBBc' }, { label: 'ExperienceEmpress StudiosArt', url: 'experience' }, { label: 'InstallationThe Community', url: 'installation' }, { label: 'HubThe Pop Up Lillie', url: 'hub' }, { label: 'RoadArtist in', url: 'road' }, { label: 'ResidenceImmersive theatre at', url: 'immersive' }, { label: 'the former Mannequin', url: 'mannequin' }, { label: 'FactoryHomes', url: 'factory' }, { label: 'GuardianshipSkills', url: 'skills' }, { label: 'CentreLondon Design Taylor - 20 Things', url: 'taylor' }, { label: "Earl's CourtLillie Road Shops", url: "shops" }
                ]
            },
            {
                title: "Our Community",
                links: [
                    { label: "Events Calendar", url: 'events' }, { label: "Earls Court Future Programme", url: 'future' }, { label: "Earls Court Community Fund", url: 'community' }, { label: "Spotify Soundtracks", url: 'spotify' }, { label: "Events Calendar Archive", url: 'archive' }, { label: "Social Value Report", url: 'report' }
                ]
            },
            {
                title: "News",
                links: [
                    { label: 'Press Releases', url: 'press-releases' }
                ]
            }
        ],
        signUp: "NewsLetter Sign-up",
        icons: [
            {
                url: 'linkedIn',
                icon: <Icon icon="uiw:linkedin" />
            },
            {
                url: 'Instagram',
                icon: <Icon icon="uil:instagram" />
            },
            {
                url: 'twitter',
                icon: <Icon icon="simple-icons:x" />,
            },

        ],
        policy: [
            {
                title: "Privacy Policy",
                url: 'privacy'
            },
            {
                title: "Terms & Conditions",
                url: 'terms'
            },
            {
                title: "Cookies Policy",
                url: 'cookies'
            },
            {
                title: "Competition Terms & Conditions",
                url: 'competition',
            },
            {
                title: '© The Earls Court Development Company 2023',
            }
        ]

    }
]
export const sideBar = [
    {
        title: 'The Earls Court Development Company',
        link_section: [
            {
                title: "About Us",
                links: [
                    { label: 'The Team', url: 'team' }, { label: 'Our Vision', url: 'ourVision' }
                ]
            },
            {
                title: "What's On",
                links: [
                    { label: 'Beach Rugby at Earls', url: 'beach' }, { label: 'CourtBBC Earth', url: 'courtBBc' }, { label: 'ExperienceEmpress StudiosArt', url: 'experience' }, { label: 'InstallationThe Community', url: 'installation' }, { label: 'HubThe Pop Up Lillie', url: 'hub' }, { label: 'RoadArtist in', url: 'road' }, { label: 'ResidenceImmersive theatre at', url: 'immersive' }, { label: 'the former Mannequin', url: 'mannequin' }, { label: 'FactoryHomes', url: 'factory' }, { label: 'GuardianshipSkills', url: 'skills' }, { label: 'CentreLondon Design Taylor - 20 Things', url: 'taylor' }, { label: "Earl's CourtLillie Road Shops", url: "shops" }
                ]
            },
            {
                title: "Our Community",
                links: [
                    { label: "Events Calendar", url: 'events' }, { label: "Earls Court Future Programme", url: 'future' }, { label: "Earls Court Community Fund", url: 'community' }, { label: "Spotify Soundtracks", url: 'spotify' }, { label: "Events Calendar Archive", url: 'archive' }, { label: "Social Value Report", url: 'report' }
                ]
            },
            {
                title: "News",
                links: [
                    { label: 'Press Releases', url: 'press-releases' }
                ]
            },
            {
                title: 'Consultation',
            },
            {
                title: 'Contact Us',
            },
            
        ],
        signUp: "NewsLetter Sign-up",
        icons: [
            {
                url: 'linkedIn',
                icon: <Icon icon="uiw:linkedin" />
            },
            {
                url: 'Instagram',
                icon: <Icon icon="uil:instagram" />
            },
            {
                url: 'twitter',
                icon: <Icon icon="simple-icons:x" />,
            },

        ]

    }
]
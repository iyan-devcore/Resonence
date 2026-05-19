export interface QuickAction{
    title: string;
    description: string;
    gradient: string;
    href: string;
};

export const quickActions: QuickAction[] = [
    {
        title: "Narrate a story",
        description: "Bring characters to life with expressive AI narration",
        gradient: "from-cyan-400 to-cyan-50",
        href: "/text-to-speech?=In a village tucked between mist-covered mountains, there lived an old clockmaker whose clocks never told the right time - but they always told the truth. One rainy evening, a stranger walked in and asked for a clock that could show him his future.",
    },
    {
        title: "Motivational speech",
        description: "Generate powerful and inspiring voice narration",
        gradient: "from-orange-400 to-yellow-100",
        href: "/text-to-speech?=Success is not built in a single day. It is built in the quiet moments when nobody is watching, when you decide to keep going even after failure, doubt, and exhaustion try to stop you.",
    },
    {
        title: "Sci-fi transmission",
        description: "Create futuristic AI radio-style voice messages",
        gradient: "from-purple-500 to-indigo-100",
        href: "/text-to-speech?=Captain's log, day 482. We finally received a signal from the abandoned colony on Titan. The strange part is that the message was sent tomorrow.",
    },
    {
        title: "Horror narration",
        description: "Turn chilling stories into immersive audio",
        gradient: "from-red-500 to-gray-200",
        href: "/text-to-speech?=Every night at exactly 2:13 AM, the hallway lights flickered three times. On the fourth night, the lights stayed on long enough for Emma to see someone standing outside her bedroom door.",
    },
    {
        title: "Fantasy adventure",
        description: "Give magical worlds a cinematic voice",
        gradient: "from-emerald-400 to-lime-100",
        href: "/text-to-speech?=The dragon did not guard gold or jewels. Deep inside the mountain, it protected a single forgotten book that could rewrite the fate of kingdoms.",
    },
    {
        title: "Podcast intro",
        description: "Create energetic intros for your podcast episodes",
        gradient: "from-pink-500 to-rose-100",
        href: "/text-to-speech?=Welcome back to Tech Unfiltered, the podcast where we break down the biggest innovations, startup failures, and AI breakthroughs shaping the future of the internet.",
    }
]
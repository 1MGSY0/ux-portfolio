export const caseStudyMeta = {
  title: "Improving Duolingo for long-term language learning",
  summary:
    "A UX redesign of Duolingo focused on reducing streak-driven pressure and improving real-life language practice for sustained learning.",
  role: "UX Research, UX Design, Interaction Design, Frontend Prototype (Chat Function)",
  team: "Group 5W1H",
  timeline: "10-week university project",
  tools: "Figma, FigJam, Next.js, Tailwind CSS",
};

export const caseStudyAnchors = [
  { label: "Overview", href: "#overview" },
  { label: "Research", href: "#research" },
  { label: "Ideation", href: "#ideation" },
  { label: "Prototypes", href: "#prototypes" },
  { label: "Testing", href: "#testing" },
  { label: "Outcome", href: "#outcome" },
] as const;

export const overviewParagraphs = [
  "Duolingo motivates short-term usage extremely well, but our team saw a gap between daily activity and meaningful long-term learning. Users could stay active and still feel unprepared for real-life language use.",
  "Early research showed two linked issues: learning felt disconnected from actual conversation, and motivation depended too heavily on streak maintenance. That combination created pressure, guilt, and eventual drop-off.",
  "We reframed the opportunity around healthier retention: not just getting people back into the app, but giving them a stronger reason to stay with language learning over time.",
];

export const researchCards = [
  {
    title: "Research goal",
    body:
      "Explore how Duolingo could maintain user retention and interest while making language learning feel more useful, realistic, and sustainable.",
  },
  {
    title: "Participants",
    body:
      "Current users and former users aged roughly 19 to 30, including learners who had become inconsistent or already dropped off.",
  },
  {
    title: "Methods",
    body:
      "Surveys, interviews, moderated usability testing, think-aloud protocol, and semi-structured interviews.",
  },
];

export const keyInsights = [
  "Users wanted more real-life conversational usefulness, not only correct answers.",
  "Daily streak pressure created stress or guilt for many learners.",
  "Personalization could reduce overload and support more sustainable routines.",
  "Chat-based practice felt closer to real use of language than random revision.",
];

export const insightCards = [
  {
    title: "Learning is not the same as real-life proficiency",
    body:
      "Users could finish lessons and still feel underprepared for everyday communication.",
  },
  {
    title: "Pressure can hurt motivation",
    body:
      "A system designed to encourage consistency could also make re-entry feel emotionally harder.",
  },
  {
    title: "Flexibility needs visible progress",
    body:
      "Users wanted a less rigid rhythm, but still needed clear signs that they were improving.",
  },
];

export const ideationSteps = [
  {
    title: "Brainstorm and affinity mapping",
    body:
      "A wide range of ideas was explored and grouped into themes around motivation, personalization, and real-world practice. The synthesis process was shaped collaboratively, with particular attention given to connecting insights back to the core problem.",
  },
  {
    title: "Effort-impact evaluation",
    body:
      "Concepts were narrowed using a feasibility and impact lens to ensure alignment with the research problem. Throughout this process, emphasis was placed on identifying ideas that supported long-term learning rather than short-term engagement.",
  },
  {
    title: "Selected directions",
    body:
      "Two concepts were carried forward: flexible streak customization and chat-based scenario practice. A virtual pet concept was also explored but not prioritized due to its high-resource investment. The chat function became a key focus area in the subsequent design and prototyping stages.",
  },
];

export const prototypeDirections = [
  {
    title: "Flexible streaks",
    points: [
      "Customizable learning rhythm options",
      "End-of-lesson progress redesign",
      "Calendar-based continuity with gentler recovery language",
    ],
  },
  {
    title: "Chat-based practice",
    points: [
      "Scenario inbox and conversation list",
      "Translation and reply actions inside a familiar messaging flow",
      "Simulated message exchange for more contextual language use",
    ],
  },
] as const;

export const testingNotes = [
  "Moderated usability testing with think-aloud protocol",
  "Semi-structured interviews after hands-on prototype use",
  "Sessions lasting around 30 to 40 minutes",
  "Mix of returning interviewees and new participants",
];

export const findings = [
  {
    title: "Flexible streaks reduced pressure",
    body:
      "Users appreciated a more forgiving rhythm and felt more willing to start learning with Duolingo without the pressure from the streaks. Many preferred the calendar option with continuity cues and neutral visual language.",
    quote: "The hurdle to use Duolingo becomes much lower.",
    avatar: "/duo-chat/alex.png",
    avatarAlt: "Alex avatar",
  },
  {
    title: "Chat-based practice made learning feel more applicable to real-life use",
    body:
      "The chat interface felt intuitive and familiar. Users said contextual conversation made the app feel more relevant to real-life language use and helped increase confidence.",
    quote:
      "The chat simulates actual conversations and I feel like for language, you must talk to somebody to learn better so the chat really helps a lot.",
    avatar: "/duo-chat/key.png",
    avatarAlt: "Key avatar",
  },
];

export const iterationPoints = [
  "Streak feedback was refined to show both weekly rhythm and larger day-based achievement cues.",
  "Chat error feedback was redesigned so it no longer blocked the original answer too aggressively.",
  "Future interaction options were mapped for freer typing and more flexible answer patterns.",
];

export const impactPoints = [
  "Improves motivation through flexibility instead of one-size-fits-all pressure",
  "Supports intrinsic motivation with more meaningful, contextual practice",
  "Reduces guilt-heavy streak dependence while keeping progress visible",
  "Makes retention feel tied to value, not only habit",
];

export const learningsProcess = {
  heading: "Learnings & Process",
  intro:
    "For this project, the tema and I worked from research to ideation, prototyping, and validation with a consistent focus on designing for healthier long-term language learning.",
  takeaways: [
    {
      title: "Aligning ideas with the problem",
      body:
        "Brainstorming and affinity mapping helped the team narrow ideas toward improving long-term learning, not just engagement.",
    },
    {
      title: "Designing through iteration",
      body:
        "Mid-fi prototypes in Figma focused on user flows and interactions before refining into higher fidelity.",
    },
    {
      title: "Prototyping for realism",
      body:
        "Developing the high-fi prototype in Next.js allowed testing of more realistic interactions, especially for the chat experience.",
    },
    {
      title: "Validating with users",
      body:
        "Usability testing helped confirm which concepts felt more useful, realistic, and sustainable for long-term learning behavior.",
    },
  ],
  tools: [
    "Figma - mid-fi prototyping, interaction flows, chat function exploration",
    "Next.js - high-fi prototype for realistic testing",
    "Tailwind CSS - UI styling system",
  ],
  methods: [
    "Brainstorming & affinity mapping",
    "Effort-impact evaluation",
    "User flow design",
    "Usability testing",
    "Iterative prototyping",
  ],
  futureDirections: [
    "A/B testing streak vs flexible systems",
    "Expanding chat with more open-ended responses",
    "Tracking long-term retention and engagement",
  ],
} as const;

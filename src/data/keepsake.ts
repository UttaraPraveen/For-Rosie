export type Keepsake = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  route: string;
};

export const keepsakes: Keepsake[] = [
  {
    id: "letters",
    title: "Letters for Every Age",
    subtitle: "Words waiting patiently for every version of you.",
    type: "envelope",
    route: "/letters",
  },
  {
    id: "little-things",
    title: "The Little Things",
    subtitle: "Because the smallest memories deserve to live forever.",
    type: "flower",
    route: "/little-things",
  },
  {
    id: "reasons",
    title: "Reasons I Love You",
    subtitle: "A list that was never meant to end.",
    type: "heart",
    route: "/reasons",
  },
  {
    id: "constellation",
    title: "A Constellation Sky",
    subtitle: "Every star holds a moment I'll never forget.",
    type: "star",
    route: "/constellation",
  },
  {
    id: "open-when",
    title: "Open When...",
    subtitle: "For the days when you need me most.",
    type: "book",
    route: "/open-when",
  },
  {
    id: "encouragement",
    title: "A Jar of Encouragement",
    subtitle: "One tiny reminder, exactly when you need it.",
    type: "jar",
    route: "/encouragement",
  },
];
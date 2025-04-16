import ProjectCard from './ProjectCard';

export default {
  title: 'Cards/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    project: {
      id: 0,
      title: "DecisionHub",
      date: "Jan 2024 - Dec 2023",
      description:
        "A Rule Builder application “Decision Hub” that empowers Business Analysts to create, save, and visualize decision strategies. Provide a no-code rule writing experience and visual representation to test these rules in real-time and observe the calculations at each step.",
      image:
        "https://github.com/rishavchanda/DecisionHub/raw/master/assets/testRule.jpg",
      tags: [
        "React Js",
        "PostgressSQL",
        "Node Js",
        "Express Js",
        "Redux",
        "React Flow",
      ],
      category: "web app",
      github: "https://github.com/rishavchanda/DecisionHub",
      webapp: "https://decisionhub.netlify.app/",
    },
  },
};


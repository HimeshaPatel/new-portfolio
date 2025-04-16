import ExperienceCard from './ExperienceCard';

export default {
  title: 'Cards/ExperienceCard',
  component: ExperienceCard,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    experience: {
      id: 0,
      img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad",
      role: "Frontend Engineer",
      company: "Staah",
      date: "Oct 2023 - April 2024",
      desc: "Enhanced user experiences on Neurobit PSG & Hybrid, Portals by resolving bugs & reduced load time by 40  ...",
      skills: ["ReactJS", "Redux", "NodeJs", "Material UI"],
    },
  },
};
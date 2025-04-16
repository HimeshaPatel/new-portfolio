import Experience from './Experience';

export default {
  title: 'Sections/Experience',
  component: Experience,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    experiences: [
      {
        id: 0,
        img: "https://media.licdn.com/dms/image/v2/D560BAQHKHSi1uo_P6Q/company-logo_100_100/company-logo_100_100/0/1735172198106/staah_com_logo?e=1748476800&v=beta&t=tt7hPmkl1lrxk6mOCI1SRzkojqTRvvHROI5CJExUUYk",
        role: "Sr. Frontend Engineer Developer",
        company: "Staah",
        date: "Oct 2023 - April 2024",
        desc: "At STAAH Hotel Software, I worked on revamping the company's online hotel booking system, leading frontend development efforts. I collaborated with UI/UX designers and backend teams to enhance user engagement, improve page load times, and boost bookings.",
        skills: [
          "ReactJS",
          "TypeScript",
          "NodeJs",
          "Material UI",
          "HTML",
          "CSS",      
          "Wordpress",
          "Figma"
        ],
      },
      {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad",
        role: "Frontend Engineer Intern",
        company: "Neurobit",
        date: "June 2023 - Nov 2023",
        desc: "Enhanced user experiences on Neurobit PSG & Hybrid, Portals by resolving bugs & reduced load time by 40%. Built Neurobit Analytics portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query.",
        skills: [
          "ReactJS",
          "Redux",
          "NodeJs",
          "Material UI",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      }
    ],
    title: "Experience",
    description: "My work experience as a software engineer and working on different companies and projects."
  }
};

export const NoExperiences = {
  args: {
    experiences: [],
    title: "Experience",
    description: "My work experience as a software engineer and working on different companies and projects."
  }
};

export const SingleExperience = {
  args: {
    experiences: [Default.args.experiences[0]],
    title: "Experience",
    description: "My work experience as a software engineer and working on different companies and projects."
  }
};

export const CustomStyling = {
  args: {
    ...Default.args,
    styles: {
      backgroundColor: '#f5f5f5',
      titleColor: '#333',
      descriptionColor: '#666',
      timelineColor: '#2196f3'
    }
  }
};
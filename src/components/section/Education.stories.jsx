import Education from './Education';

export default {
  title: 'Sections/Education',
  component: Education,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    education: [
      {
        id: 0,
        img: "https://media.licdn.com/dms/image/v2/C4E0BAQFxrNBhNthctQ/company-logo_100_100/company-logo_100_100/0/1631307044701?e=1748476800&v=beta&t=-nauhy62wooVO-TZxj87adJ6clpva_R1uU41BPd2H9g",
        school: "Uka Tarsadia University, Surat, India",
        degree: "Bachelor of Computer Applications",
        date: "Aug 2011 - June 2014",
        grade: "7.2 CGPA",
        desc: "I completed my Bachelor's in Computer Applications with a focus on software development and web technologies."
      },
      {
        id: 1,
        img: "https://example.com/school2-logo.png",
        school: "Higher Secondary School",
        degree: "Science Stream",
        date: "June 2009 - May 2011",
        grade: "75%",
        desc: "Completed my higher secondary education with a focus on Science and Mathematics."
      }
    ],
    title: "Education",
    description: "My education has been a journey of self-discovery and growth. My educational details are as follows."
  }
};

export const NoEducation = {
  args: {
    education: [],
    title: "Education",
    description: "My education has been a journey of self-discovery and growth. My educational details are as follows."
  }
};

export const SingleEducation = {
  args: {
    education: [Default.args.education[0]],
    title: "Education",
    description: "My education has been a journey of self-discovery and growth. My educational details are as follows."
  }
};

export const CustomStyling = {
  args: {
    ...Default.args,
    styles: {
      backgroundColor: '#f8f9fa',
      titleColor: '#2c3e50',
      descriptionColor: '#34495e',
      cardBackground: '#ffffff',
      borderColor: '#e0e0e0'
    }
  }
};

export const WithoutDescription = {
  args: {
    ...Default.args,
    description: null
  }
};
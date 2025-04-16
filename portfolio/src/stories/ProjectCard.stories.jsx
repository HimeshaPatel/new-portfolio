import ProjectCard from '../components/cards/ProjectCard';

// Import a test image
import testImage from '../assets/test-project.jpg';

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    project: {
      title: 'Sample Project',
      description: 'This is a sample project description',
      image: testImage,
      tags: ['React', 'JavaScript', 'Styled Components'],
      github: 'https://github.com/example/project',
      webapp: 'https://example.com'
    }
  }
};

export const WithoutWebApp = {
  args: {
    project: {
      title: 'GitHub Only Project',
      description: 'This project only has a GitHub link',
      image: 'https://via.placeholder.com/300x180',
      tags: ['TypeScript', 'Node.js'],
      github: 'https://github.com/example/project'
    }
  }
};


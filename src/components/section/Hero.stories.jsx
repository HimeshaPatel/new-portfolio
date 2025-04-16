import Hero from './Hero';

export default {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    profile: {
      name: 'Himesha Patel',
      roles: ['Front-End Developer', 'Web Developer', 'UI Designer'],
      description: 'Hello! I\'m Himesha, a passionate Frontend Developer and UI Designer with 7+ years of experience.',
      image: '/images/HeroImage.jpg'
    },
    animations: {
      enabled: true,
      duration: 0.8,
      delay: 0.2
    },
    typewriter: {
      enabled: true,
      speed: {
        deleteSpeed: 20,
        delay: 40
      }
    },
    resumeButton: {
      text: 'Check Resume',
      link: '#',
      visible: true
    },
    layout: {
      imagePosition: 'right',
      maxWidth: '1100px',
      padding: {
        desktop: '80px 30px',
        tablet: '66px 16px',
        mobile: '32px 16px'
      }
    },
    backgroundAnimation: true
  }
};

// Without animations
export const NoAnimations = {
  args: {
    ...Default.args,
    animations: {
      enabled: false
    },
    typewriter: {
      enabled: false
    },
    backgroundAnimation: false
  }
};

// Left-aligned image
export const LeftAlignedImage = {
  args: {
    ...Default.args,
    layout: {
      ...Default.args.layout,
      imagePosition: 'left'
    }
  }
};

// Without resume button
export const WithoutResumeButton = {
  args: {
    ...Default.args,
    resumeButton: {
      ...Default.args.resumeButton,
      visible: false
    }
  }
};

// Custom padding
export const CustomPadding = {
  args: {
    ...Default.args,
    layout: {
      ...Default.args.layout,
      padding: {
        desktop: '100px 40px',
        tablet: '80px 30px',
        mobile: '40px 20px'
      }
    }
  }
};

export const CustomBackground = {
  args: {
    background: {
      type: 'gradient',
      colors: {
        primary: 'rgba(190, 26, 219, 0.05)',
        secondary: 'rgba(0, 70, 209, 0.05)',
      },
      gradient: {
        direction: '45deg',
        stops: [
          { color: 'rgba(190, 26, 219, 0.05)', position: '0%' },
          { color: 'rgba(190, 26, 219, 0.1)', position: '25%' },
          { color: 'rgba(190, 26, 219, 0.05)', position: '50%' },
          { color: 'rgba(0, 70, 209, 0.05)', position: '100%' }
        ]
      },
      animation: {
        enabled: true,
        starCount: 2000,
        starColor: '#be1adb',
        starSize: 0.003,
        rotationSpeed: {
          x: 0.1,
          y: 0.15
        }
      },
      overlay: {
        enabled: true,
        opacity: 0.8,
        blur: '10px'
      }
    }
  }
};



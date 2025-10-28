// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A collection of research and interactive projects blending culture, design, and immersive technology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-28xiu",
        title: '28Xiu',
        description: "Bringing the 28 Celestial Mansions to Life with AR",
        section: "Projects",handler: () => {
            window.location.href = "/projects/1_project.html";
          },},{id: "projects-the-you-you-are",
        title: 'The You You Are',
        description: "An interactive installation for real-time dialogue with another self.",
        section: "Projects",handler: () => {
            window.location.href = "/projects/2_project.html";
          },},{id: "projects-line-effect",
        title: 'Line Effect',
        description: "A Peripheral Visual Effect with Motion Lines for Reducing VR Sickness",
        section: "Projects",handler: () => {
            window.location.href = "/projects/3_project.html";
          },},{id: "projects-collaborative-avatars-for-motivation",
        title: 'Collaborative Avatars for Motivation',
        description: "A VR study on how collaborating with one’s avatar affects motivation.",
        section: "Projects",handler: () => {
            window.location.href = "/projects/4_project.html";
          },},{id: "projects-pencil-portraits",
        title: 'Pencil Portraits',
        description: "",
        section: "Projects",handler: () => {
            window.location.href = "/projects/5_project.html";
          },},{id: "projects-digital-sketches",
        title: 'Digital Sketches',
        description: "",
        section: "Projects",handler: () => {
            window.location.href = "/projects/6_project.html";
          },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

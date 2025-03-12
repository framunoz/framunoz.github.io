
const currentUrl = window.location.href;
const siteUrl = "https://framunoz.github.io"; 
let updatedUrl = currentUrl.replace("https://framunoz.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("es".length > 0) {
  updatedUrl = updatedUrl.replace("/es", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-acerca-de",
    title: "acerca de",
    section: "Menú de navegación",
    handler: () => {
      window.location.href = "/es/";
    },
  },{id: "nav-proyectos",
          title: "proyectos",
          description: "Una colección creciente de proyectos interesantes.",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Esta es una descripción de la página. Puede modificarla en &#39;_pages/cv.md&#39;. También puede cambiar o eliminar el botón de descarga de pdf en la parte superior.",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/es/books/es/the_godfather/";
            },},{id: "projects-evolution-of-species",
          title: 'Evolution of Species',
          description: "Project to provide numerical methods to solve the Perthame equations",
          section: "Proyectos",handler: () => {
              window.location.href = "/es/projects/en/2021-06-10-evolution-of-species/";
            },},{
        id: 'social-email',
        title: 'Enviar un correo electrónico',
        section: 'Redes sociales',
        handler: () => {
          window.open("mailto:%66%6D%75%6E%6F%7A@%75%67.%75%63%68%69%6C%65.%63%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://github.com/framunoz", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://www.linkedin.com/in/femunozg", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Cambiar tema a claro',
      description: 'Cambiar el tema del sitio a Claro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Cambiar tema a oscuro',
      description: 'Cambiar el tema del sitio a Oscuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usar tema predeterminado del sistema',
      description: 'Cambiar el tema del sitio a Predeterminado del sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];

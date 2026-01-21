import { Sitemap } from 'react-router-sitemap';
import router from './src/router'; // your React Router config

function generateSitemap() {
  return (
    new Sitemap(router)
      .build('https://www.nurtureher.org') // your domain
      .save('./public/sitemap.xml')        // save to public folder
  );
}

generateSitemap();

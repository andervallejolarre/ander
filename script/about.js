import { aboutContent } from '../content/content.js';
import { header } from './ui.js';

const toKebabCase = (string) => string.toLowerCase().replace(/\s/g, '-');

const root = document.getElementById('root');

const textSection = `
  <div class="about-text-section">
    ${aboutContent.about}
    <h2>Biography</h2>
    ${aboutContent.bio}
    <h2>Studies</h2>
    ${aboutContent.studies}
  </div>
`

const imageSection = `
  <div class="about-image-section">
    <img src="../content/images/${aboutContent.image}">
  </div>
`

root.innerHTML = header() + imageSection + textSection

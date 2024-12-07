import { projects } from '../content/content.js';
import { header } from './ui.js';

const toKebabCase = (string) => string.toLowerCase().replace(/\s/g, '-');

const root = document.getElementById('root');
const homeRoot = document.getElementById('home-root');
console.log(homeRoot);

const path = window.location.pathname;
const projectTitle = path.split('/')[1]?.replace('.html', '');

if (projectTitle) {
  console.log(`Project title: ${projectTitle}`);
} else {
  console.error("Project title not found in the URL");
}

const currentProject = projects.find(project => toKebabCase(project.title) === projectTitle);

const playerSection = `
  <div class="player-section">
    <span
      style="display: block;
      height: 1px;
      width: 100%;
      "
    >

    </span>
  </div>
`

const imagesSection = `
  <div class="images-section">
    ${
      currentProject.visuals 
      ? currentProject.visuals.map(visual => {
        if(visual.image) {
          return `<img src="../content/images/${visual.image}">`
        } else if(visual.vimeo) {
          return `
            <div style="position: relative; padding-top: 56.25%;">
              <iframe 
                title="vimeo-player" 
                src="https://player.vimeo.com/video/${visual.vimeo}?controls=1&title=0&byline=0&portrait=0" 
                frameborder="0" 
                allowfullscreen
                style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                "
              ></iframe>
            </div>
          `
        }
      }).join('') 
      : ''
    }
  </div>
`

const descriptionSection = `
  <div class="description-section">
    ${currentProject.description}
    ${currentProject.links ? (
      `<div class="links-section">
        ${Object.entries(currentProject.links).map(([key, value]) => {
          return `<a class="underline-link" href="${value}" target="_blank">${key}</a>`
        }).join('')}
      </div>`
    ): ''}
  </div>
`

root.innerHTML = header() + playerSection + imagesSection + descriptionSection;

if(currentProject) {
  document.title = currentProject.title;
}
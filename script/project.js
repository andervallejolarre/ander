import { projects } from '../content/content.js';
import { bg, header } from './ui.js';

const toKebabCase = (string) => string.toLowerCase().replace(/\s/g, '-');

const root = document.getElementById('root');
const homeRoot = document.getElementById('home-root');

const path = window.location.pathname;
const projectPath = path.split('/')[1]?.replace('.html', '');

const currentProject = projects.find(project => project.id === projectPath);

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
            <div style="position: relative; padding-top: 56.25%; overflow: hidden;">
              <iframe 
                title="vimeo-player" 
                src="https://player.vimeo.com/video/${visual.vimeo}?controls=1&title=0&byline=0&portrait=0" 
                frameborder="0" 
                allowfullscreen
                style="
                  position: absolute;
                  top: -2px;
                  left: -2px;
                  width: calc(100% + 4px);
                  height: calc(100% + 4px);
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

root.innerHTML = header() + imagesSection + descriptionSection + bg()

if(currentProject) {
  document.title = currentProject.title;
}

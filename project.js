import { projects } from './content/content.js';
import { header } from './ui.js';

const toKebabCase = (string) => string.toLowerCase().replace(/\s/g, '-');

const root = document.getElementById('root');
const homeRoot = document.getElementById('home-root');
console.log(homeRoot);

const path = window.location.pathname;
const projectTitle = path.split('/p/')[1]?.replace('.html', '');

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
      background: var(--c);
      height: 1px;
      width: 100%;
      "
    >

    </span>
  </div>
`

const imagesSection = `
  <div class="images-section">    
    ${currentProject.vimeoVideos 
      ? currentProject.vimeoVideos.map(video => `
        <div style="position: relative; padding-top: 56.25%;">
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/${video}" 
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
      `).join('') 
      : ''
    }

    ${currentProject.images ? currentProject.images.map(image => `<img src="../content/images/${image}">`).join('') : ''}
  </div>
`

const descriptionSection = `
  <div class="description-section">
    <p>
      ${currentProject.description}
    </p>
    ${currentProject.descriptionSecondary 
      ? `<p class="description-secondary">${currentProject.descriptionSecondary}</p>` 
      : ``
    }
  </div>
`

root.innerHTML = header() + playerSection + imagesSection + descriptionSection;

if(currentProject) {
  document.title = currentProject.title;
}
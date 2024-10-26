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

const uniqueCategories = [...new Set(projects.map(project => project.category))];

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
    ${currentProject.images.map(image => `<img src="../content/images/${image}">`).join('')}
  </div>
`

const descriptionSection = `
  <div class="description-section">
    <p>
      ${currentProject.description}
    </p>
    <p class="description-secondary">
      ${currentProject.descriptionSecondary}
    </p>
  </div>
`

root.innerHTML = header

if(currentProject) {
  document.title = currentProject.title;
}
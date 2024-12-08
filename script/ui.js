import { projects } from '../content/content.js';

const toKebabCase = (string) => string.toLowerCase().replace(/\s/g, '-');
const uniqueCategories = [...new Set(projects.map(project => project.category))];

export const header = () => {
  const currentPath = window.location.pathname;
  return `
    <header class="header">  
      <h1 class="main-title">
        <a href="/" class="main-title-link">ANDER VALLEJO LARRE</a>
      </h1>

      <nav class="menu">
        <div id="category-list" class="category-list">
          ${uniqueCategories.map(category => {
            return `
              <div 
                class="category-list-item"
                data-category="${toKebabCase(category)}"
              >
                ${category}
              </div>`;
          }).join('')}
        </div>

        <ul class="menu-list" id="menu-list">
          ${projects.map(project => {
            return `
              <li class="menu-list-item" data-category="${toKebabCase(category)}">
                <a 
                  class="menu-list-item-link ${currentPath.includes(project.id) ? 'active' : ''}" 
                  href="/${project.id}.html"
                >
                  ${project.title}
                </a>
              </li>`;
          }).join('')}
        </ul>
      </nav>

      <div class="about-link-section">
        <a class="link" href="/about.html">
          About
        </a>
      </div>
    </header>
  `
}

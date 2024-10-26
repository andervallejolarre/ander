import { projects } from './content/content.js';

const toKebabCase = (string) => string.toLowerCase().replace(/\s/g, '-');
const uniqueCategories = [...new Set(projects.map(project => project.category))];

export const header = `
<header class="header">  
    <h1 class="main-title">
      Ander Vallejo Larre
    </h1>

    <nav class="menu">
      <div id="category-list">
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
            <li class="menu-list-item" data-category="${toKebabCase(project.category)}">
              <a class="menu-list-item-link" href="/p/${toKebabCase(project.title)}.html">${project.title}</a>
            </li>`;
        }).join('')}
      </ul>
    </nav>

    <footer class="footer">
      <p>
        Footer
      </p>
    </footer>
  </header>
`

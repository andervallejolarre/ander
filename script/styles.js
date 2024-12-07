import { projects } from '../content/content.js';

const toKebabCase = (string) => string.toLowerCase().replace(/\s/g, '-');
const uniqueCategories = [...new Set(projects.map(project => project.category))];

let styles = ``

uniqueCategories.forEach(category => {
  console.log(category);
  styles += `
    .menu:has(.category-list-item:hover[data-category="${toKebabCase(category)}"]) .menu-list-item[data-category="${toKebabCase(category)}"] .menu-list-item-link,
    .menu:has(.menu-list-item:hover[data-category="${toKebabCase(category)}"]) .category-list-item[data-category="${toKebabCase(category)}"] {
      color: var(--c);
      -opacity: 1;
    }
    .menu:has(.category-list-item:hover[data-category="${toKebabCase(category)}"]) .menu-list-item:not([data-category="${toKebabCase(category)}"]) .menu-list-item-link,
    .menu:has(.menu-list-item:hover[data-category="${toKebabCase(category)}"]) .category-list-item:not([data-category="${toKebabCase(category)}"]) {
      -opacity: 0.2;
    }
  `;
})

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

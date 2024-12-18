import { projects } from '../content/content.js';

const toKebabCase = (string) => string.toLowerCase().replace(/\s/g, '-');
const uniqueCategories = [...new Set(projects.map(project => project.category))];

export const header = () => {
  const currentPath = window.location.pathname;
  return `
    <header class="header">  
      <h1 class="main-title">
        <a href="/" class="main-title-link">Ander Vallejo Larre</a>
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
              <li class="menu-list-item" data-category="${toKebabCase(project.category)}">
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

// export const bg = () => {
//   return `
//     <div class="bg-section">
//       <svg width="1142" height="1142" viewBox="0 0 1300 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <filter id="displacementFilter">
//         <feTurbulence
//           type="turbulence"
//           baseFrequency="0.01"
//           numOctaves="10"
//           result="turbulence">
//         </feTurbulence>
//         <feDisplacementMap
//           in2="turbulence"
//           in="SourceGraphic"
//           scale="400"
//           xChannelSelector="R"
//           yChannelSelector="G" />
//         </filter>
//         <circle stroke-width="4px" class="line1" cx="571" cy="571" r="280.5" stroke="currentColor" stroke-dasharray="4 56 12 16" style="filter: url(#displacementFilter)"/>
//         <circle class="line2" cx="571" cy="571" r="570.5" stroke="currentColor" stroke-dasharray="4 56 12 16" style="filter: url(#displacementFilter)"/>
//         <path class="line3" d="M704.929 561.742C704.967 564.201 704.99 566.668 704.997 569.143L704.497 569.144C704.498 569.417 704.499 569.69 704.499 569.963C704.5 570.308 704.5 570.654 704.5 571C704.5 571.619 704.499 572.238 704.497 572.856L704.997 572.857C704.939 591.806 703.986 610.309 702.223 628.19L701.725 628.141C698.161 664.291 691.283 697.893 681.789 727.489L682.265 727.642C681.504 730.015 680.726 732.364 679.931 734.685L679.458 734.523C679.06 735.684 678.659 736.839 678.253 737.987L678.725 738.153C672.109 756.87 664.411 773.803 655.824 788.544L655.392 788.292C634.544 824.082 608.516 846.812 580.139 850.852L580.21 851.347C577.775 851.693 575.322 851.904 572.853 851.974L572.839 851.474C572.227 851.491 571.614 851.5 571 851.5C570.386 851.5 569.773 851.491 569.161 851.474L569.147 851.974C551.508 851.472 534.693 843.825 519.33 830.349L519.659 829.973C498.616 811.515 480.272 782.044 466.286 744.943L465.818 745.119C464.954 742.826 464.106 740.504 463.275 738.153L463.747 737.987C463.341 736.839 462.94 735.684 462.542 734.523L462.069 734.685C456.393 718.103 451.556 700.171 447.69 681.164L448.18 681.064C441.85 649.948 438.122 615.943 437.571 580.251L437.071 580.258C437.033 577.799 437.011 575.332 437.003 572.857L437.503 572.856C437.501 572.238 437.5 571.619 437.5 571C437.5 570.381 437.501 569.762 437.503 569.144L437.003 569.143C437.061 550.194 438.014 531.691 439.777 513.81L440.275 513.859C443.839 477.709 450.717 444.107 460.211 414.511L459.735 414.358C460.496 411.984 461.274 409.636 462.069 407.315L462.542 407.477C462.94 406.316 463.341 405.161 463.747 404.013L463.275 403.847C469.891 385.13 477.589 368.197 486.176 353.456L486.608 353.708C507.456 317.918 533.484 295.187 561.861 291.148L561.79 290.653C564.225 290.307 566.678 290.097 569.147 290.026L569.161 290.526C569.773 290.509 570.386 290.5 571 290.5C571.614 290.5 572.227 290.509 572.839 290.526L572.853 290.026C590.492 290.528 607.307 298.175 622.67 311.651L622.341 312.027C643.384 330.485 661.728 359.956 675.714 397.057L676.182 396.881C677.046 399.174 677.894 401.496 678.725 403.847L678.253 404.013C678.659 405.161 679.06 406.316 679.458 407.477L679.931 407.315C685.607 423.897 690.444 441.829 694.31 460.836L693.82 460.936C700.15 492.052 703.878 526.057 704.429 561.749L704.929 561.742Z" stroke="currentColor" stroke-dasharray="4 50 10 19" style="filter: url(#displacementFilter)"/>
//       </svg>
//     </div>
//   `
// }

export const bg2 = () => {
  return `
    <div class="bg-section">
      <video autoplay muted loop playsinline class="bg-video">
        <source src="../assets/bg.mp4" type="video/mp4">
      </video>
    </div>
  `
}

export const bg = () => {
  return `
    <div class="bg-section">
      <img src="../assets/bg.gif" class="bg-img" />
    </div>
  `
}

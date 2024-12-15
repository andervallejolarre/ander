import { projects } from '../content/content.js';
import { header } from './ui.js';

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


const bg = `
  <div class="bg-section">
    <svg width="1142" height="1142" viewBox="0 0 1142 1142" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="displacementFilter">
      <feTurbulence
        type="turbulence"
        baseFrequency="0.05"
        numOctaves="2"
        result="turbulence">
      </feTurbulence>
      <feDisplacementMap
        in2="turbulence"
        in="SourceGraphic"
        scale="40"
        xChannelSelector="R"
        yChannelSelector="G" />
      </filter>
      <circle class="line1" cx="571" cy="571" r="280.5" stroke="currentColor" stroke-dasharray="4 56 12 16" style="filter: url(#displacementFilter)"/>
      <circle class="line2" cx="571" cy="571" r="570.5" stroke="currentColor" stroke-dasharray="4 56 12 16" style="filter: url(#displacementFilter)"/>
      <path class="line3" d="M704.929 561.742C704.967 564.201 704.99 566.668 704.997 569.143L704.497 569.144C704.498 569.417 704.499 569.69 704.499 569.963C704.5 570.308 704.5 570.654 704.5 571C704.5 571.619 704.499 572.238 704.497 572.856L704.997 572.857C704.939 591.806 703.986 610.309 702.223 628.19L701.725 628.141C698.161 664.291 691.283 697.893 681.789 727.489L682.265 727.642C681.504 730.015 680.726 732.364 679.931 734.685L679.458 734.523C679.06 735.684 678.659 736.839 678.253 737.987L678.725 738.153C672.109 756.87 664.411 773.803 655.824 788.544L655.392 788.292C634.544 824.082 608.516 846.812 580.139 850.852L580.21 851.347C577.775 851.693 575.322 851.904 572.853 851.974L572.839 851.474C572.227 851.491 571.614 851.5 571 851.5C570.386 851.5 569.773 851.491 569.161 851.474L569.147 851.974C551.508 851.472 534.693 843.825 519.33 830.349L519.659 829.973C498.616 811.515 480.272 782.044 466.286 744.943L465.818 745.119C464.954 742.826 464.106 740.504 463.275 738.153L463.747 737.987C463.341 736.839 462.94 735.684 462.542 734.523L462.069 734.685C456.393 718.103 451.556 700.171 447.69 681.164L448.18 681.064C441.85 649.948 438.122 615.943 437.571 580.251L437.071 580.258C437.033 577.799 437.011 575.332 437.003 572.857L437.503 572.856C437.501 572.238 437.5 571.619 437.5 571C437.5 570.381 437.501 569.762 437.503 569.144L437.003 569.143C437.061 550.194 438.014 531.691 439.777 513.81L440.275 513.859C443.839 477.709 450.717 444.107 460.211 414.511L459.735 414.358C460.496 411.984 461.274 409.636 462.069 407.315L462.542 407.477C462.94 406.316 463.341 405.161 463.747 404.013L463.275 403.847C469.891 385.13 477.589 368.197 486.176 353.456L486.608 353.708C507.456 317.918 533.484 295.187 561.861 291.148L561.79 290.653C564.225 290.307 566.678 290.097 569.147 290.026L569.161 290.526C569.773 290.509 570.386 290.5 571 290.5C571.614 290.5 572.227 290.509 572.839 290.526L572.853 290.026C590.492 290.528 607.307 298.175 622.67 311.651L622.341 312.027C643.384 330.485 661.728 359.956 675.714 397.057L676.182 396.881C677.046 399.174 677.894 401.496 678.725 403.847L678.253 404.013C678.659 405.161 679.06 406.316 679.458 407.477L679.931 407.315C685.607 423.897 690.444 441.829 694.31 460.836L693.82 460.936C700.15 492.052 703.878 526.057 704.429 561.749L704.929 561.742Z" stroke="currentColor" stroke-dasharray="4 8 110 60" style="filter: url(#displacementFilter)"/>
    </svg>
  </div>
`

const bg2 = `
  <div class="bg-section">
    <svg width="562" height="562" viewBox="0 0 562 562" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="displacementFilter">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.05"
          numOctaves="2"
          result="turbulence">
        </feTurbulence>
        <feDisplacementMap
          in2="turbulence"
          in="SourceGraphic"
          scale="40"
          xChannelSelector="R"
          yChannelSelector="G" />
      </filter>

      <circle class="line1" cx="281" cy="281" r="280.5" stroke="currentColor" stroke-dasharray="4 56 12 16" style="filter: url(#displacementFilter)"/>
      <path class="line2" d="M414.929 271.742C414.967 274.201 414.99 276.668 414.997 279.143L414.497 279.144C414.498 279.417 414.499 279.69 414.499 279.963C414.5 280.308 414.5 280.654 414.5 281C414.5 281.619 414.499 282.238 414.497 282.856L414.997 282.857C414.939 301.806 413.986 320.309 412.223 338.19L411.725 338.141C408.161 374.291 401.283 407.893 391.789 437.489L392.265 437.642C391.504 440.015 390.726 442.364 389.931 444.685L389.458 444.523C389.06 445.684 388.659 446.839 388.253 447.987L388.725 448.153C382.109 466.87 374.411 483.803 365.824 498.544L365.392 498.292C344.544 534.082 318.516 556.812 290.139 560.852L290.21 561.347C287.775 561.693 285.322 561.904 282.853 561.974L282.839 561.474C282.227 561.491 281.614 561.5 281 561.5C280.386 561.5 279.773 561.491 279.161 561.474L279.147 561.974C261.508 561.472 244.693 553.825 229.33 540.349L229.659 539.973C208.616 521.515 190.272 492.044 176.286 454.943L175.818 455.119C174.954 452.826 174.106 450.504 173.275 448.153L173.747 447.987C173.341 446.839 172.94 445.684 172.542 444.523L172.069 444.685C166.393 428.103 161.556 410.171 157.69 391.164L158.18 391.064C151.85 359.948 148.122 325.943 147.571 290.251L147.071 290.258C147.033 287.799 147.011 285.332 147.003 282.857L147.503 282.856C147.501 282.238 147.5 281.619 147.5 281C147.5 280.381 147.501 279.762 147.503 279.144L147.003 279.143C147.061 260.194 148.014 241.691 149.777 223.81L150.275 223.859C153.839 187.709 160.717 154.107 170.211 124.511L169.735 124.358C170.496 121.984 171.274 119.636 172.069 117.315L172.542 117.477C172.94 116.316 173.341 115.161 173.747 114.013L173.275 113.847C179.891 95.1296 187.589 78.1969 196.176 63.4558L196.608 63.7075C217.456 27.9177 243.484 5.18748 271.861 1.14829L271.79 0.653281C274.225 0.306701 276.678 0.0965123 279.147 0.0263295L279.161 0.526128C279.773 0.508728 280.386 0.5 281 0.5C281.614 0.5 282.227 0.508728 282.839 0.526127L282.853 0.0263289C300.492 0.527739 317.307 8.17545 332.67 21.6514L332.341 22.0273C353.384 40.4854 371.728 69.9557 385.714 107.057L386.182 106.881C387.046 109.174 387.894 111.496 388.725 113.847L388.253 114.013C388.659 115.161 389.06 116.316 389.458 117.477L389.931 117.315C395.607 133.897 400.444 151.829 404.31 170.836L403.82 170.936C410.15 202.052 413.878 236.057 414.429 271.749L414.929 271.742Z" stroke="currentColor" stroke-dasharray="4 8 110 60" style="filter: url(#displacementFilter)"/>
    </svg>
  </div>
`

root.innerHTML = header() + playerSection + imagesSection + descriptionSection + bg;

if(currentProject) {
  document.title = currentProject.title;
}

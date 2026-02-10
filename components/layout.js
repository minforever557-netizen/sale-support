import { sidebar } from "./sidebar.js";
import { navbar } from "./navbar.js";

export function layout(content){

 return `
  <div class="layout">
    ${sidebar()}
    <div class="main">
      ${navbar()}
      <div class="content fade-in">
        ${content}
      </div>
    </div>
  </div>
 `;
}


export const content = document.getElementById("content");

export function renderNavbar(navLinkIndex) {
  content.innerHTML = `

  <nav class="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
    <div class="container-xxl">
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="#" class="navbar-brand fw-bold">
        <img src="/src/images/logo.png" alt="Logo" style="width: 50px;">
        Pizza Shop
      </a>
      <div class="row collapse navbar-collapse justify-content-end" id="navbarNav">
        <nav class="navbar-nav nav-fill p-0">
          <a href="#" class="offset-lg-4 nav-link" aria-current="">Home</a>
          <a href="#" class="nav-link" aria-current="">Menu</a>
          <a href="#" class="nav-link" aria-current="">Our advantages</a>
          <a href="#" class="nav-link" aria-current="">Credits</a>
        </nav>
      </div>
    </div>
  </nav>
  `;

  highlightElement(".nav-link", navLinkIndex);
}

function highlightElement(elementsSelector, elementIndex) {
  const elementList = document.querySelectorAll(elementsSelector);

  deactivateElements(elementList);
  activateElement(elementList, elementIndex);
}

function deactivateElements(elementList) {
  elementList.forEach((element) => {
    element.classList.remove("active");

    if (element.attributes["aria-current"]) {
      element.setAttribute("aria-current", "");
    }
  });
}

function activateElement(elementList, elementIndex) {
  const targetElement = elementList[elementIndex];

  targetElement.classList.add("active");

  if (targetElement.attributes["aria-current"]) {
    targetElement.setAttribute("aria-current", "page");
  }
}

// function highlightNavLink(navLinkIndex) {
//   const navLinks = document.querySelectorAll(".nav-link");

//   (function clearActiveNavLinkAttributes() {
//     navLinks.forEach((navLink) => {
//       navLink.classList.remove("active");
//       navLink.setAttribute("aria-current", "");
//     });
//   })();

//   (function addActiveNavLinkAttributes() {
//     navLinks[navLinkIndex].classList.add("active");
//     navLinks[navLinkIndex].setAttribute("aria-current", "page");
//   })();
// }

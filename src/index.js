import * as Pages from "./pages";

function getOrderedPageRenderFunctions() {
  return [
    Pages.renderHomePage,
    Pages.renderMenuPage,
    Pages.renderAdvantagesPage,
    Pages.renderCreditsPage,
  ];
}

function createEventListeners(elementSelector, functionArray, eventType) {
  const elementList = document.querySelectorAll(elementSelector);

  elementList.forEach((element, index) => {
    element.addEventListener(eventType, () => {
      functionArray[index](index);

      createPageRenderEventListeners();
    });
  });
}

// For some reasons event listeners in navbar.js are removed when code is compiled
function createPageRenderEventListeners() {
  const pageRenderFunctions = getOrderedPageRenderFunctions();

  createEventListeners(".nav-link", pageRenderFunctions, "click");
}

document.addEventListener("DOMContentLoaded", () => {
  Pages.renderHomePage();

  createPageRenderEventListeners();
});

import { overviewContent, desingContent, brandContent, developContent } from "./faqData.js";
import { setupDragging } from "./events.js";
import { initializeAccordion } from "./accordion.js";

const faqContainer = document.querySelector(".faq__questions");
const mobileNav = document.querySelector(".mobile .faq__list");
const faqNav = document.querySelectorAll(".faq__item");

const removeStyles = (index1) => {
  faqNav.forEach((item2, index2) => {
    if (index2 !== index1) item2.classList.remove("active");
  });
};

faqNav.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("active");
    removeStyles(index);

    const dataInfo = item.dataset.title;
    if (dataInfo === "overview") faqContainer.innerHTML = overviewContent;
    else if (dataInfo === "design sistem") faqContainer.innerHTML = desingContent;
    else if (dataInfo === "brand design") faqContainer.innerHTML = brandContent;
    else if (dataInfo === "develop website") faqContainer.innerHTML = developContent;

    initializeAccordion();
  });
});

setupDragging(mobileNav);
initializeAccordion();

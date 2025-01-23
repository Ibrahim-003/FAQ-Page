// js/accordion.js
export const initializeAccordion = () => {
  const faqContent = document.querySelectorAll(".faq__question");

  faqContent.forEach((item) => {
    const questionHeader = item.querySelector(".faq__question-header");
    const icon = questionHeader.querySelector(".faq__toggle-icon");

    questionHeader.addEventListener("click", () => {
      item.classList.toggle("open");
      icon.classList.toggle("up");

      const answer = item.querySelector(".faq__answer");
      answer.style.height = item.classList.contains("open")
        ? `${answer.scrollHeight}px`
        : "0px";
    });
  });
};

const faqContainer = document.querySelector(".faq__questions");
const mobileNav = document.querySelector(".mobile .faq__list");
const faqNav = document.querySelectorAll(".faq__item");
const overviewContent = `
            <div class="faq__question">
                    <header class="faq__question-header">
                        <h4 class="faq__question-title">How does it work?</h4>
                        <button class="faq__toggle-button">
                            <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
                        </button>
                    </header>
                    <p class="faq__answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos, culpa aut error debitis voluptatem quas, dolor, modi vitae fugiat pariatur.
                    </p>
                </div>

                <div class="faq__question open">
                    <header class="faq__question-header">
                        <h4 class="faq__question-title">Which platform you support?</h4>
                        <button class="faq__toggle-button">
                            <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon up">
                        </button>
                    </header>
                    <p class="faq__answer active">
                        In a situational interview, the interviewer may ask how you overcame a difficult situation and what you learned from it.
                        You can use your response to demonstrate your flexibility and share an example of how you transformed a negative
                        experience into a positive outcome
                    </p>
                </div>

                <div class="faq__question open">
                    <header class="faq__question-header">
                        <h4 class="faq__question-title">How do I invite my teammates?</h4>
                        <button class="faq__toggle-button">
                            <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon up">
                        </button>
                    </header>
                    <p class="faq__answer active">
                        Collect the contact information of your teammates, including their email addresses or usernames on the platform you will
                        use.
                    </p>
                </div>

                <div class="faq__question">
                    <header class="faq__question-header">
                        <h4 class="faq__question-title">Do you have annual plan?</h4>
                        <button class="faq__toggle-button">
                            <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
                        </button>
                    </header>
                    <p class="faq__answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, suscipit consequuntur nihil perspiciatis vitae
                        delectus aspernatur voluptas omnis necessitatibus, alias id illum. Cum iure consequuntur ad odit repellat sunt
                        illum.
                    </p>
                </div>

                <div class="faq__question">
                    <header class="faq__question-header">
                        <h4 class="faq__question-title">How to create new workspace</h4>
                        <button class="faq__toggle-button">
                            <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
                        </button>
                    </header>
                    <p class="faq__answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, suscipit consequuntur nihil perspiciatis vitae
                        delectus aspernatur voluptas omnis necessitatibus, alias id illum. Cum iure consequuntur ad odit repellat sunt
                        illum.
                    </p>
                </div>

                <div class="faq__question">
                    <header class="faq__question-header">
                        <h4 class="faq__question-title">How do I set roles & permissions?</h4>
                        <button class="faq__toggle-button">
                            <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
                        </button>
                    </header>
                    <p class="faq__answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, suscipit consequuntur nihil perspiciatis vitae
                        delectus aspernatur voluptas omnis necessitatibus, alias id illum. Cum iure consequuntur ad odit repellat sunt
                        illum.
                    </p>
                </div>`;
const desingContent = `
    <div class="faq__question">
        <header class="faq__question-header">
            <h4 class="faq__question-title">What is a Design System?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
            </button>
        </header>
        <p class="faq__answer">
            A Design System is a collection of reusable components, style guides, and principles that ensure visual and functional consistency across digital products.
        </p>
    </div>

    <div class="faq__question open">
        <header class="faq__question-header">
            <h4 class="faq__question-title">Why is a Design System important?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon up">
            </button>
        </header>
        <p class="faq__answer active">
            It helps accelerate development, improve user experience, and maintain design consistency.
        </p>
    </div>

    <div class="faq__question open">
        <header class="faq__question-header">
            <h4 class="faq__question-title">What does a Design System include?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon up">
            </button>
        </header>
        <p class="faq__answer active">
            It includes UI component libraries, typography, colors, spacing, and documentation to guide designers and developers.
        </p>
    </div>

    <div class="faq__question">
        <header class="faq__question-header">
            <h4 class="faq__question-title">Who uses a Design System?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
            </button>
        </header>
        <p class="faq__answer">
            It is used by designers, developers, and product teams to collaborate and create consistent interfaces.
        </p>
    </div>
`;
const brandContent = `
    <div class="faq__question">
        <header class="faq__question-header">
            <h4 class="faq__question-title">What is Brand Design?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
            </button>
        </header>
        <p class="faq__answer">
            It is the process of creating the visual and conceptual identity of a brand to convey its purpose and values.
        </p>
    </div>

    <div class="faq__question open">
        <header class="faq__question-header">
            <h4 class="faq__question-title">What does Brand Design include?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon up">
            </button>
        </header>
        <p class="faq__answer active">
            It includes logos, typography, colors, images, packaging design, and style guides.
        </p>
    </div>

    <div class="faq__question open">
        <header class="faq__question-header">
            <h4 class="faq__question-title">Why is Brand Design important?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon up">
            </button>
        </header>
        <p class="faq__answer active">
            It builds recognition, strengthens consumer trust, and differentiates the brand from competitors.
        </p>
    </div>

    <div class="faq__question">
        <header class="faq__question-header">
            <h4 class="faq__question-title">Who is responsible for Brand Design?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
            </button>
        </header>
        <p class="faq__answer">
            Graphic designers, branding specialists, and marketing teams work together on the process.
        </p>
    </div>

    <div class="faq__question">
        <header class="faq__question-header">
            <h4 class="faq__question-title">How is good Brand Design created?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
            </button>
        </header>
        <p class="faq__answer">
            By analyzing the audience, defining a clear identity, and ensuring consistency across all touchpoints.
        </p>
    </div>
`;
const developContent = `
    <div class="faq__question">
        <header class="faq__question-header">
            <h4 class="faq__question-title">What is website development?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
            </button>
        </header>
        <p class="faq__answer">
            It’s the process of creating, designing, and programming websites to make them functional and user-friendly.
        </p>
    </div>

    <div class="faq__question open">
        <header class="faq__question-header">
            <h4 class="faq__question-title">What skills are needed for website development?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon up">
            </button>
        </header>
        <p class="faq__answer active">
            Knowledge of HTML, CSS, JavaScript, and frameworks like React or Angular; backend skills like databases and server management.
        </p>
    </div>

    <div class="faq__question open">
        <header class="faq__question-header">
            <h4 class="faq__question-title">How long does it take to develop a website?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon up">
            </button>
        </header>
        <p class="faq__answer active">
            It depends on the complexity, ranging from a few days for simple sites to months for complex platforms.
        </p>
    </div>

    <div class="faq__question">
        <header class="faq__question-header">
            <h4 class="faq__question-title">What tools are commonly used in website development?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
            </button>
        </header>
        <p class="faq__answer">
            Tools like VS Code, Git, design software (e.g., Figma), and frameworks like Bootstrap or Tailwind.
        </p>
    </div>

    <div class="faq__question">
        <header class="faq__question-header">
            <h4 class="faq__question-title">How do you ensure a website is responsive?</h4>
            <button class="faq__toggle-button">
                <img src="./resources/Expand_down.svg" alt="#" class="faq__toggle-icon">
            </button>
        </header>
        <p class="faq__answer">
            By using flexible layouts, media queries, and testing across various devices and screen sizes.
        </p>
    </div>
`;

// let isDragging = false;

// const dragging = (e) => {
//     if (!isDragging) return;
//     mobileNav.scrollLeft -= e.movementX;
// }

// mobileNav.addEventListener("mousedown", () => isDragging = true);
// mobileNav.addEventListener("mousemove", dragging)
// document.addEventListener("mouseup", () => isDragging = false);
// mobileNav.addEventListener("touchstart", () => (isDragging = true));
// mobileNav.addEventListener("touchmove", dragging);
// document.addEventListener("touchend", () => (isDragging = false));

let isDragging = false;
let startX;

const dragging = (e) => {
  if (!isDragging) return;

  let movementX;
  if (e.type === "mousemove") {
    movementX = e.movementX;
  } else if (e.type === "touchmove") {
    const touch = e.touches[0];
    movementX = startX - touch.clientX;
    startX = touch.clientX;
  }


  mobileNav.scrollLeft += movementX;
};


mobileNav.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
});
mobileNav.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", () => (isDragging = false));

// Eventos para toque
mobileNav.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX; // Posición inicial del toque
});
mobileNav.addEventListener("touchmove", dragging);
document.addEventListener("touchend", () => (isDragging = false));


const initializeAccordion = () => {
  const faqContent = document.querySelectorAll(".faq__question");

  faqContent.forEach((item) => {
    const questionHeader = item.querySelector(".faq__question-header");
    const icon = questionHeader.querySelector(".faq__toggle-icon");

    questionHeader.addEventListener("click", () => {
      item.classList.toggle("open");
      icon.classList.toggle("up");

      let answer = item.querySelector(".faq__answer");

      if (item.classList.contains("open")) {
        answer.style.height = `${answer.scrollHeight}px`;
      } else {
        answer.style.height = "0px";
      }
    });
  });
};

const removeStyles = (index1) => {
  faqNav.forEach((item2, index2) => {
    if (index2 !== index1) {
      item2.classList.remove("active");
    }
  });
};

faqNav.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("active");
    removeStyles(index);

    const dataInfo = item.dataset.title;

    if (dataInfo == "overview") {
      faqContainer.innerHTML = overviewContent;
    } else if (dataInfo == "design sistem") {
      faqContainer.innerHTML = desingContent;
    } else if (dataInfo == "brand design") {
      faqContainer.innerHTML = brandContent;
    } else if (dataInfo == "develop website") {
      faqContainer.innerHTML = developContent;
    }

    initializeAccordion();
  });
});

initializeAccordion();

// js/events.js
export const setupDragging = (mobileNav) => {
  let isDragging = false;
  let startX;

  const dragging = (e) => {
    if (!isDragging) return;

    let movementX =
      e.type === "mousemove" ? e.movementX : startX - e.touches[0].clientX;
    if (e.type === "touchmove") startX = e.touches[0].clientX;

    mobileNav.scrollLeft += movementX;
  };

  mobileNav.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
  });
  mobileNav.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", () => (isDragging = false));

  mobileNav.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
  });
  mobileNav.addEventListener("touchmove", dragging);
  document.addEventListener("touchend", () => (isDragging = false));
};

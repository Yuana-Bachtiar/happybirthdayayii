// JavaScript for interactive ribbon (optional, if not using hover)
const card = document.querySelector(".card");
const ribbon = document.querySelector(".ribbon");

// Add click event for toggling ribbon visibility
card.addEventListener("click", () => {
  ribbon.classList.toggle("active");
});

// Add active class to enable ribbon animation
document.querySelector(".ribbon").classList.remove("active");

// ANIMATE LINES
const lines = document.querySelectorAll("#project-banner .decor-el svg path");
lines.forEach((line, index) => {
  line.style.animation = `moveVertical ease 1.5s infinite alternate-reverse`;
  line.style.animationDelay = `${index / 10}s`;
});

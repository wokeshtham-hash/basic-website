document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer p");

  if (footer) {
    footer.textContent = `Basic website starter created locally in ${new Date().getFullYear()}.`;
  }
});

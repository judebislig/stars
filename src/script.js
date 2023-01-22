// Toggle dark mode

function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark");
}


// Scroll to Top Button

function scrollUp() {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

//Download alert

function downloadPrompt() {
  alert("App isn't available yet. Stay tuned!");
}
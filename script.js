// Small JavaScript interactions for the portfolio

// Show or hide the mobile navigation menu.
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Close the mobile menu after choosing a section.
const menuItems = document.querySelectorAll(".nav-links a");
menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

// Display the current year automatically in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// A simple button message.
document.getElementById("helloButton").addEventListener("click", function () {
  document.getElementById("helloMessage").textContent =
    "Thank you for visiting my portfolio. I look forward to connecting with you!";
});

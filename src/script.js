const links = document.querySelectorAll(".header-navigation a");

// Function to set active class based on the current page
function setActiveLink() {
  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Add event listener for clicks on each link
links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});

// Call the function to set the active link on page load
setActiveLink();

// Select the menu icon and navigation menu
const menuIcon = document.querySelector(".menu");
const navigationMenu = document.querySelector(".header-navigation");

// Add a click event listener to toggle the menu
menuIcon.addEventListener("click", () => {
  console.log("Menu icon clicked");
  navigationMenu.classList.toggle("active");
});

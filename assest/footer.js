document.getElementById("hamburger-btn").addEventListener("click", function() {
    var footer = document.querySelector("footer");
    if (footer.style.display === "none") {
      footer.style.display = "block"; // Show the footer if it's hidden
    } else {
      footer.style.display = "none"; // Hide the footer
    }
  });
  
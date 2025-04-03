const btn = document.querySelector(".btn-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
    localStorage.setItem("theme", theme);
  });
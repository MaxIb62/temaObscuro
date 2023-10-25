function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
       
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
     
        localStorage.setItem("theme", "light");
    }
}


const themeToggleButton = document.getElementById("theme-toggle-button");
themeToggleButton.addEventListener("click", toggleTheme);


const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
    toggleTheme();
}

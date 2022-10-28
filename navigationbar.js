document.write(`
<head>
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="navigationbar.css">
</head>
<div id="background"></div>
<div id="overlay"></div>
<div id="mobile-navbar">
    <nav>
        <ul id="mobile-nav-buttons">
            <li class="mobile-nav-button" 
            onclick="location.href='index.html';" 
            style="cursor: pointer;">
                <span>HOME</span>
            </li>
            <li class="mobile-nav-button"
            onclick="location.href='projects.html';" 
            style="cursor: pointer;">
                <span>PROJECTS</span>
            </li>
            <li class="mobile-nav-button"
            onclick="location.href='about.html';" 
            style="cursor: pointer;">
                <span>ABOUT</span>
            </li>
        </ul>
    </nav>
</div>    
<div id="desktop-navbar-perspective">
    <div id="desktop-navbar-container">  
        <nav id="desktop-navbar">    
            <ul id="desktop-nav-buttons">
                <li class="desktop-nav-button">
                    <span><a href="index.html">HOME</a></span>
                </li>
                <li class="desktop-nav-button">
                    <span><a href="projects.html">PROJECTS</a></span>
                </li>
                <li class="desktop-nav-button">
                    <span><a href="about.html">ABOUT</a></span>
                </li>
            </div>
        </nav>
    </div>
</div>
`);

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-transition-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-transition-stopper");
    }, 100);
});

let desktop_nav_buttons = document.body.getElementsByClassName("desktop-nav-button");
const overlay = document.getElementById("overlay");
for (let button of desktop_nav_buttons) {
    button.addEventListener("mouseenter", () => {
        overlay.style.opacity = "0.8";
        setTimeout(() => {
            document.getElementById("page-content").style.zIndex = "-1";
        }, 100)
    })

    button.addEventListener("mouseleave", () => {
        overlay.style.opacity = "0";
        setTimeout(() => {
            document.getElementById("page-content").style.zIndex = "0";
        }, 100)
    })
};
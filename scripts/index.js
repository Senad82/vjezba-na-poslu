const homePage = `
<div class="home">
    <h1>Welcome to my blog!</h1>
    <p>If you want to know more about me, 
    please click on this link<span><i><a class="work-link" href="#" onclick="aboutMe()">about me.</a></i></span></p>
    <br>
    <img class="dev-picture" src="images/dev-screen.jpg" alt="Developer screen" />
</div>
`;

const nav = `
<nav>
    <ul class="main-unlist">
        <li><a href="#" onclick="home()">Home</a></li>
        <li><a href="#" onclick="aboutMe()">About</a></li>
        <li><a href="#" onclick="myWork()">My Work</a></li>
    </ul>
</nav>
`;

const sideMenu = `
<h3 class="side-headlines">Top News</h3>
<ul class="side-unlist">
    <li class="side-list"><a onclick="headlines()" href="#">Headlines</a></li>
    <li class="side-list"><a href="#" onclick="news()">Current news</a></li>
    <li class="side-list"><a href="#">FAQ</a></li>
    <li class="side-list"><a href="#">World</a></li>
</ul>
`;

function home() {
    document.querySelector(".content").innerHTML = homePage;
}

function mainNav() {
    document.querySelector(".main-nav").innerHTML = nav;
}

function sideNav() {
    document.querySelector(".side-menu").innerHTML = sideMenu;
}
window.onload = home(), mainNav(), sideNav();
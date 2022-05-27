const contentAbout = `
    <div class="about">
        <img class="senad" src="images/senad-profile.png"/>
        <h1 class="name">My name is Senad Dzihanic</h1>
        <h4 class="titles">Frontend Developer · Entry level Java Developer · HTML Developer · Web Design Specialist · Javascript Developer</h4>
        <br>
        <p class="about-para">Entry lvl Java Developer, experience in school - assignments. I worked in numerous programming languages
        including Java, HTML5, JavaScript,CSS3, MySQL. Learning Angular.js. and Spring.The private sector gave me a lot of
        knowledge about policy work. I am looking for strategic long-term solutions.</p>
    </div>
`;

function aboutMe() {
    document.querySelector(".content").innerHTML = contentAbout;
}
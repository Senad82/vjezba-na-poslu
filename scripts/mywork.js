const contentMyWork = `
    <div class="about">
        <img class="senad" src="images/senad-profile.png"/>
        <h2 class="name">Visit my <a class="work-link" href="https://github.com/Senad82" target="_blank">Github account.</a></h2>
        <h2 class="name">My <a class="work-link" href="https://www.linkedin.com/in/senad-dzihanic/" target="_blank">LinkedIn account.</a></h2>
    </div>
`;

function myWork() {
    document.querySelector(".content").innerHTML = contentMyWork;
}
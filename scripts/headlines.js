const content1 = `
<div class="headlines">
    <h1>Headlines:</h1>
    <h3>Lorem ipsum...</h2>
    <h3>Lorem ipsum dolor sit amet...</h2>
    <h3>Excepteur sint occaecat...</h2>
    <h3>Sed ut perspiciatis unde...</h2>
    <h3>Quis autem vel eum iure...</h2>
</div>
<div class="headlines">
    <h1>Today:</h1>
    <h3>Lorem ipsum...</h2>
    <h3>Lorem ipsum dolor sit amet...</h2>
    <h3>Excepteur sint occaecat...</h2>
    <h3>Sed ut perspiciatis unde...</h2>
    <h3>Quis autem vel eum iure...</h2>
</div>
<div class="headlines">
    <h1>Yesterday:</h1>
    <h3>Lorem ipsum...</h2>
    <h3>Lorem ipsum dolor sit amet...</h2>
    <h3>Excepteur sint occaecat...</h2>
    <h3>Sed ut perspiciatis unde...</h2>
    <h3>Quis autem vel eum iure...</h2>
</div>
<div class="headlines">
    <h1>Fun:</h1>
    <h3>Lorem ipsum...</h2>
    <h3>Lorem ipsum dolor sit amet...</h2>
    <h3>Excepteur sint occaecat...</h2>
    <h3>Sed ut perspiciatis unde...</h2>
    <h3>Quis autem vel eum iure...</h2>
</div>
`;

function headlines() {
    document.querySelector(".content").innerHTML = content1;
}
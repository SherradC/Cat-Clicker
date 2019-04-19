const click = document.getElementById('catcat');
const counter = document.getElementById("counter");

var count=0;   
const clicker = function() {
    count++;
    counter.innerHTML=`Clicks: ${count}`;
};

click.addEventListener('click', () => clicker());
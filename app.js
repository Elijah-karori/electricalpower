const Homepower = document.getElementById('home');
const hoursUsage = document.getElementById('hours');
const budget = document.getElementById('budget');

function Load() {
    let power = 0;

    if (Homepower) {
        return power = Homepower.value;
    }

    const ledpower = document.getElementById('led').value;
    const tvpower = document.getElementById('tv').value;
    const kitckenpower = document.getElementById('kitchen').value;
    const otherpower = document.getElementById('others').value;
    const average = document.getElementById('average').value;

    power = (ledpower + tvpower + kitckenpower + otherpower) || average ? average : false;
const output= document.getElementById('output');

    console.log(power);
output
    let PowerKwh = 0;
    PowerKwh = power * hoursUsage.value;
    console.log(PowerKwh);
}
 
const calculate = document.getElementById('Calculate');
calculate.addEventListener('click', Load());
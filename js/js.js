const btn = document.querySelector('button');
const pContain = document.getElementById("contain");

function getRandom(){
    const min = 0;
    const max = 1000;
    const randomValue = Math.round(Math.random() * (max - min) + min);
    return randomValue;
}


btn.addEventListener('click', () =>{
    const randomNum = getRandom();
    const valueHolder = document.createElement("p");
    valueHolder.textContent = randomNum;
    

    const oldVH = pContain.querySelector('p');
    if (oldVH){
    oldVH.remove();
    }

    if (randomNum >= 700 && randomNum <= 770){
        valueHolder.style.color = "green";
        console.log("You Got It!")
    } else if(randomNum === 777){
        valueHolder.style.color = "gold";
        alert("You found THE number!");
    } else {
        console.log(`${randomNum}, fail`);
    }
    
    pContain.appendChild(valueHolder);

})
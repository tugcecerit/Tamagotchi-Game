class Tamagotchi {
    constructor(hungerLevel, sleepinessLevel, boredomLevel, age, name) {
        this.hungerLevel = hungerLevel
        this.sleepinessLevel = sleepinessLevel
        this.boredomLevel = boredomLevel
        this.age = age
        this.name = name
    }
  }

  let newMonster = new Tamagotchi(this.hungerLevel, this.sleepinessLevel, this.boredomLevel, this.age, this.name)

const button1 = document.querySelector('.start');
const button2 = document.querySelector('.htp');
const nameShow = document.querySelector(".nameclass")

button1.addEventListener("click", (e) => {
    e.preventDefault();
    button1.remove();
    button2.remove();
    let nameMonster = prompt("Name your little monster:", `${this.name}`);
    nameShow.innerHTML = `${nameMonster}'s World!`;
});

button2.addEventListener("click", (e) => {
    e.preventDefault();
    alert ("You are now the caretaker of a genuine Tamagothchi. Tamagotchi is a cyber creature who has travelled millions of miles from its home planet to learn what life is like on earth.");
    alert ("All you need to do is look after your baby, feed, put sleep, make happy. If you forget any of them, you can kill your baby. Don't forget, your little monster needs you!");
  })
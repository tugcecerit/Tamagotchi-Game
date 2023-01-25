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
  const pic = document.getElementById('greeting');
  const hunger = document.querySelector('.hungerbar');
  const sleepiness = document.querySelector('.sleepinessbar');
  const boredom = document.querySelector('.boredombar');
  const hungerBarNames = document.querySelector('.hungerbarname');
  const sleepinessBarNames = document.querySelector('.sleepinessbarname');
  const boredomBarNames = document.querySelector('.boredombarname');
  const sleepButton = document.querySelector('.sleep');
  const eatButton = document.querySelector('.eat');
  const playButton = document.querySelector('.play');
  const ageShow = document.querySelector(".ageclass")
  const nameShow = document.querySelector(".nameclass")
  const diedBaby = document.querySelector(".babyDie")
  const byebye = document.querySelector(".bye")
  
  button1.addEventListener("click", (e) => {
    e.preventDefault();
    button1.remove();
    button2.remove();
    pic.src = "pic/pngegg.png"
    hunger.style.display = "block";
    sleepiness.style.display = "block";
    boredom.style.display = "block";
    hungerBarNames.style.display = "block";
    sleepinessBarNames .style.display = "block";
    boredomBarNames.style.display = "block";
    sleepButton.style.display = "inline";
    eatButton.style.display = "inline";
    playButton.style.display = "inline";
    ageShow.style.display = "block";
    setInterval(ageOf, 20000);
    setTimeout(() => { setInterval(decreaseHunger, 7000);},20000);
    setTimeout(() => { setInterval(decreaseSleepiness, 7000);}, 20000);
    setTimeout(() => { setInterval(decreaseBoredom, 7000);}, 20000);
    setTimeout(() => pic.src = "pic/born.png", 20000);
    setTimeout(() => document.body.style.backgroundColor = "aliceblue", 10000);
    setTimeout(() => sleepButton.addEventListener("click", (e) => {
        e.preventDefault();
        increaseSleepiness();
        pic.src = "pic/sleep.png"
        document.body.style.backgroundColor = "gray"
    }),20000);
    setTimeout(() => eatButton.addEventListener("click", (e) => {
        e.preventDefault();
        increaseHunger();
        pic.src = "pic/eat.png"
        document.body.style.backgroundColor = "aliceblue"
    }),20000);
    setTimeout(() => playButton.addEventListener("click", (e) => {
        e.preventDefault();
        increaseBoredom();
        pic.src = "pic/play.png";
        document.body.style.backgroundColor = "aliceblue";
    }),20000);
    let nameMonster = prompt("Name your little monster:", `${this.name}`);
    nameShow.innerHTML = `${nameMonster}'s World!`;
    die();
    animation();
  });
  
  button2.addEventListener("click", (e) => {
    e.preventDefault();
    alert ("You are now the caretaker of a genuine Tamagothchi. Tamagotchi is a cyber creature who has travelled millions of miles from its home planet to learn what life is like on earth.");
    alert ("All you need to do is look after your baby, feed, put sleep, make happy. If you forget any of them, you can kill your baby. Don't forget, your little monster needs you!");
  })
  
  
  this.age = 0
  function ageOf() {
    this.age += 1;
    document.getElementById("age").innerHTML= this.age;
  }
  
  this.hungerLevel = 100;
  function decreaseHunger() {
  this.hungerLevel -= 5;
  pic.src = "pic/born.png";
  document.body.style.backgroundColor = "aliceblue";
  document.getElementById("hungerlevel").style.width = this.hungerLevel + "%";
    if (this.hungerLevel === 0) {
        clearInterval()
        return die();
    } else if (this.hungerLevel <= 50 && this.hungerLevel >= 30) {
        document.getElementById("hungerlevel").style.backgroundColor = "orange"
    } else if (this.hungerLevel < 30) {
        document.getElementById("hungerlevel").style.backgroundColor = "red";
        // pic.src = "pic/cry.png";
        // document.body.style.backgroundColor = "maroon";
    }
  }
  
  
  this.sleepinessLevel = 100;
  function decreaseSleepiness() {
  this.sleepinessLevel -= 5;
  pic.src = "pic/born.png";
  document.body.style.backgroundColor = "aliceblue";
  document.getElementById("sleepinesslevel").style.width = this.sleepinessLevel + "%";
    if (this.sleepinessLevel === 0) {
        clearInterval()
        return die();
    } else if (this.sleepinessLevel <= 50 && this.sleepinessLevel >= 30) {
        document.getElementById("sleepinesslevel").style.backgroundColor = "orange"
    } else if (this.sleepinessLevel < 30) {
        document.getElementById("sleepinesslevel").style.backgroundColor = "red";
        // pic.src = "pic/cry.png";
        // document.body.style.backgroundColor = "maroon";
    }
  }
  
  
  this.boredomLevel = 100;
  function decreaseBoredom() {
  this.boredomLevel -= 5;
  pic.src = "pic/born.png";
  document.body.style.backgroundColor = "aliceblue";
  document.getElementById("boredomlevel").style.width = this.boredomLevel + "%";
    if (this.boredomLevel === 0) {
        clearInterval()
        return die();
    } else if (this.boredomLevel <= 50 && this.boredomLevel >= 30) {
        document.getElementById("boredomlevel").style.backgroundColor = "orange"
    } else if (this.boredomLevel < 30) {
        document.getElementById("boredomlevel").style.backgroundColor = "red";
        // pic.src = "pic/cry.png";
        // document.body.style.backgroundColor = "maroon";
    }
  }
  
  function increaseHunger() {
    this.hungerLevel += 10;
    document.getElementById("hungerlevel").style.width = this.hungerLevel + "%";
    if (this.hungerLevel >= 100) {
        return
    } else if (this.hungerLevel <= 100 && this.hungerLevel >= 50) {
        document.getElementById("hungerlevel").style.backgroundColor = "#2BC253"
    } else if (this.hungerLevel <= 50 && this.hungerLevel >= 30) {
        document.getElementById("hungerlevel").style.backgroundColor = "orange"
    } else if (this.hungerLevel < 30) {
        document.getElementById("hungerlevel").style.backgroundColor = "red"
    }
    }
  
  
  function increaseSleepiness() {
  this.sleepinessLevel += 10;
  document.getElementById("sleepinesslevel").style.width = this.sleepinessLevel + "%";
  if (this.sleepinessLevel >= 100) {
    return 
  } else if (this.sleepinessLevel <= 100 && this.sleepinessLevel >= 50) {
    document.getElementById("sleepinesslevel").style.backgroundColor = "#2BC253"
  } else if (this.sleepinessLevel <= 50 && this.sleepinessLevel >= 30) {
    document.getElementById("sleepinesslevel").style.backgroundColor = "orange"
  } else if (this.sleepinessLevel < 30) {
    document.getElementById("sleepinesslevel").style.backgroundColor = "red"
  }
  }
  
    function increaseBoredom() {
       this.boredomLevel += 10;
        document.getElementById("boredomlevel").style.width = this.boredomLevel + "%";
        if (this.boredomLevel >= 100) {
            return
        } else if (this.boredomLevel <= 100 && this.boredomLevel >= 50) {
            document.getElementById("boredomlevel").style.backgroundColor = "#2BC253"
        } else if (this.boredomLevel <= 50 && this.boredomLevel >= 30) {
            document.getElementById("boredomlevel").style.backgroundColor = "orange"
        } else if (this.boredomLevel < 30) {
            document.getElementById("boredomlevel").style.backgroundColor = "red"
        }
        }
  
  
    function die() {
        if (this.hungerLevel === 0 || this.sleepinessLevel === 0 || this.boredomLevel === 0) {
            pic.src = "pic/opps.png"
            hunger.remove()
            boredom.remove()
            sleepiness.remove()
            boredomBarNames.remove()
            sleepinessBarNames.remove()
            hungerBarNames.remove()
            playButton.remove()
            eatButton.remove()
            sleepButton.remove()
            ageShow.remove()
            nameShow.remove()
            diedBaby.style.display = "block"
            byebye.style.display = "block"
        }
    }

    function animation() {
        setInterval(() => {
        const horizontal = Math.floor(Math.random() * 15)
        const vertical = Math.floor(Math.random() * 25)
        pic.style.transform = `translate(${horizontal}px,${vertical}px)`}, 500)}      
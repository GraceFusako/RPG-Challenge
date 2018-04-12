var title = document.getElementById("title")
var text = document.getElementById("text")
var start = document.getElementById("start")
var sword = document.getElementById("sword")
var shield = document.getElementById("shield")
var bow = document.getElementById("bow")
var run = document.getElementById("run")
var stab = document.getElementById("stab")
var slash = document.getElementById("slash")
var deflect = document.getElementById("deflect")
var bash = document.getElementById("bash")
var fire = document.getElementById("fire")
var toss = document.getElementById("toss")
var retry = document.getElementById("retry")

sword.style.visibility = "hidden";
shield.style.visibility = "hidden";
bow.style.visibility = "hidden";
run.style.visibility = "hidden";
stab.style.visibility = "hidden";
slash.style.visibility = "hidden";
deflect.style.visibility = "hidden";
bash.style.visibility = "hidden";
fire.style.visibility = "hidden";
toss.style.visibility = "hidden";
retry.style.visibility = "hidden";

var i = 1

function changeText() {
    text.innerHTML = "You have accepted the quest to kill a dragon. You have three weapons laying in front of you. A broad sword, an iron sheild, or a long bow. Which do you choose?"
    start.style.visibility = "hidden"
    sword.style.visibility = "visible"
    shield.style.visibility = "visible"
    bow.style.visibility = "visible"
}

function chooseSword() {
    text.innerHTML = "You have picked up the broad sword. You search for the dragon, and after 3 months of searching you have finally found it. It's silhouette giving its position away from above the clouds. It spots you, diving instantly in an attempt to attach. What action do you take? Stab at it's stomach, Slash at its wings, or Run away?"
    sword.style.visibility = "hidden"
    shield.style.visibility = "hidden"
    bow.style.visibility = "hidden"
    run.style.visibility = "visible"
    stab.style.visibility = "visible"
    slash.style.visibility = "visible"
}

function stabDragon() {
    title.innerHTML = "You Lose"
    text.innerHTML = "You attack the Dragon with your sword, stabbing towards its stomach (thinking it is the weak spot), only for it to bounce off of its scales and shatter. The dragon swallows you whole, and you die while sitting in a pool of stomach acid."
    run.style.visibility = "hidden"
    stab.style.visibility = "hidden"
    slash.style.visibility = "hidden"
    retry.style.visibility = "visible"
}

function slashWings() {
    title.innerHTML = "You Win"
    text.innerHTML = "You attack the dragon with your sword, attempting to slash the Dragons wings. Your sword slides through its left wing like a hot knife through butter. It cries out in pain, falling to the ground with a loud thump. It looks up at you with wide eyes, only for you to train it to be your pet. You two become the best of friends, just like from How to Train your Dragon."
    run.style.visibility = "hidden"
    stab.style.visibility = "hidden"
    slash.style.visibility = "hidden"
    retry.style.visibility = "visible"
}

function chooseShield() {
    text.innerHTML = "You have picked up the iron shield. You search for the dragon, and after 4 months of searching you have finally found it. It's large figure easily visible from a top the large cliff ahead of you. It spots you, diving instantly in an attempt to attack. What action do you take? Deflect its attack, Bash its head with your shield, or Run away?"
    sword.style.visibility = "hidden"
    shield.style.visibility = "hidden"
    bow.style.visibility = "hidden"
    run.style.visibility = "visible"
    deflect.style.visibility = "visible"
    bash.style.visibility = "visible"
}

function deflectAttack() {
    if(i < 5) {
        text.innerHTML = "You deflect the Dragons attack. What do you do next?"
        i += 1
    }
    else if (i == 5) {
        text.innerHTML = "Choose something else."
        i += 1
    }
    else if (i == 6) {
        text.innerHTML = "Please choose somthing else."
        i += 1
    }
    else if (i == 7) {
        text.innerHTML = "I am warning you."
        i += 1
    }
    else if (i == 8) {
        text.innerHTML = "Last Warning. Don't click it again."
        i += 1
    }
    else if (i == 9) {
        text.innerHTML = "Fuck you."
        i += 1
    }
    else if (i == 10) {
        title.innerHTML = "Choose Your Own Adventure"
        text.innerHTML = "Do you accept the challenge?"
        sword.style.visibility = "hidden";
        shield.style.visibility = "hidden";
        bow.style.visibility = "hidden";
        run.style.visibility = "hidden";
        stab.style.visibility = "hidden";
        slash.style.visibility = "hidden";
        deflect.style.visibility = "hidden";
        bash.style.visibility = "hidden";
        fire.style.visibility = "hidden";
        toss.style.visibility = "hidden";
        retry.style.visibility = "hidden";
        start.style.visibility = "visible"
        i = 1
    }
}

function bashHead() {
    title.innerHTML = "You Lose"
    text.innerHTML = "You attempt to jump on top of the Dragon to bash its head in with your shield, but when you jump onto the dragon, it does a sweet flip, making you fall hundreds of feet down to the ground, where you break your legs. You starve to death, unable to get help due to your broken legs."
    run.style.visibility = "hidden"
    deflect.style.visibility = "hidden"
    bash.style.visibility = "hidden"
    retry.style.visibility = "visible"
}

function chooseBow() {
    text.innerHTML = "You have picked up the long bow. You search for the dragon, and after a fortnight of searching you have finally found it. It's giant, scaly body slithers from the cave. It spots you, instantly lunging in an attempt to attack you. What action do you take? Fire an arrow at it's eyes, Throw the bow (because arrows are for weaklings), or Run away?"
    sword.style.visibility = "hidden"
    shield.style.visibility = "hidden"
    bow.style.visibility = "hidden"
    run.style.visibility = "visible"
    fire.style.visibility = "visible"
    toss.style.visibility = "visible"
}

function fireArrow() {
    title.innerHTML = "You Lose"
    text.innerHTML = "You fire an arrow, one after the other, at the Dragon, but it uneffected by your puny human weapons. It bites your head off, leaving you on the ground, a gruesome decapitated mess. Nice try, asshole."
    run.style.visibility = "hidden"
    fire.style.visibility = "hidden"
    toss.style.visibility = "hidden"
    retry.style.visibility = "visible"
}

function tossBow() {
    title.innerHTML = "You Win"
    text.innerHTML = "Who the fuck throws their bow at a Dragon? You are one insane individual. I like it. The Dragon ends up being super susceptible to the whisky that you had spilt on your bow the night before, instantly making it drunk. You and the Dragon bond over a few drinks, and become best buddies. You eventually fall in love, and get married, producing devil like dragon human creature babies. You live happily ever after."
    run.style.visibility = "hidden"
    fire.style.visibility = "hidden"
    toss.style.visibility = "hidden"
    retry.style.visibility = "visible"
}

function runAway() {
    title.innerHTML = "You Lose"
    text.innerHTML = "Cowardace isn't the sign of a true hero. Try again, and don't be a wimp."
    run.style.visibility = "hidden";
    stab.style.visibility = "hidden";
    slash.style.visibility = "hidden";
    deflect.style.visibility = "hidden";
    bash.style.visibility = "hidden";
    fire.style.visibility = "hidden";
    toss.style.visibility = "hidden";
    retry.style.visibility = "visible"
}

function retryGame() {
    title.innerHTML = "Choose Your Own Adventure"
    text.innerHTML = "Do you accept the challenge?"
    retry.style.visibility = "hidden"
    start.style.visibility = "visible"
}
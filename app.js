let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameover = document.querySelector("#gameOver");
// const btn = document.querySelector('.btn');
const dinoimg = document.querySelector('.dinoimg');
const blockimg = document.querySelector('.blockimg');
const img = document.querySelectorAll('#cloud img')

let gameend = false;
let sc = 0;


const whitecolor = setInterval(white, 5000);
const blackolor = setInterval(black, 10000);


window.addEventListener('keydown', function (e) {
    if (e) {
        score.innerHTML = `Score <b> ${sc} </b>`
        start();
    }
});
function start() {
    gameover.style.display = "none";
    block.classList.add("blockActive");
    road.classList.add("roadActive");
    img.forEach(i => {
        i.classList.remove('hide')
    });

    cloud.classList.add("cloudActive");
    block.classList.add("blockActive");




}

window.addEventListener('keydown', function (e) {
    if (e.keyCode === 32) {
        var audio = new Audio("green.mp3");
        audio.play();
        sc++;
        score.innerHTML = `Score <b> ${sc} </b>`;



        if (dino.classList != 'dinoActive') {
            dino.classList.add('dinoActive')
            setTimeout(() => {
                dino.classList.remove('dinoActive')
            }, 500);
        }
    }
});


function over() {
    clearInterval(whitecolor);
    clearInterval(blackolor);
    var audio = new Audio("wrong.mp3");
    audio.play();
    gameover.style.display = "block";
    block.classList.remove("blockActive");
    road.classList.remove("roadActive");
    cloud.classList.remove("cloudActive");
    img.forEach(i => {
        i.classList.add('hide')
    });
    block.classList.remove("blockActive");
    sc = 0;

}
setInterval(() => {
    let dinobottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    let blockleft = parseInt(getComputedStyle(block).getPropertyValue("left"));

    if (blockleft <= 90 && blockleft > 20 && dinobottom <= 95) {
        over()

    }
}, 10);





function white() {
    document.body.style.backgroundColor = "black";
    score.style.color = "white";
    gameover.classList.add("text-white");

    dinoimg.setAttribute("src", "img/dino1.png");
    blockimg.setAttribute("src", "img/block1.png");
    var c = cloud.children;
    for (var i = 0; i < c.length; i++) {
        c[i].setAttribute("src", "img/cloud1.png");
    }
}
function black() {
    document.body.style.backgroundColor = "white";
    score.style.color = "black";
    gameover.classList.remove("text-white");

    dinoimg.setAttribute("src", "img/dino.png");
    blockimg.setAttribute("src", "img/block.png");
    var c = cloud.children;
    for (var i = 0; i < c.length; i++) {
        c[i].setAttribute("src", "img/cloud.png");
    }
}




// btn.addEventListener('dblclick', function () {
//     if (btn.innerHTML == "DARK MODE") {
//         btn.innerHTML = "LIGHT MODE";
//         gameover.classList.add("text-white");
//         document.body.style.backgroundColor = "black";
//         btn.classList.add('btn-light')
//         score.style.color = "white";
//         dinoimg.setAttribute("src", "img/dino1.png");
//         blockimg.setAttribute("src", "img/block1.png");
//         var c = cloud.children;
//         for (var i = 0; i < c.length; i++) {
//             c[i].setAttribute("src", "img/cloud1.png");
//         }
//     }


//     else if (btn.innerHTML == "LIGHT MODE") {
//         btn.innerHTML = "DARK MODE";
//         btn.classList.remove('btn-light')
//         document.body.style.backgroundColor = "white";
//         gameover.classList.remove("text-white");
//         score.style.color = "black";
//         dinoimg.setAttribute("src", "img/dino.png");
//         blockimg.setAttribute("src", "img/block.png");
//         var c = cloud.children;
//         for (var i = 0; i < c.length; i++) {
//             c[i].setAttribute("src", "img/cloud.png");
//         }
//     }

// })

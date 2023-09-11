window.onload = function() {
    animate();
};

function animateItem(id){
    console.log(id);
    var animation = anime({
        targets: '#proj'+id,
        translateY: 0,
        opacity: 1,
        duration: 600,
        easing: 'easeInOutSine',
        autoplay: false
      });
    return animation;
}

function animate(){
    console.log("checkpoint 1...");
    for (let i = 1; i <= 9; i++) {
        let objAnimate = animateItem(i);
        easeIn(i, objAnimate);
        handleScroll(i, objAnimate);
    }
}

function handleScroll(id, animation) {
    let H = window.innerHeight;
    let client = (document.querySelector("#proj"+id).getBoundingClientRect());
    let h = client.height;
    let y = client.y;

    let a = 0.25;
    let b = 0.90;
    let scrollFormula = (1/(h*(a-b)) * y - (H-a*h)/(h*(a-b)));
    animation.seek(scrollFormula*400);
}

function easeIn(id, animation){
    window.addEventListener('scroll', () => handleScroll(id, animation));
}

// const mediaQuery = window.matchMedia('(min-width: 1400px)')
// var toonImg = document.getElementById('proj7');
// function img(mediaQuery){
//     if(mediaQuery.matches){
//         toonImg.classList.remove("proj");
//         toonImg.classList.add("proj7");
//         console.log('triggered!');;
//     }
// }


// mediaQuery.addListener(img);
// img(mediaQuery);
function navBarActive(elem) {
    let navbarLinks = ['home', 'review', 'approach'];

    let currentElment = document.getElementById(elem);
    let currentElmentLink = document.getElementById(elem + "link");

    if(currentElment.style.opacity == 1){
        currentElment.style.opacity = 0;
        currentElmentLink.style.color =  "#707070";
    } else{
        navbarLinks.forEach(element => {
            let line = document.getElementById(element);
            let link = document.getElementById(element + "link");
    
            if (elem == element) {
                line.style.opacity = 1;
                link.style.color = "black";
            }
            else {
                line.style.opacity = 0;
                link.style.color = "#707070";
            }
        });
    }
    
}

let progressValue = 0;
let progressbar = document.getElementById('progressbar');

function prev(){
    if(progressValue <= 0){
        progressValue =0;
    }else{
        progressValue -= 30;

    }
    progressbar.value = progressValue;
}

function next(){
    let next = document.getElementById('nextCircle');
    if(progressValue >= 90){
        progressValue =0;
    }else{
        progressValue += 30;
    }
    progressbar.value = progressValue;
}

let logoImg = document.getElementById('logoImg');

function hover(element) {
    logoImg.setAttribute('src', './images/flippedLogo.png');
  }
  
  function unhover(element) {
    logoImg.setAttribute('src', './images/logo.png');
  }
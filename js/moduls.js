
// nav bar 
export function navbar(){ 
let mobileView = document.querySelector('.mobile_view')
let barBTn = document.querySelector('#bar_btn')
let menuBAr = document.querySelector('.menu_bar')
menuBAr.addEventListener('click', () => {
    mobileView.classList.toggle('active');
    if( mobileView.classList.contains('active')){
        barBTn.classList.replace('fa-bars','fa-x')
    }
    else{
        barBTn.classList.replace('fa-x' , 'fa-bars')  
    }
})
}
// nav bar 




// dark mode switcher 
export function darkmode() {
    let sunBox = document.querySelector('.dark_mod_switcher');
    let sunBtn = document.querySelector('#sun_btn');
    let body = document.querySelector('body');
    let atags = document.querySelectorAll('a');
    let spantags = document.querySelectorAll('span'); 

    sunBox.addEventListener('click', function () {
        sunBtn.classList.toggle('fa-moon');

        if (sunBtn.classList.toggle('fa-sun')) {
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            atags.forEach(a => a.style.color = 'black');
            spantags.forEach(span => span.style.color = 'black'); 
        } else {
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
            atags.forEach(a => a.style.color = 'white');
            spantags.forEach(span => span.style.color = 'white');
        }
    });
}
// dark mode switcher 






// text Animation
export function textanimation(){
    var typed = new Typed("#text_animation", {
        strings: ["Developer.", "Marketer.", "Designer.", "Freelancer."],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
      });
};
// text Animation






// loading effect 
export function loadingEffect(){
    let loaders = document.querySelector('.loader')
    window.addEventListener('load', () => {
        loaders.style.display = 'none';
    })
}
// loading effect 




// scroll nav bar 
export function navBar(){
    window.addEventListener('scroll', () => {
        let navbar = document.querySelector('.heading')
        navbar.classList.toggle('sticky', window.scrollY > 0)
    })
}
// scroll nav bar 




// notifaction title 
export function notifactiontitle(){
    function notifaction(){
        let istitle = document.title;
        let isflash = false;
        function isnotifaction(){
            document.title = isflash ?   istitle : "(99) New Notifaction"
            isflash = !isflash;
        }
        setInterval(isnotifaction, 1000)
    }
    window.onload =  notifaction ;
}
// notifaction title 
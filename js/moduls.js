
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
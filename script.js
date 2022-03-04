let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let abdulrazaq = document.querySelector('.abdulrazaq')

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px'
    moon.style.top = value * 4 + 'px'
    mountains3.style.top = value * 2 + 'px'
    mountains4.style.top = value * 1.5 + 'px'
    river.style.top = value + 'px'
    boat.style.top = value + 'px'
    boat.style.left = value * 3 + 'px'
    abdulrazaq.style.fontSize = value + 'px'
    if (scrollY >= 67 ) {
        abdulrazaq.style.fontSize = 67 + 'px'
        abdulrazaq.style.position = 'fixed'
        if(scrollY >= 478){
            abdulrazaq.style.display = 'none'
        }else{
            abdulrazaq.style.display = 'block'

        }
        if(scrollY >= 127)
        {
            document.querySelector('.main').style.background = 'linear-gradient(#182064, rgba(74, 5, 95, 0.568))'
        }else
        {
            document.querySelector('.main').style.    background =  'linear-gradient(#2e012e, rgba(74, 5, 95, 0.568))';

        }
    }

}
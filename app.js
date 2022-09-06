// $(document).ready(function(){
//     $('.burger').click(function(){
//         $('.burger').toggle()
//         $('.close').toggle()
//         $('.ul').show()
//     })
// })

let burger = document.querySelector('.burger')
let close = document.querySelector('.close')
let ul = document.querySelector('.ul')

function open(){
    ul.style.display = 'flex'
    burger.style.display = 'none'
    close.style.display = 'block'
}



burger.addEventListener('click',open)
close.addEventListener('click',()=>{
    close.style.display = 'none'
    burger.style.display = 'block'
    ul.style.display = 'none'
})
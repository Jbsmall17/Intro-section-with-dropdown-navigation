const buttons= document.querySelectorAll('.button')
const header = document.getElementById('header')
const list1 = document.querySelector('.list1')
const list2 = document.querySelector('.list2')
buttons.forEach(button =>{
  button.addEventListener('click',()=>{
    header.classList.toggle('active')
  })
})
list1.addEventListener('click',()=>{
  list1.classList.toggle('active')
})
list2.addEventListener('click',()=>{
  list2.classList.toggle('active')
})

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('#header .toggle')

for (const menu of toggle){
  menu.addEventListener('click', function openMenu(){
    nav.classList.toggle('show')
  })
}
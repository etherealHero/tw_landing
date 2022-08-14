function toggleMenu() {
   const menu = document.querySelector('#menu')
   const burger = document.querySelector('.btn-burger')

   burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('hidden')
   })
}

toggleMenu()

// dark mode
const html = document.documentElement

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   html.classList.add('dark')
 } else {
   html.classList.remove('dark')
 }

 const modeBtn = document.querySelector('#mode')

 modeBtn.addEventListener('click', () => {
   html.classList.toggle('dark')

   if (html.classList.contains('dark')) {
      localStorage.theme = 'dark'
   } else {
      localStorage.theme = ''
   }
 })
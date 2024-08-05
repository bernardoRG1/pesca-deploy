document.addEventListener('DOMContentLoaded', () => {
   AOS.init({
 duration: 500, 
 once: false,   
 offset: 120,   
});
 const elements = document.querySelectorAll('[data-aos]');
 
 function handleScroll() {
   elements.forEach(el => {
     const rect = el.getBoundingClientRect();
     const isVisible = (rect.top < window.innerHeight) && (rect.bottom >= 0);
     
     if (isVisible) {
       el.classList.add('aos-animate');
       el.classList.remove('aos-out');
     } else {
       el.classList.remove('aos-animate');
       el.classList.add('aos-out');
     }
   });
 }
 
 window.addEventListener('scroll', handleScroll);
 handleScroll(); 
});
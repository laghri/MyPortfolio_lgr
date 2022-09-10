const hanbrgermenu=document.querySelector('#navigation .nav-icon');
const navcontent=document.querySelector('#navigation #nav-content ');
const close =document.querySelector('.close-btn');
hanbrgermenu.addEventListener('click',()=>{
      navcontent.classList.add('show');
  
});
close.addEventListener('click',()=>{
    navcontent.classList.remove ('show');
})










const scrollb=document.querySelector('.scroll-top');
if(scrollb){
 
    window.addEventListener('scroll',()=>{
        console.log("jchhj")
        if(scrollY> (window.innerHeight *1.2)){
            console.log("sds");
            scrollb.style.display= 'flex';
        }
        else{
            scrollb.style.display= 'none';
        }
    });
    scrollb.addEventListener('click',()=>{
        scrollTo(0,0)
    })
}
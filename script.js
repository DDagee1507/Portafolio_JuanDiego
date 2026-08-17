const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=>navMenu.classList.toggle("active"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("active")));

const modal=document.getElementById("infoModal"), modalText=document.getElementById("modalText");
document.querySelectorAll(".stat-card").forEach(card=>card.addEventListener("click",()=>{modalText.textContent=card.dataset.info;modal.classList.add("show")}));
function closeModal(){modal.classList.remove("show")}
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

document.querySelectorAll(".education-item").forEach(item=>item.addEventListener("click",()=>{
    document.querySelectorAll(".education-item").forEach(other=>{if(other!==item)other.classList.remove("active")});
    item.classList.toggle("active");
}));

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>topBtn.classList.toggle("show",window.scrollY>500));
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const style=document.createElement("style");
style.textContent=".visible{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".blog-card,.education-item,.education-intro,.about-content,.about-image,.stat-card,.skill").forEach(el=>{
    el.style.opacity="0";el.style.transform="translateY(25px)";el.style.transition="opacity .7s ease,transform .7s ease";observer.observe(el);
});
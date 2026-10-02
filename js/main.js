
document.addEventListener("DOMContentLoaded",()=>{
  const nav=document.querySelector(".nav");
  const menu=document.querySelector(".menu");
  const links=document.querySelector(".nav-links");
  window.addEventListener("scroll",()=>nav?.classList.toggle("scrolled",scrollY>40));
  menu?.addEventListener("click",()=>links?.classList.toggle("open"));
  links?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  document.querySelectorAll(".day").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll(".day").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const target=document.querySelector(`[data-day="${btn.dataset.day}"]`);
    document.querySelectorAll(".day-content").forEach(x=>x.hidden=true);
    if(target) target.hidden=false;
  }));

  document.querySelectorAll("[data-gallery]").forEach(img=>img.addEventListener("click",()=>{
    const box=document.querySelector(".lightbox"); const target=box?.querySelector("img");
    if(box&&target){target.src=img.src;box.classList.add("open");}
  }));
  document.querySelector(".lightbox .close")?.addEventListener("click",()=>document.querySelector(".lightbox").classList.remove("open"));

  document.querySelectorAll("form[data-demo]").forEach(form=>form.addEventListener("submit",e=>{
    e.preventDefault();
    const name=form.querySelector("[name=name]")?.value||"there";
    alert(`Thanks, ${name}. This demo form is ready to connect to the Harbour Fitness enquiry system.`);
  }));
});

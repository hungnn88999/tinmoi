
document.addEventListener("DOMContentLoaded", () => {
  // Slider
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prev = document.querySelector(".slider-btn.prev");
  const next = document.querySelector(".slider-btn.next");
  let current = 0;
  let timer;

  function showSlide(index){
    if(!slides.length) return;
    current = (index + slides.length) % slides.length;
    slides.forEach((s,i)=>s.classList.toggle("active",i===current));
    dots.forEach((d,i)=>d.classList.toggle("active",i===current));
  }

  function auto(){
    clearInterval(timer);
    if(slides.length) timer = setInterval(()=>showSlide(current+1),5000);
  }

  prev?.addEventListener("click",()=>{showSlide(current-1);auto();});
  next?.addEventListener("click",()=>{showSlide(current+1);auto();});
  dots.forEach((d,i)=>d.addEventListener("click",()=>{showSlide(i);auto();}));
  showSlide(0);
  auto();

  // Mobile menu
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  menuBtn?.addEventListener("click",()=>navLinks?.classList.toggle("open"));

  // Fake search
  const searchForm = document.querySelector(".search");
  searchForm?.addEventListener("submit",(e)=>{
    e.preventDefault();
    const input = searchForm.querySelector("input");
    if(input && input.value.trim()){
      alert(`Đang tìm kiếm: "${input.value.trim()}"`);
    }
  });

  // Newsletter
  document.querySelectorAll(".newsletter button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const input = btn.parentElement.querySelector("input");
      if(input?.value.trim()) alert("Đăng ký nhận tin thành công!");
      else alert("Vui lòng nhập email.");
    });
  });
});

// Hero Animations
anime.timeline({ loop: false })
  .add({
    targets: "#hero-title",
    translateY: [-50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200
  })
  .add({
    targets: "#hero-sub",
    translateY: [30, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 800
  }, "-=600")
  .add({
    targets: "#hero-btn",
    scale: [0.8, 1],
    opacity: [0, 1],
    easing: "easeOutElastic(1, .8)",
    duration: 1200
  }, "-=500");

// Scroll reveal for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      anime({
        targets: entry.target,
        translateY: [30, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section h2, section p, .project-card, form").forEach(el => {
  el.style.opacity = 0;
  observer.observe(el);
});

// Contact form bounce on submit
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  anime({
    targets: "#contact-form button",
    scale: [1, 1.2, 1],
    easing: "easeOutElastic(1, .6)",
    duration: 800
  });
  alert("Message sent! I’ll get back to you soon.");
});

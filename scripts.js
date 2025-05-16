const fadeInElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach(el => observer.observe(el));

const card = document.getElementById('copyEmailsCard');

card.addEventListener('click', () => {
  const emails = "eh8434573@gmail.com";
  
  navigator.clipboard.writeText(emails).then(() => {
    const originalHTML = card.innerHTML;

    card.style.transition = "opacity 0.3s";
    card.style.opacity = 0;
    
    setTimeout(() => {
      card.innerHTML = '<h3>¡Copiado!</h3>';
      card.style.opacity = 1;
    }, 300);

    setTimeout(() => {
      card.style.opacity = 0;
      setTimeout(() => {
        card.innerHTML = originalHTML;
        card.style.opacity = 1;
      }, 300);
    }, 2300);
    
  }).catch(err => {
  });
});

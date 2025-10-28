// Main JS for interactions: nav toggle, filters, modal, contact form (EmailJS)
document.addEventListener('DOMContentLoaded', function(){
  // Year in footer
  const yearEls = [document.getElementById('year'), document.getElementById('year2'), document.getElementById('year3'), document.getElementById('year4')];
  yearEls.forEach(el => { if(el) el.textContent = new Date().getFullYear(); });

  // Mobile nav toggle
  const toggles = document.querySelectorAll('.nav-toggle');
  const navLists = document.querySelectorAll('.nav-list');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      navLists.forEach(nav => nav.classList.toggle('open'));
      const expanded = toggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
      toggle.setAttribute('aria-expanded', expanded);
    });
  });

  // Portfolio filters
  const filters = document.querySelectorAll('.filter');
  const projectsGrid = document.getElementById('projectsGrid');
  if(filters && projectsGrid){
    filters.forEach(button => {
      button.addEventListener('click', () => {
        filters.forEach(b=>b.classList.remove('active'));
        button.classList.add('active');
        const filter = button.dataset.filter;
        const cards = projectsGrid.querySelectorAll('.project-card');
        cards.forEach(card => {
          if(filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Project modal
  const modal = document.getElementById('projectModal');
  const modalClose = modal ? modal.querySelector('.modal-close') : null;
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  document.querySelectorAll('.view-project').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const title = btn.dataset.title || '';
      const img = btn.dataset.image || '';
      const desc = btn.dataset.desc || '';
      if(modal && modalImage && modalTitle && modalDesc){
        modalImage.src = img;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modal.setAttribute('aria-hidden', 'false');
      }
    });
  });
  if(modalClose) modalClose.addEventListener('click', () => modal.setAttribute('aria-hidden','true'));
  if(modal) modal.addEventListener('click', (e) => { if(e.target === modal) modal.setAttribute('aria-hidden','true'); });

  // Contact form via EmailJS
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      formStatus.textContent = 'Sending...';

      // Using EmailJS client-side
      // Replace these IDs with your EmailJS service/template/user IDs
      const SERVICE_ID = 'EMAILJS_SERVICE_ID';
      const TEMPLATE_ID = 'EMAILJS_TEMPLATE_ID';

      // Basic validation
      const data = {
        from_name: this.from_name.value,
        reply_to: this.reply_to.value,
        message: this.message.value,
        booking_datetime: this.booking_datetime ? this.booking_datetime.value : ''
      };

      if(typeof emailjs === 'undefined'){
        formStatus.textContent = 'Email service not loaded. Please configure EmailJS.';
        return;
      }

      emailjs.send(SERVICE_ID, TEMPLATE_ID, data)
        .then(function(){
          formStatus.textContent = 'Message sent. Thank you!';
          contactForm.reset();
        }, function(err){
          console.error('EmailJS error:', err);
          formStatus.textContent = 'Failed to send. Try again later.';
        });
    });
  }

  // Small: close mobile nav on link click
  document.querySelectorAll('.nav-list a').forEach(a => {
    a.addEventListener('click', () => {
      document.querySelectorAll('.nav-list').forEach(nav => nav.classList.remove('open'));
      document.querySelectorAll('.nav-toggle').forEach(t => t.setAttribute('aria-expanded','false'));
    });
  });

});
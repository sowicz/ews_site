// functions

function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth', 
      block: 'start'
    });
  } else {
    console.error(`Section with id "${sectionId}" not found.`);
  }
}


// Get elements
// hero button
const howItWorksBtn = document.getElementById('how-it-works');


// Event listeners
howItWorksBtn?.addEventListener("click", () => scrollToSection('grafana'));





function observeSections(): void {
  // Intersection Observer for tracking sections
  const sections = document.querySelectorAll('section'); // Select all sections

  // Callback for Intersection Observer
  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in'); // Add animation class when section is visible
        entry.target.classList.remove('fade-out');
      } else {
        entry.target.classList.add('fade-out'); // Add animation class when section is hidden
        entry.target.classList.remove('fade-in');
      }
    });
  };


  const options: IntersectionObserverInit = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.15, // Trigger when 20% of the section is visible
  };

  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section) => observer.observe(section));
}


function observeCards(): void {
  const cards = document.querySelectorAll('.benefit-card'); // Select all cards

  // IntersectionObserver callback
  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add slide-in class when the card is visible
        entry.target.classList.add('slide-in');
      } else {
        // Optionally remove slide-in class when the card is not visible
        entry.target.classList.remove('slide-in');
      }
    });
  };

  const options: IntersectionObserverInit = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.25, // Trigger when 25% of the card is visible
  };

  const observer = new IntersectionObserver(callback, options);

  // Observe each card
  cards.forEach((card) => observer.observe(card));
}


// Run the function when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  observeSections();
  observeCards();
});
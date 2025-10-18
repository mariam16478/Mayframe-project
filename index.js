// Get the button element
const scrollToTopButton = document.getElementById('scroll-to-top');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Check if the user has scrolled past a certain point (e.g., 200px)
  if (window.scrollY > 200) {
    scrollToTopButton.style.opacity = '1';
    scrollToTopButton.style.visibility = 'visible';
  } else {
    scrollToTopButton.style.opacity = '0';
    scrollToTopButton.style.visibility = 'hidden';
  }
});

// Add a click event listener to the button
scrollToTopButton.addEventListener('click', (event) => {
  // Prevent the default anchor link behavior
  event.preventDefault();
  
  // Use a smooth scroll behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
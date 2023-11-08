// Add any custom JavaScript you might need for animations or interactive elements

// Example animation: Change navbar color on scroll
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  
  // Add more JavaScript as needed
  function playSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.play();
  } 
  document.addEventListener('DOMContentLoaded', (event) => {
    // Animate contact form
    const formAnimation = document.querySelector('.contact-form').animate([
      { opacity: 0, transform: 'translateY(30px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 1000,
      fill: 'forwards',
      easing: 'ease-out'
    });
  
    // Animate contact information
    const infoAnimation = document.querySelector('.contact-info').animate([
      { opacity: 0, transform: 'translateY(30px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 1000,
      fill: 'forwards',
      easing: 'ease-out',
      delay: 300 // this delays the start of the animation
    });
  });
 
  document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form action

    // Hide the form
    document.getElementById('contactForm').style.display = 'none';

    // Show the thank you message
    document.getElementById('thankYouMessage').style.display = 'block';
  });


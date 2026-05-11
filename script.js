/**
 * MURTAZA ALI PORTFOLIO
 * Logic: Smooth scroll and form feedback
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. SMOOTH SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const header = document.querySelector('header');
                const navHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. GITHUB BIO AUTO-UPDATE (Optional but keep for minimalism)
    const heroTagline = document.querySelector('.hero .tagline');
    const username = 'murtazakhanpro';

    if (username && heroTagline) {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                if (data.bio) {
                    heroTagline.innerText = data.bio;
                }
            })
            .catch(err => console.log('Github fetch skipped or failed'));
    }
});

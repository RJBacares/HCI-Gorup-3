document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {

        hamburger.addEventListener('click', function() {

            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');

        });

        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {

            link.addEventListener('click', function() {

                hamburger.classList.remove('active');
                navMenu.classList.remove('active');

            });

        });

    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {

                target.scrollIntoView({
                    behavior: 'smooth'
                });

            }

        });

    });

});

function openModal(modalId) {

    document.getElementById(modalId).style.display = 'flex';

}

function closeModal(modalId) {

    document.getElementById(modalId).style.display = 'none';

}

window.addEventListener('click', function(e) {

    document.querySelectorAll('.modal').forEach(modal => {

        if (e.target === modal) {

            modal.style.display = 'none';

        }

    });

});
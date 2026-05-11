fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('header').innerHTML = data;
        
        // ============= MOBILE MENU TOGGLE =============
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const navLinkItems = document.querySelectorAll('.nav-link');

        if (mobileMenuToggle) {
            // Toggle mobile menu
            mobileMenuToggle.addEventListener('click', function () {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
                document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';

                // Update ARIA attribute
                const isExpanded = navLinks.classList.contains('active');
                this.setAttribute('aria-expanded', isExpanded);
            });

            // Close mobile menu when a link is clicked
            navLinkItems.forEach(link => {
                link.addEventListener('click', function () {
                    mobileMenuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.style.overflow = '';
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', function (event) {
                const isClickInsideNav = navLinks.contains(event.target);
                const isClickOnToggle = mobileMenuToggle.contains(event.target);

                if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                    mobileMenuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.style.overflow = '';
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });

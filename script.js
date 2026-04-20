        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
            }
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // Form submission - Send to WhatsApp
        document.getElementById('appointmentForm').addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Create WhatsApp message
            const message = `Hello! I would like to book an appointment.%0A%0AName: ${data.name}%0APhone: ${data.phone}%0AService: ${data.service}%0APreferred Date: ${data.date}%0A${data.message ? `Message: ${data.message}%0A` : ''}%0AThank you!`;

            // Redirect to WhatsApp with pre-filled message
            window.open(`https://wa.me/911234567890?text=${message}`, '_blank');

            // Reset form
            this.reset();
        });

        // Set minimum date to today
        document.getElementById('date').min = new Date().toISOString().split('T')[0];

        // Mobile menu toggle (basic)
        document.querySelector('.mobile-menu').addEventListener('click', function () {
            alert('Mobile menu clicked! In a full implementation, this would toggle a mobile navigation menu.');
        });

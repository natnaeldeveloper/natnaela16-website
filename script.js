    // Create universe background with stars and planets
        function createUniverse() {
            const universe = document.getElementById('universe');
            
            // Create stars
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Random position
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                // Random size
                const size = Math.random() * 3;
                
                // Random animation duration
                const duration = 3 + Math.random() * 5;
                
                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.animationDuration = `${duration}s`;
                
                universe.appendChild(star);
            }
            
            // Create planets
            for (let i = 0; i < 4; i++) {
                const planet = document.createElement('div');
                planet.classList.add('planet');
                
                // Random position
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                // Random size
                const size = 50 + Math.random() * 100;
                
                // Random color
                const colors = ['#6e3bff', '#00e5ff', '#ff2b7a', '#ff9900'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                planet.style.left = `${x}%`;
                planet.style.top = `${y}%`;
                planet.style.width = `${size}px`;
                planet.style.height = `${size}px`;
                planet.style.background = `radial-gradient(circle, ${color}, transparent)`;
                
                universe.appendChild(planet);
            }
        }
        
        // Header scroll effect
        function handleHeaderScroll() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        // Mobile menu toggle
        function setupMobileMenu() {
            const menuBtn = document.getElementById('menu-btn');
            const navLinks = document.getElementById('nav-links');
            
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuBtn.innerHTML = navLinks.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
            
            // Close menu when clicking on a link
            const links = document.querySelectorAll('.nav-links a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        }
        
        // Testimonials slider
        function setupTestimonials() {
            const testimonials = document.querySelectorAll('.testimonial');
            const dots = document.querySelectorAll('.testimonial-dot');
            let currentIndex = 0;
            
            function showTestimonial(index) {
                testimonials.forEach(testimonial => testimonial.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                testimonials[index].classList.add('active');
                dots[index].classList.add('active');
                currentIndex = index;
            }
            
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const index = parseInt(dot.getAttribute('data-index'));
                    showTestimonial(index);
                });
            });
            
            // Auto-rotate testimonials
            setInterval(() => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                showTestimonial(currentIndex);
            }, 5000);
        }
        
        // Form submission handling
        function setupContactForm() {
            const form = document.getElementById('contactForm');
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // Here you would normally send the form data to a server
                // For this example, we'll just show an alert
                alert(`Thank you for your message, ${name}! I will get back to you soon.`);
                form.reset();
            });
        }
        
        // Initialize everything when the DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            createUniverse();
            setupMobileMenu();
            setupTestimonials();
            setupContactForm();
            window.addEventListener('scroll', handleHeaderScroll);
        });
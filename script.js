// Mobile Menu Toggle (Simplified placeholder for interactivity)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        alert('Menu functionality: Home, About, Courses, Facilities, Contact');
    });
}

// FAQ Accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        accordionItems.forEach(i => i.classList.remove('active'));

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Enquiry Form Submission via WhatsApp
const enquiryForm = document.getElementById('enquiry-form');

if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values from form
        const name = enquiryForm.querySelector('input[placeholder="Enter Full Name"]').value;
        const phone = enquiryForm.querySelector('input[placeholder="Enter 10 Digit Mobile No."]').value;
        const studentClass = enquiryForm.querySelector('select').value;
        const message = enquiryForm.querySelector('textarea').value;

        // Yashwant Classes Phone Number
        const myNumber = "919637784513";

        // Construct WhatsApp Message
        const text = `Hello Yashwant Classes Jeur,%0A%0AI am interested in admission.%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Class:* ${studentClass}%0A*Message:* ${message}`;

        // Redirect to WhatsApp
        const wpUrl = `https://wa.me/${myNumber}?text=${text}`;
        window.open(wpUrl, '_blank');

        alert(`Thank you, ${name}! Redirecting you to WhatsApp to complete your enquiry...`);
        enquiryForm.reset();
    });
}

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

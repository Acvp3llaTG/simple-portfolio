// Simple interactive contact form feedback
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const response = document.getElementById('formResponse');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Simulate a successful send
        alert('Thank you for reaching out! I will get back to you soon.');
        response.textContent = 'Thank you for reaching out! I will get back to you soon.';
        response.style.color = '#3498db';
        form.reset();
        setTimeout(() => {
            response.textContent = '';
        }, 4000);
    });
});
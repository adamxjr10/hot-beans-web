/* script.js - Updated with Phone & CV Validation */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const container = document.querySelector('.container');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get specific values by ID
            const name = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const dob = document.getElementById('dob').value;
            const cv = document.getElementById('cvUpload').value;

            // 1. Basic empty check
            if (!name || !email || !dob) {
                alert("Please fill in your Name, Email, and Date of Birth.");
                return;
            }

            // 2. Email format check
            if (!email.includes('@')) {
                alert("Please enter a valid email address.");
                return;
            }

            // 3. Phone Number format check (Checks for digits only, 10-13 characters)
            const phoneRegex = /^[0-9]{10,13}$/;
            if (!phoneRegex.test(phone)) {
                alert("Please enter a valid phone number (digits only, no spaces).");
                return;
            }

            // 4. CV Upload check
            if (!cv) {
                alert("Please upload your CV before submitting.");
                return;
            }

            // Success Animation
            container.style.opacity = '0';
            setTimeout(() => {
                container.innerHTML = `
                    <div style="padding: 100px 20px; animation: fadeIn 1s forwards; text-align:center;">
                        <h1 style="font-size: 3rem;">THANK YOU.</h1>
                        <p style="color: #666; margin-bottom: 30px;">Your application and CV have been received. We will contact you at ${phone} soon.</p>
                        <a href="index.html" class="apply-btn">Return Home</a>
                    </div>
                `;
                container.style.opacity = '1';
            }, 500);
        });
    }
});
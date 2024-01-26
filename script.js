document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Toggle the active class on the clicked link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');

            // Smoothly scroll to the targeted section for modern browsers
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId) || document.getElementById(targetId.toLowerCase());

            if (targetElement && 'scrollBehavior' in document.documentElement.style) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // Fallback for browsers that do not support scroll-behavior
                const targetPosition = targetElement.offsetTop;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Toggle the active class on the clicked link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');

            // Smoothly scroll to the targeted section
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.error('Target element not found!');
            }
        });
    });
});

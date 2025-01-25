document.addEventListener("DOMContentLoaded", function () {
    // Automatically switch carousel items every 20 seconds
    const carousel = document.querySelector('#carouselExampleIndicators');
    if (carousel) {
        const bootstrapCarousel = new bootstrap.Carousel(carousel, {
            interval: 40000, // 20 seconds
            ride: 'carousel', // Start carousel automatically
        });
    }

    // Add hover effect for all elements with class "heading"
    const headings = document.querySelectorAll(".heading");

    headings.forEach((heading) => {
        heading.addEventListener("mouseover", function () {
            heading.style.transform = "scale(1.5)";
            heading.style.transition = "transform 0.6s ease";
        });

        heading.addEventListener("mouseout", function () {
            heading.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const requestSection = document.getElementById("request-a-call-back");

    // Adjust observer for "Request a Call Back"
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
                    // Show the section when 10% is visible
                    requestSection.classList.remove("hidden");
                } else {
                    // Hide the section when less than 10% is visible
                    requestSection.classList.add("hidden");
                }
            });
        },
        { threshold: [0.35] } // Trigger when 10% is visible
    );

    // Observe the "Request a Call Back" section
    observer.observe(requestSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const requestSection = document.getElementById("meet-the-team");

    // Adjust observer for "Request a Call Back"
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    // Show the section when 10% is visible
                    requestSection.classList.remove("hidden");
                } else {
                    // Hide the section when less than 10% is visible
                    requestSection.classList.add("hidden");
                }
            });
        },
        { threshold: [0.5] } // Trigger when 10% is visible
    );

    // Observe the "Request a Call Back" section
    observer.observe(requestSection);
});
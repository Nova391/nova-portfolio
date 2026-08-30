// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Mobile Menu Toggle ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            // Toggle hamburger icon between ☰ and ✕
            if (navLinks.classList.contains("active")) {
                hamburger.innerHTML = "✕";
            } else {
                hamburger.innerHTML = "☰";
            }
        });
    }

    // Close mobile menu when a link is clicked
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                hamburger.innerHTML = "☰";
            }
        });
    });

    // --- 2. Navbar Scroll Effect ---
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // --- 3. Scroll Reveal Animation ---
    // This uses IntersectionObserver to add the 'visible' class when elements enter the screen
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px" 
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));
});
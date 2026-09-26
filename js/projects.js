// js/projects.js

const myProjects = [
    {
        id: "project-mm",
        title: "Project MM",
        status: "In Development",

        description:
            "A personal finance management system designed to organize accounts, transactions, financial goals, analytics, budgeting, and financial workflows in one application.",

        imagePlaceholder: "Project MM Dashboard",
        imageSrc: "",

        technologies: [
            "Python",
            "FastAPI",
            "JavaScript",
            "HTML",
            "CSS",
            "SQLite"
        ],

        problem:
            "Managing personal finances can become difficult when accounts, transactions, categories, and financial goals are spread across different tools.",

        solution:
            "I am building a personal finance management system with a FastAPI backend, SQLite database, and custom JavaScript frontend. The system organizes accounts, transactions, categories, and goals while providing a foundation for analytics and future financial management features.",

        github:
            "https://github.com/Nova391/Project-MM.git",

        demo: ""
    },
    {
        id: "ai-email-organizer",
        title: "AI Email Organizer",
        status: "In Development",

        description:
            "An intelligent email management system that connects to Gmail and uses custom machine learning models to automatically classify emails by category and priority.",

        imagePlaceholder: "AI Email Organizer",
        imageSrc: "",

        technologies: [
            "Python",
            "Machine Learning",
            "Naive Bayes",
            "Gmail API",
            "Google OAuth",
            "FastAPI"
        ],

        problem:
            "Large inboxes make it difficult to quickly identify important emails, separate different types of messages, and focus on what requires attention first.",

        solution:
            "I am building an email organization system that integrates with Gmail and automatically analyzes messages using machine learning. I implemented custom Naive Bayes classifiers for email category and priority prediction, including my own training, evaluation, model persistence, and classification pipeline.",

        github:
            "https://github.com/Nova391/ai-email-organizer.git",

        demo: ""
    },
    {
        id: "ml-classification",
        title: "ML Text Classification",
        status: "Completed",

        description:
            "A practical machine learning text classifier that distinguishes customer messages between issues and general inquiries.",

        imagePlaceholder: "ML Classification Pipeline",
        imageSrc: "",

        technologies: [
            "Python",
            "Pandas",
            "scikit-learn",
            "TF-IDF",
            "Logistic Regression"
        ],

        problem:
            "Text-based customer messages need to be automatically categorized so systems can distinguish support problems from general questions.",

        solution:
            "I built a complete text classification pipeline using Pandas, TF-IDF vectorization, and Logistic Regression. The project includes dataset preparation, train/test splitting, model training, predictions, and evaluation using accuracy, precision, recall, and F1-score.",

        github:
            "https://github.com/Nova391/ML-Classification.git",

        demo: ""
    },
    {
        id: "neural-network-from-scratch",
        title: "Neural Network From Scratch",
        status: "Completed",

        description:
            "A neural network implemented manually in pure Python to understand forward propagation, backpropagation, gradients, and training without machine learning frameworks.",

        imagePlaceholder: "Neural Network Architecture",
        imageSrc: "",

        technologies: [
            "Python",
            "Neural Networks",
            "Backpropagation",
            "Gradient Descent",
            "ReLU"
        ],

        problem:
            "High-level machine learning frameworks hide many of the mathematical operations that make neural networks learn.",

        solution:
            "I implemented a small neural network entirely from scratch in Python to solve the XOR problem. The project manually calculates weighted sums, ReLU activations, loss, gradients, backpropagation, parameter updates, and training without using PyTorch, TensorFlow, Keras, or scikit-learn.",

        github:
            "https://github.com/Nova391/Neural-network-from-scratch.git",

        demo: ""
    },
    {
        id: "sentiment-classifier",
        title: "Sentiment Classifier From Scratch",
        status: "Completed",

        description:
            "A binary sentiment classifier implemented from scratch in Python without using machine learning libraries.",

        imagePlaceholder: "Sentiment Classification Pipeline",
        imageSrc: "",

        technologies: [
            "Python",
            "Logistic Regression",
            "Bag of Words",
            "Gradient Descent",
            "NLP"
        ],

        problem:
            "Understanding how text classification models work internally is difficult when libraries handle feature extraction, prediction, loss calculation, and training automatically.",

        solution:
            "I built a sentiment classifier from scratch that converts text into Bag-of-Words vectors and uses manually implemented logistic regression. The project includes vocabulary construction, preprocessing, sigmoid activation, binary cross-entropy loss, gradients, gradient descent, training, testing, and accuracy evaluation.",

        github:
            "https://github.com/Nova391/sentiment-classifier-from-scratch.git",

        demo: ""
    }
];

// Logic to render cards on the homepage (index.html)
function renderProjectsOnHome() {
    const container = document.getElementById("projects-container");
    if (!container) return; // Exit if not on homepage

    container.innerHTML = ""; // Clear existing

    myProjects.forEach(proj => {
        // Create card element
        const card = document.createElement("div");
        card.className = "project-card reveal"; // Added reveal class for scroll animation
        
        // Handle image or placeholder text
        const imageHTML = proj.imageSrc 
            ? `<img src="${proj.imageSrc}" alt="${proj.title}">` 
            : `<span>${proj.imagePlaceholder}</span>`;

        // Handle tags
        const tagsHTML = proj.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join("");

        // Set inner HTML
        card.innerHTML = `
            <div class="project-image">
                ${imageHTML}
            </div>
            <div class="project-content">
                <span class="project-status">${proj.status}</span>
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-description">${proj.description}</p>
                <div class="tech-tags">
                    ${tagsHTML}
                </div>
                <div style="margin-top: auto;">
                    <!-- Passes the ID in the URL to the dedicated project page -->
                    <a href="pages/project.html?id=${proj.id}" class="btn btn-secondary" style="width: 100%;">View Details</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Logic to render a specific project on project.html
function renderProjectDetailsPage() {
    const detailContainer = document.getElementById("project-detail-container");
    if (!detailContainer) return; // Exit if not on project.html

    // Get ID from URL parameter (e.g., project.html?id=project-mm)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Find the project in our data array
    const project = myProjects.find(p => p.id === projectId);

    if (!project) {
        detailContainer.innerHTML = "<h1>Project not found.</h1><a href='../index.html' class='btn btn-secondary'>Go Back</a>";
        return;
    }

    // Populate the HTML
    document.title = `${project.title} - NOVA`;
    
    let html = `
        <a href="../index.html" style="color: var(--accent); display: inline-block; margin-bottom: 2rem;">← Back to Home</a>
        <span class="project-status">${project.status}</span>
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">${project.title}</h1>
        <p class="section-subtitle">${project.description}</p>
        
        <div class="tech-tags" style="margin-bottom: 3rem;">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
        </div>
    `;

    if(project.problem && project.solution) {
        html += `
            <h3 style="margin-bottom: 1rem; color: var(--accent);">The Problem</h3>
            <p style="margin-bottom: 2rem; color: var(--text-secondary);">${project.problem}</p>
            
            <h3 style="margin-bottom: 1rem; color: var(--accent);">The Solution / How It Works</h3>
            <p style="margin-bottom: 3rem; color: var(--text-secondary);">${project.solution}</p>
        `;
    }

    html += `<div style="display: flex; gap: 1rem;">`;
    
    if (project.github) {
        // If it's the config placeholder, just use it, otherwise use actual link provided in data
        const ghLink = project.github === "GITHUB_LINK_HERE" ? SITE_CONFIG.githubLink : project.github;
        html += `<a href="${ghLink}" target="_blank" class="btn btn-secondary">View GitHub</a>`;
    }
    
    if (project.demo) {
        html += `<a href="${project.demo}" target="_blank" class="btn btn-primary">Live Demo</a>`;
    }

    html += `</div>`;
    
    detailContainer.innerHTML = html;
}

// Run functions based on DOM load
document.addEventListener("DOMContentLoaded", () => {
    renderProjectsOnHome();
    renderProjectDetailsPage();
});
document.addEventListener("DOMContentLoaded", function () {
    // === LOGIN PAGE HANDLER ===
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username && password) {
                window.location.href = "explore.html";
            } else {
                alert("Please enter both username and password.");
            }
        });
    }

    // === UNIVERSAL MODAL HANDLER ===
    function setupModal(triggerSelector, modalId) {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.getElementById(modalId);
        
        if (!modal) return;

        const closeBtn = modal.querySelector(".close");

        // Add click event to all triggers
        triggers.forEach(trigger => {
            trigger.addEventListener("click", function() {
                // For cards with data attributes
                if (trigger.dataset.place) {
                    document.getElementById("placeTitle").textContent = trigger.dataset.place;
                    document.getElementById("placeImage").src = trigger.dataset.image;
                    document.getElementById("placeLocation").textContent = trigger.dataset.location;
                    document.getElementById("placeUser").textContent = trigger.dataset.user;
                    document.getElementById("placeReview").textContent = trigger.querySelector("p:last-of-type").textContent;
                    document.getElementById("placeHighlights").textContent = trigger.dataset.highlights;
                    document.getElementById("placeNearby").textContent = trigger.dataset.nearby;
                    document.getElementById("placeDescription").textContent = trigger.dataset.description;
                }
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });

        // Close modal when clicking X button
        if (closeBtn) {
            closeBtn.addEventListener("click", function() {
                modal.style.display = "none";
                document.body.style.overflow = "";
            });
        }

        // Close modal when clicking outside
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    // Initialize all modals
    setupModal(".temple-card", "templeModal");
    setupModal(".card", "museumModal");
    setupModal(".card", "placeModal"); // For explore.html cards

    // === NAVIGATION HANDLERS ===
    // Temple navigation
    const exploreBtn = document.querySelector('.explore-temple-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            window.location.href = 'Temples.html';
        });
    }

    const templeCategoryBtn = document.getElementById('templeCategoryBtn');
    if (templeCategoryBtn) {
        templeCategoryBtn.addEventListener('click', function() {
            window.location.href = 'Temples.html';
        });
    }

    // Museum navigation
    const museumCategoryBtn = document.getElementById('museumCategoryBtn');
    if (museumCategoryBtn) {
        museumCategoryBtn.addEventListener('click', function() {
            window.location.href = 'Museums.html';
        });
    }

    const exploreMuseumBtn = document.querySelector('.explore-museum-btn');
    if (exploreMuseumBtn) {
        exploreMuseumBtn.addEventListener('click', function() {
            window.location.href = 'Museums.html';
        });
    }
    // === NAVIGATION HANDLERS ===
// Historical Sites navigation
const historicalCategoryBtn = document.getElementById('historicalCategoryBtn');
if (historicalCategoryBtn) {
    historicalCategoryBtn.addEventListener('click', function() {
        window.location.href = 'HistoricalSites.html';
    });
}

const exploreHistoricalBtn = document.querySelector('.explore-historical-btn');
if (exploreHistoricalBtn) {
    exploreHistoricalBtn.addEventListener('click', function() {
        window.location.href = 'HistoricalSites.html';
    });
}
// Cultural Centres navigation
const culturalCategoryBtn = document.getElementById('culturalCategoryBtn');
if (culturalCategoryBtn) {
    culturalCategoryBtn.addEventListener('click', function() {
        window.location.href = 'CulturalCentres.html';
    });
}

const exploreCulturalBtn = document.querySelector('.explore-cultural-btn');
if (exploreCulturalBtn) {
    exploreCulturalBtn.addEventListener('click', function() {
        window.location.href = 'CulturalCentres.html';
    });
}

});
document.addEventListener("DOMContentLoaded", function () {
    const museumData = [
        {
            name: "Government Museum, Chennai",
            image: "chennai_museum.jpg",
            location: "Chennai, Tamil Nadu",
            besttime: "November to February",
            highlights: "Bronze Gallery, Amaravathi Sculptures, Natural History",
            nearby: "Egmore Station, Spencer Plaza",
            description: "Established in 1851, this is the second oldest museum in India with an extensive collection of archaeological and numismatic artifacts."
        },
        {
            name: "Napier Museum",
            image: "napier_museum.jpg",
            location: "Thiruvananthapuram, Kerala",
            besttime: "October to March",
            highlights: "Kerala chariots, ivory carvings, bronze idols",
            nearby: "Zoo, Kanakakunnu Palace",
            description: "A 19th-century Indo-Saracenic building with rare historical artifacts and traditional Kerala architecture."
        },
        {
            name: "DakshinaChitra",
            image: "dakshinachitra.jpg",
            location: "Chennai (ECR Road), Tamil Nadu",
            besttime: "November to March",
            highlights: "Living museum, heritage homes, crafts demo",
            nearby: "VGP Golden Beach, Muttukadu Boat House",
            description: "A unique cultural center presenting South Indian heritage through traditional homes and artisan demonstrations."
        },
        {
            name: "Dravidian Art Gallery",
            image: "dravidian_gallery.jpg",
            location: "Madurai, Tamil Nadu",
            besttime: "October to February",
            highlights: "Ancient temple models, Dravidian scripts",
            nearby: "Meenakshi Temple, Gandhi Museum",
            description: "A dedicated gallery showcasing Dravidian architecture and script heritage inside the Madurai museum complex."
        },
        {
            name: "Regional Science Centre and Planetarium",
            image: "planetarium_calicut.jpg",
            location: "Calicut, Kerala",
            besttime: "November to February",
            highlights: "3D science shows, space dome, interactive exhibits",
            nearby: "Mananchira Square, Kozhikode Beach",
            description: "A fun and educational experience for all ages with interactive science displays and a planetarium."
        },
        {
            name: "Salar Jung Museum",
            image: "salarjung.jpg",
            location: "Hyderabad, Telangana",
            besttime: "October to March",
            highlights: "Veiled Rebecca statue, global art collection",
            nearby: "Charminar, Mecca Masjid",
            description: "One of India’s largest museums, known for its diverse collection including rare European, Middle Eastern, and Asian artifacts."
        },
        {
            name: "Government Museum, Pudukkottai",
            image: "pudukkottai_museum.jpg",
            location: "Pudukkottai, Tamil Nadu",
            besttime: "November to February",
            highlights: "Geological items, ancient inscriptions, tribal culture",
            nearby: "Thirumayam Fort, Sittanavasal",
            description: "A regional museum with rich local history, covering archaeology, anthropology, and geology."
        },
        {
            name: "Mysuru Palace Museum",
            image: "mysuru_palace.jpg",
            location: "Mysuru, Karnataka",
            besttime: "October to February",
            highlights: "Royal attire, weapons, paintings, artifacts",
            nearby: "Chamundi Hill, St. Philomena’s Church",
            description: "Located inside the majestic Mysuru Palace, this museum showcases the grandeur of the Wadiyar dynasty."
        }
    ];

    const museumGrid = document.getElementById("museumGrid");
    const museumModal = document.getElementById("museumModal");

    function loadMuseums(filteredMuseums = museumData) {
        museumGrid.innerHTML = "";
        filteredMuseums.forEach(museum => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.setAttribute("data-name", museum.name);
            card.setAttribute("data-image", museum.image);
            card.setAttribute("data-location", museum.location);
            card.setAttribute("data-besttime", museum.besttime);
            card.setAttribute("data-highlights", museum.highlights);
            card.setAttribute("data-nearby", museum.nearby);
            card.setAttribute("data-description", museum.description);

            card.innerHTML = `
                <img src="${museum.image}" alt="${museum.name}">
                <h4>${museum.name}</h4>
                <p><i class="fas fa-map-marker-alt"></i> ${museum.location}</p>
                <p><i class="fas fa-calendar-alt"></i> Best time: ${museum.besttime}</p>
            `;

            card.addEventListener("click", () => {
                document.getElementById("museumTitle").textContent = museum.name;
                document.getElementById("museumImage").src = museum.image;
                document.getElementById("museumLocation").textContent = museum.location;
                document.getElementById("museumBestTime").textContent = museum.besttime;
                document.getElementById("museumHighlights").textContent = museum.highlights;
                document.getElementById("museumNearby").textContent = museum.nearby;
                document.getElementById("museumDescription").textContent = museum.description;
                museumModal.style.display = "block";
                document.body.style.overflow = "hidden";
            });

            museumGrid.appendChild(card);
        });
    }

    loadMuseums();

    const searchInput = document.getElementById("museumSearch");
    const searchBtn = document.getElementById("searchBtn");

    function searchMuseums() {
        const query = searchInput.value.toLowerCase().trim();
        const filtered = museumData.filter(museum =>
            museum.name.toLowerCase().includes(query) ||
            museum.location.toLowerCase().includes(query) ||
            museum.highlights.toLowerCase().includes(query)
        );
        loadMuseums(filtered);
    }

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", searchMuseums);
        searchInput.addEventListener("keyup", function (e) {
            if (e.key === "Enter") searchMuseums();
        });
    }

    const museumCloseBtn = museumModal?.querySelector(".close");
    museumCloseBtn?.addEventListener("click", () => {
        museumModal.style.display = "none";
        document.body.style.overflow = "";
    });

    window.addEventListener("click", (e) => {
        if (e.target === museumModal) {
            museumModal.style.display = "none";
            document.body.style.overflow = "";
        }
    });


    // Museum category button redirect
    const museumCategoryBtn = document.getElementById('museumCategoryBtn');
    if (museumCategoryBtn) {
        museumCategoryBtn.addEventListener('click', function () {
            window.location.href = 'Museums.html'; // Make sure your file name matches!
        });
    }

    // Optional: Navbar explore museum button
    const exploreMuseumBtn = document.querySelector('explore-btn');
    if (exploreMuseumBtn) {
        exploreMuseumBtn.addEventListener('click', function () {
            window.location.href = 'Museums.html';
        });
    }
});

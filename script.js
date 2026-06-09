document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-item");
    const searchInput = document.querySelector(".search-bar");
    const ctaButton = document.querySelector(".cta-button");

    // Interactive Tab Controller Switch engine 
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active status configuration blocks from all other items
            tabs.forEach(item => item.classList.remove("active"));
            
            // Assign active status configurations mapping properties directly 
            tab.classList.add("active");
            
            console.log(`Switched view viewport target context to: ${tab.dataset.tab}`);
        });
    });

    // Capture Interactive CTA Events
    ctaButton.addEventListener("click", () => {
        alert("Redirecting you to our package configuration pipeline engine...");
    });

    // Capture Simple Dynamic Event Handling on Search Inputs
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && searchInput.value.trim() !== "") {
            alert(`Searching catalog logs for query data values matching: "${searchInput.value}"`);
        }
    });
});

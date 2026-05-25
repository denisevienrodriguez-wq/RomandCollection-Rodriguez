document.addEventListener("DOMContentLoaded", () => {
    console.log("rom&nd external minimalist interactive hub loaded successfully.");

    // Target both the headline AND the description paragraph in the homepage area
    const dynamicHeadline = document.getElementById("dynamic-headline");
    const dynamicDescription = document.getElementById("dynamic-description");
    const shadeCards = document.querySelectorAll(".shade-card");

    shadeCards.forEach(card => {
        card.addEventListener("click", () => {
            // Extract the descriptive metadata from within the clicked card structure
            const selectedColorIdentity = card.getAttribute("data-shade");
            const selectedDescText = card.querySelector(".shade-desc").textContent;
            const selectedFormula = card.querySelector(".shade-num").textContent;

            // 1. Elegantly fade out the entire homepage block layout together
            dynamicHeadline.style.opacity = "0.3";
            dynamicHeadline.style.transform = "translateY(-2px)";
            dynamicDescription.style.opacity = "0.3";
            dynamicHeadline.style.transition = "all 0.2s ease";
            dynamicDescription.style.transition = "all 0.2s ease";

            // 2. Overwrite the contents cleanly while hidden from view
            setTimeout(() => {
                // Update Homepage Heading
                dynamicHeadline.textContent = selectedColorIdentity;
                dynamicHeadline.style.color = "var(--romand-pink)";
                
                // Update Homepage Description text dynamically
                dynamicDescription.textContent = `${selectedFormula} features a ${selectedDescText.toLowerCase()} formulation designed for seamless premium wear.`;

                // Fade them both cleanly back into user vision
                dynamicHeadline.style.opacity = "1";
                dynamicHeadline.style.transform = "translateY(0)";
                dynamicDescription.style.opacity = "1";
            }, 200);

            // 3. Smoothly change the title color back to the standard dark layout color
            setTimeout(() => {
                dynamicHeadline.style.transition = "color 0.4s ease";
                dynamicHeadline.style.color = "var(--text-dark)";
            }, 1000);
        });
    });
});
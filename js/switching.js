document.addEventListener("DOMContentLoaded", () => {
    let image = document.getElementById("background");
    let imageContainer = document.querySelector(".image-container");
    let paragraphText = document.querySelector(".text")
    let imageSources = [
        "../images/background.jpg", 
        "../images/background2.jpg"
    ];
    let textImages = [
        "Купи - продай ценни монети",
        "Купи - продай ценни банкноти"
    ]
    let currentIndex = 0;

    setInterval(() => {
        imageContainer.classList.add("fade-out");
        
        setTimeout(() => {
            
            currentIndex = (currentIndex + 1) % imageSources.length;
            image.src = imageSources[currentIndex];
            paragraphText.innerText = textImages[currentIndex];

            imageContainer.classList.remove("fade-out");
        }, 1000);
    }, 4000);
});


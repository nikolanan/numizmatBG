document.addEventListener("DOMContentLoaded", () => {
    let toggleButton = document.querySelector(".toggleButton");
    let tableContainer = document.querySelector(".tableContainer");
    let infoParagraph = document.querySelector(".info p")

    toggleButton.addEventListener("click", () => {

        if (tableContainer.style.display === "none") {
            tableContainer.style.display = "block";

            toggleButton.innerText = "Скрий таблицата"; 
        } else {
            tableContainer.style.display = "none";
            toggleButton.innerText = "Покажи таблицата"; 
        }
    });


    infoParagraph.addEventListener("click",()=>{
        tableContainer.style.display = "block";
        toggleButton.innerText = "Скрий таблицата";
    })
});
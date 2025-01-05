document.addEventListener("DOMContentLoaded", () => {
    let params = new URLSearchParams(window.location.search);

    let tiraj = params.get("count") || "";
    let metal = params.get("metal") || "";
    let certifikat = params.get("certificate") || "";
    let year = params.get("year") || "";
    let description = params.get("description") || "";

    let fullText = 
    `   ${tiraj}
        ${metal}
        ${certifikat}
        ${year}
        ${description}
    `;

    let textarea = document.querySelector(".requirements");
    if (textarea) {
        textarea.value = "\t" + fullText.trim();
    }

    let select = document.querySelector("#rarity");
    if (select) {
        if (description.includes("в обращение")) {
            select.value = "one";
        } 
        else if (description.includes("изключително рядка")) {
            select.value = "six";
        }
        else if (description.includes("не се среща често")) {
        select.value = "three";
        } 
        else if (description.includes("често срещана")) {
            select.value = "two";
        
        } 
        else if (description.includes("рядка")) {
            select.value = "four";
        } 
        else if (description.includes("трудна за намиране")) {
            select.value = "five"
        }
    }
});

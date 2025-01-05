document.addEventListener("DOMContentLoaded", () => {
    function navigateToNextPage(button) {
        let cards = button.parentElement.querySelectorAll("p");

        
        let params = new URLSearchParams({
            count: cards[0].textContent , 
            metal: cards[1].textContent,
            certificate: cards[2].textContent,
            year: cards[3].textContent,
            description: cards[4].textContent
        });


        window.location.href = `requests.html?${params.toString()}`;
    }
    let buttons = document.querySelectorAll(".coinBanknoteElement button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => navigateToNextPage(button));
    });
});




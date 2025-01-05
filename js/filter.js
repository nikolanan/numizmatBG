document.addEventListener("DOMContentLoaded",()=>{
    let values = document.querySelectorAll(".coinBanknoteElement")

    let button = document.querySelector(".filters button")
    button.addEventListener("click",() => {
        let year = document.querySelector(".filters input").value.trim()
        let material = document.querySelector(".filters select").value.toLowerCase()
        // console.log(year)
        // console.log(material)
        
        values.forEach((item) =>{
            let itemMaterial = item.querySelector("p:nth-of-type(2)").innerText.split(" ")[1].toLowerCase().trim();
            let itemYear = item.querySelector("p:nth-of-type(4)").innerText.split(" ")[1].trim();
            
            if(year == "" && material == "none"){
                item.style.display = "flex"
            }else if(year == "" && material != "none"){
                if(!itemMaterial.includes(material)){
                    item.style.display = "none"
                }else{
                    item.style.display = "flex"
                }
            }else if (year != "" && material == "none"){
                if(!itemYear.includes(year)){
                    item.style.display = "none"
                }else{
                    item.style.display = "flex"
                }
            }else{
                if(!itemYear.includes(year) || !itemMaterial.includes(material)){
                    item.style.display = "none"
                }else{
                    item.style.display = "flex"
                }
            }
        })

    })
})
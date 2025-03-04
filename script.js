//why use a seperate script? 
//- easier to update without messing with the html structure everytime 
//- better performace
//- more organized code 
//- good idea to put aditional trasitions you want in the websites that aren't necessarily part of the og structure in a seperate script 

//below code allows the selected services top appear with a fade-in effect
function addService(selectId) {
    let select = document.getElementById(selectId);
    let price = parseInt(select.value);
    let text = select.options[select.selectedIndex].text;

    if (price > 0) {
        let listItem = document.createElement("li");
        listItem.textContent = text;
        listItem.style.opacity = "0";
        document.getElementById("service-list").appendChild(listItem);

        setTimeout(() => {
            listItem.style.opacity = "1";
            listItem.style.transition = "opacity 0.5s ease-in-out";
        }, 100);

        subtotal += price;
        document.getElementById("subtotal").textContent = subtotal;
    }
}

function resetSelection() {
    //clear the selected services list
    document.getElementById("service-list").innerHTML = "";

    //reset the subtotal
    subtotal = 0;
    document.getElementById("subtotal").textContent = subtotal;

    //reset all dropdowns to the default option
    document.querySelectorAll("select").forEach(select => {
        select.selectedIndex = 0;
    });
}



function dayPopup( buttonId ) {
    console.log("CLICK " + buttonId);

    let popup = document.getElementById("popup");
    popup.style.display = "block";
}

function hidePopup( ) {

    console.log("CLICK outside of popup");
    console.log(event.target)
    if (event.target.id === "popup") {
        let popup = document.getElementById("popup");
        if (popup.style.display !== "none") {
            popup.style.display = "none";
        }
    }
}

function showPopup( buttonId ) {

    console.log("CLICK " + buttonId);

    // let calendar_day = document.getElementById( buttonId )

    // console.log(calendar_day.style);
    //
    // if ( calendar_day.style.display === "none" ) {
    //     calendar_day.style.display = "block";
    // }

    let popup = document.getElementById("popup");
    popup.style.display = "block";
}



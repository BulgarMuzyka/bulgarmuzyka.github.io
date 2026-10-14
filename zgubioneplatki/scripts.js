const popupTitles = {
    'first-day': 'Dzień pierwszy: Oryginalna wersja',
    'second-day': 'Dzień drugi: Nuty do Zgubionych Płatków',
    'third-day': 'Dzień trzeci: Highlighty z urodzinowego streama',
    'fourth-day': 'Dzień czwarty: Nagranie z koncertu',
    'fifth-day': 'Dzień piąty: Oficjalny Minecraft discpack',

}

function dayPopup( ) {

    console.log(event.target.id)
    if (event.target.className === "padlock-icon") return

    let dayId = event.target.id
    let popup_title = document.getElementById('popup-title')
    popup_title.innerText = popupTitles[dayId] ?? "undefined"

    let popup = document.getElementById("popup-window");
    popup.style.visibility = "visible";
    let popup_tint = document.getElementById("popup-tint");
    popup_tint.style.visibility = "visible";

    if (event.target.id !== "fourth-day") {
        document.getElementById("popup-platki-live-bandcamp").style.visibility = "hidden";
        document.getElementById("popup-platki-concert-yt").style.visibility = "hidden";

    } else {
        document.getElementById("popup-platki-live-bandcamp").style.visibility = "visible";
        document.getElementById("popup-platki-concert-yt").style.visibility = "visible";
    }
}

function hidePopup( ) {

    let popup = document.getElementById("popup-window");
    popup.style.visibility = "hidden";
    let popup_tint = document.getElementById("popup-tint");
    popup_tint.style.visibility = "hidden";

    document.getElementById("popup-platki-live-bandcamp").style.visibility = "hidden";
    document.getElementById("popup-platki-concert-yt").style.visibility = "hidden";
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



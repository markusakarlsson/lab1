const text = document.querySelector('p')
const input = document.querySelector('input')
const button = document.querySelector('button')

function start() {
    const choice = input.value
    input.value = ""

    if (choice === "sovrummet") {
        loadSovrummet() 
    } else if (choice === "vardagsrummet") 
        loadVardagsrummet()
}

/**
 * @param loadSovrummet - Information about the current room and make next choice.
 */
function loadSovrummet() {
    text.innerHTML = "Här fanns flera ställen där den kan ligga... Vill du titta i nattduksbordet eller garderoben?"
    button.onclick = room1
}

function room1() {
    const choice = input.value
    input.value = ""
    
    if (choice === "nattduksbordet") {
        loadNattduksbordet()
    } else if (choice === "garderoben")
        loadGarderoben()
}

/**
 * @param loadNattduksbordet - Information about the current place and make next choice.
 */
function loadNattduksbordet() {
    text.innerHTML = "Oj, här var det tomt.... Vill du titta i garderoben eller gå vidare till köket?"
    button.onclick = room2
}

function room2() {
    const choice = input.value
    input.value = ""
    
    if (choice === "garderoben") {
        loadGarderoben()
    } else if (choice === "köket")
        loadKöket()
}

/**
 * @param loadGarderoben - Information about the current room and make next choice.
 */
function loadGarderoben() {
    text.innerHTML = "Herregud vad kläder det var här, det är nog bäst om du letar vidare... Vill du fortsätta till köket eller vardagsrummet?"
    button.onclick = room3
}


function room3() {
    const choice = input.value
    input.value = ""
    
    if (choice === "köket") {
        loadKöket()
    } else if (choice === "vardagsrummet")
        loadVardagsrummet()
}

/**
 * @param loadVardagsrummet - Information about the current room and make next choice.
 */
function loadVardagsrummet() {
    text.innerHTML = "Vilken jobbig tystnad det var här, spring snabbt vidare!! Köket eller sovrummet up next?"
    button.onclick = room4
}

function room4() {
    const choice = input.value
    input.value = ""
    
    if (choice === "köket") {
        loadKöket()
    } else if (choice === "sovrummet") 
        loadSovrummet()
}

/**
 * @param loadKöket - Information about the current room and make next choice.
 */
function loadKöket() {
    text.innerHTML = "En fjärrkontroll är väl ingen kylvara direkt men med en törstig ägare kan allt hända... Vill du öppna kylen och titta?"
    button.onclick = room5
}

function room5() {
    const choice = input.value
    input.value = ""
    
    if (choice === "ja") {
        loadFjärrkontroll()
    } else if (choice === "nej")
        loadGameOver()
}

/**
 * @param loadFjärrkontroll - Game completed positively.
 */
function loadFjärrkontroll() {
    text.innerHTML = "Gött!! Du hittade den och min kväll är räddad!"
    document.body.style.backgroundImage = "url('./remote.jpg')"
    document.getElementById("input").style.display = "none"
    document.getElementById("button").style.display = "none"
}

/**
 * @param loadGameOver - Game completed negatively.
 */
function loadGameOver() {
    text.innerHTML = "Game Over, jag vill inte ha hjälp av någon som inte letar överallt..... Ut ur min lägenhet!!"
    document.getElementById("input").style.display = "none"
    document.getElementById("button").style.display = "none"
}
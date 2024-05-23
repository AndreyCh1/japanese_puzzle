let gorizontalCell = 30,
    verticalСells = 40,
    table = document.querySelector(".table tbody"),
    trNumber = 0,
    tdNumber = 0,
    tbodyTr = [...table.querySelectorAll("tr")],
    th = [...document.querySelectorAll("th")]

tbodyTr.forEach(function(el) {
    trNumber++

    el.classList.add("tr" + trNumber)
})

th.forEach(function(el) {
    if (el.innerText === "") {
        el.style.border = "none"
        el.style.backgroundColor = "transparent"
    }
})
    
for (let j = 1; j <= verticalСells; j++) {
    for (let k = 1; k <= gorizontalCell; k++) {
        let td = document.createElement("td"),
            div = document.createElement("div")

        td.insertAdjacentElement("afterbegin", div)
        
        document.querySelector(".tr" + j).insertAdjacentElement("beforeend", td)
        td.classList.add("td" + k)
        document.querySelector(".tr" + j + " .td" + k + " div").classList.add("cell")
    }
}

let tdCell = [...document.querySelectorAll("td")],
    tdCount = 0

tdCell.forEach(function(el) {
    tdCount++

    if ((el.getAttribute("class").slice(2) % 5) === 0) {
        el.style.borderRight = "3px solid #000"
    }
})

tbodyTr.forEach(function(el) {
    if ((el.getAttribute("class").slice(2) % 5) === 0) {
        let everyFifthRow = document.querySelector(".tr" + el.getAttribute("class").slice(2)),
            cellEveryFifthRow = [...everyFifthRow.querySelectorAll("td")]

        cellEveryFifthRow.forEach(function(el) {
            el.style.borderBottom = "3px solid #000"
        })

    }
    el.querySelector("td").style.borderLeft = "3px solid #000"
})

let tr1Td = [...document.querySelector(".tr1").querySelectorAll("td")]

tr1Td.forEach(function(el) {
    el.style.borderTop = "3px solid #000"
})

let cell = [...document.querySelectorAll(".cell")]

cell.forEach(function(el) {
    el.addEventListener('click', function(el) {
        el.target.classList.toggle("shaded")
    })

    el.addEventListener('contextmenu', function(el) {
        el.preventDefault()

        el.target.classList.toggle("cross")
    })
})
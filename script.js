const boxOne = document.querySelector(".box-1")
const boxTwo = document.querySelector(".box-2")
const box = document.querySelectorAll(".box")

for( list of box){
    list.addEventListener("dragstart",(e) => {
        let select = e.target
        boxTwo.addEventListener("dragover" , (e) => {
            e.preventDefault()
        })
        boxTwo.addEventListener("drop",(e) => {
            boxTwo.appendChild(select)
            select = null
        })
        boxOne.addEventListener("dragover" , (e) => {
            e.preventDefault()
        })
        boxOne.addEventListener("drop",(e) => {
            boxOne.appendChild(select)
            select = null
        })
    })
}
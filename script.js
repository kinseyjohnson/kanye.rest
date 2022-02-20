//grabbing button by finding the id
window.onload=function(){
let quoteButton = document.getElementById("button")

quoteButton.addEventListener("click", e => {

    let quoteDiv = document.getElementById("quoteHere")

    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(quote => {
        console.log(quote)
        quoteDiv.innerHTML = `<p>"${quote.quote}" -kanye</p>`
        })
        });
}
//dispay quote

window.onload=function(){
let quoteHere = document.getElementById("quoteDisplay")

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    console.log(quote)
    quoteHere.innerHTML = `<p> ${quote.quote} -kanye </p> <a class="twitter-share-button"
    href="https://twitter.com/intent/tweet?text=${quote.quote} -kanye" target="_blank">
    tweet it</a>`
})  

//new quote

let quoteButton = document.getElementById("button")

quoteButton.addEventListener("click", e => {

    // let quoteDiv = document.getElementById("quoteDisplay")

    fetch('https://api.kanye.rest')
    
    .then(res => res.json())
    .then(quote => {
        console.log(quote)
        quoteHere.innerHTML = `<p>"${quote.quote}" -kanye <a class="twitter-share-button"
        href="https://twitter.com/intent/tweet?text=${quote.quote} -kanye" target="_blank">
        tweet it</a></p>`
        })
        });
    }

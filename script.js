//dispay quote

window.onload=function(){
let quoteHere = document.getElementById("quoteDisplay")

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    console.log(quote)
    quoteHere.innerHTML = `<p> ${quote.quote} -kanye </p>`
})  

//new quote

let quoteButton = document.getElementById("button")


quoteButton.addEventListener("click", e => {

    // let quoteDiv = document.getElementById("quoteDisplay")

    fetch('https://api.kanye.rest')
    
    .then(res => res.json())
    .then(quote => {
        console.log(quote)
        quoteHere.innerHTML = `<p>"${quote.quote}" -kanye </p>`
        })
        });
        
    

//this is pulling a random quote, not the quote already shown on the screen

let twitterButton = document.getElementById("tweet")

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    twitterButton.addEventListener("click", e => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.quote} -kanye`)
    })
})


}

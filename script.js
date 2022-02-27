//dispay quote

window.onload=function(){
let quoteHere = document.getElementById("quoteDisplay")

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    console.log(quote)
    quoteHere.innerHTML = `${quote.quote} -kanye`
})  

//new quote

let quoteButton = document.getElementById("button")


quoteButton.addEventListener("click", e => {

    // let quoteDiv = document.getElementById("quoteDisplay")

    fetch('https://api.kanye.rest')
    
    .then(res => res.json())
    .then(quote => {
        console.log(quote)
        quoteHere.innerHTML = `<p>${quote.quote}" -kanye </p>`
        })
        });
        
    

let twitterButton = document.getElementById("tweet")

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    twitterButton.addEventListener("click", e => {
        window.open(`https://twitter.com/intent/tweet?text=${quoteHere.innerHTML}`)
    })
})

}

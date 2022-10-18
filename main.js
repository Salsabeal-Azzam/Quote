var arrayOfQuotes = [
    {auther: '-- Oscar Wilde' , quote:'"Be yourself; everyone else is already taken."' },
    {auther: '-- Frank Zappa' , quote:'"So many books, so little time. "' },
    {auther: '-- Marcus Tullius Cicero' , quote:'"A room without books is like a body without a soul."' },
    {auther: '-- Mae West' , quote:'"You only live once, but if you do it right, once is enough."' },
    {auther: '-- J.K. Rowling' , quote:"{If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.}"},
    {auther: '--  Elbert Hubbard' , quote:'"A friend is someone who knows all about you and still loves you."' },

];


function generateQuote(){
   var randomNumber = Math.floor(Math.random() * (arrayOfQuotes.length));
   console.log(randomNumber);
   document.getElementById('quoteOutput').innerHTML= arrayOfQuotes[randomNumber].quote;
   document.getElementById('authorOutput').innerHTML= arrayOfQuotes[randomNumber].auther ;

}
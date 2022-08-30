/* 
I dag skal vi i fællesskab prøve at lave en side med en oversigt over transaktioner.
kontests.net er et website, som samler alle programmerings konkurrencer der foregår på en række programmerings websites. 
I har nu til opgave at bygge et site, som henter og præsenterer listen over disse websites (Sites endpoint: https://kontests.net/api/v1/sites).

Prøv at læs dokumentationen på kontests.net og gennemskue hvordan data bliver returneret til jer.

Som en ekstra udfordring, kan i gøre det muligt at vælge et site fra listen, ved at klikke på den.
og så henter i alle de konkurrencer der foregår på det site.

Som eksempel så findes "codeforces" på listen returneret fra Site endpointet, 
så hvis en bruger vælger denne, så kan konkurrencerne findes på dette endpoint: https://kontests.net/api/v1/codeforces
*/

//Http kommunikation m. Fetch og Async/Await
//Design Patterns

//Event listeners
window.addEventListener("load", async () => { //Async fordi du kun kan bruge async functioner når du bruger await
    //Await fordi det er nogle data vi venter på,
    //Gemmer det i en const fordi vi skal bruge det vi "fetcher"
    const result = await fetch(
        "https://mul3sem-default-rtdb.europe-west1.firebasedatabase.app/transactions.json"
    ); //Hente noget fra browseren

    //Await fordi det tager tid og hente data
    const data = await result.json();
    console.log(data);

    const items = [];
    for(item in data){
        items.push(data[item]);
    }

    // for (let i = 0; i < items.length; i++); {
    //     console.log(items[i]);
    // };

    //For each - det mere moderne loop 
    items.forEach((item) => {
    
        //Så skal vi indsætte vores objekt som vi har hentet in i vores const element. 
        /*
        category: 'Home', 
        credit_card_company: 'VISA', 
        price: '90', 
        transaction_date: '2018-09-07T14:43:15.792+02:00'
        */
    
    const element = 
    `<div class="container">
          <div class="category">
          <h1>Kategori: ${item.category}</h1>
         </div>
         <div class="creditCard" id="smallBox">
           <h2>Kreditkortudbyder: ${item.credit_card_company}</h2>
         </div>
        <div class="price" id="smallBox">
           <h2>Beløb: ${item.price}</h2>
        </div>
        <div class="dato" id="smallBox">
           <h2>Dato: ${item.transaction_date}</h2>
        </div>
    </div>`


    //Så skal vi tilføje elementet i vores HTML, det gør vi med querySelector.
    //Inde i gåseøjenene skriver vi navnet på den container vi har lavet i vores html 

    const div = document.querySelector(".container");
    div.innerHTML += element;

});
});

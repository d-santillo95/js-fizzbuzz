//Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {               //controllo per vedere se è divisibile per 3
        if (i % 5 == 0) {               //controllo per vedere se è divisibile anche per 5
            console.log('fizzbuzz');    //se lo è stampo 'fizzbuzz'
        }else {                         //se non è divisibile per 5
            console.log('fizz');        //stampo  'fizz'
        }
    }
    else if (i % 5 == 0) {      //controllo per vedere se è divisibile per 5 e non per 3
        console.log('buzz');    //se lo è stampo 'buzz'
    }
    else {                 //non è divisibile nè per 3 nè per 5
        console.log(i);    //stampo il valore di i
    }
}

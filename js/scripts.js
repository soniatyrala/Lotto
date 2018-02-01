 var listInput = document.querySelector("#divInput");
 var input = listInput.querySelectorAll(".input");
 var btn = document.querySelector(".btn");
 var output = document.querySelector(".output");
 var clicked = document.querySelectorAll(".crossed");


 for (var i = 0; i < input.length; i++) { // zaznacza krzyżykiem wybraną liczbę
     input[i].addEventListener("click", function () {
         this.classList.toggle("crossed");
         var clicked = document.querySelectorAll(".crossed");
         console.log(this);
         if (clicked.length == 6) { // zaznacza tylko 6 liczb
             btn.style.display = "block";
             console.log(clicked);
             return clicked;
         } else if (clicked.length > 6) {
             this.classList.remove("crossed");
         }
     });
 }

 function getRandom(min, max) {
     return Math.round(Math.random() * (max - min) + min); // funkcja losująca liczby z podanego zakresu
 }




 btn.onclick = function () {
     var numbers = [],
         random;
     for (var i = 0; i < 6; i++) { // pętla wypisuje 6 liczb z podanego zakresu
         random = getRandom(1, 49);
         while (numbers.indexOf(random) !== -1) {
             random = getRandom(1, 49);
             console.log("Powtórzyła się liczba " + random); // pętla sprawdza, czy liczba sie powtarza
         }
         numbers.push(random);
     }
     output.value = numbers.join(", ");
     if (btn.onclick) { // po kliknięciu przycisku sprawdza wygraną
         btn.setAttribute("disabled", "");
         var chosenByLotto = numbers;
         console.log(chosenByLotto);



         //do poprawy
         // zrobić tablicę z clicked i porównać dwie tablice!
         for (let i = 0; i < clicked.length; i++) {
             var numberWin = [];
             for (let j = 0; j < chosenByLotto.length; j++) {
                 if (clicked[i] == chosenByLotto[j]) {
                     numberWin.push(clicked[i]);
                     console.log(numberWin);
                     if (numberWin.length == 6) {
                         console.log("Wygrałeś 1.000.000 zł!")
                     } else if (numberWin.length == 5) {
                         console.log("Wygrałeś 500.000zł!")
                     } else if (numberWin.length == 4) {
                         console.log("Wygrałeś 250.000zł!")
                     } else if (numberWin.length == 3) {
                         console.log("Wygrałeś 100.000zł!")
                     } else {
                         console.log("Brak wygranej. Spróbuj jeszcze raz!")
                     }
                 }
             }
         }
     }
 }


function myFunction() {
   

let guess = document.getElementById("guess").value;

   
    
    document.getElementById("answer").innerHTML = "You guessed " + guess;

    if (guess < 22) {
   document.getElementById("help").innerHTML = "Try a bigger number";
    }

   else if (guess == 22) {
       document.getElementById("help").innerHTML = "Correct!";
       document.getElementById("countries").innerHTML = "Britain has not invaded Andorra, Belarus, Bolivia, Burundi, Central African Republic, Chad, Congo, Republic of Guatemala, Ivory Coast, Kyrgyzstan, Liechtenstein, Luxembourg, Mali, Marshall Islands, Monaco, Mongolia, Paraguay, Sao Tome and Principe, Sweden, Tajikistan, Uzbekistan, or the Vatican City";
   }

   else if (guess > 22) {
       document.getElementById("help").innerHTML = "Try a lower number"
   }

 }




function generatePassword() {
    
    var characterNumbers = document.getElementById("characters").value;
    var lcCheckbox = document.getElementById("lc").checked;
    var ucCheckbox = document.getElementById("uc").checked;
    var numCheckbox = document.getElementById("num").checked;
    var scCheckbox = document.getElementById("sc").checked;
    var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numericOption = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacterAlphabet = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '?', '.', '=', '+', '-', '_'];  
    let myArray = new Array();
    var newPW = new String();
   
    if (lcCheckbox == true){
        myArray.push(...lowercaseAlphabet);
    } 
    
    if (ucCheckbox == true){
        myArray.push(...uppercaseAlphabet);
    } 
    
    if (numCheckbox == true){
        myArray.push(...numericOption);
    } 
    
    if (scCheckbox == true){
        myArray.push(...specialCharacterAlphabet);
    }

    if (myArray.length === 0){
        window.alert("You must make at lease one checkbox selection");
    } else {
            for (let i = 0; i < characterNumbers; i++){
                newPW += myArray[Math.floor(Math.random()*myArray.length)];
            }
          }
    
    document.getElementById("pwOutput").innerHTML = newPW;
    event.preventDefault();
}






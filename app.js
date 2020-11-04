/**
 * Multi Layer Text Encryption/Decryption Application
 * @author Alqassam Firwana
 */
//testing
console.log("Test strat");
var main = (function() {
  //Storing HTML attributes to JS variables using DOM
    var txt1 = document.getElementById("txt1");
    var btnEncrypt = document.getElementsByClassName("optionBtn")[0];
    var btnDecrypt = document.getElementsByClassName("optionBtn")[1];
    var btnEnter = document.getElementsByClassName("btn")[0];
    var txt2 = document.getElementById("txt2");
    var result = document.getElementById("result");
    var activeBtn = 0;

    btnEncrypt.addEventListener("click", function() {
      if (activeBtn == 1) {
        btnEncrypt.style.backgroundColor = "#b09332";
        btnEncrypt.style.color = "white";
        btnEncrypt.style.cursor = "initial";
        btnDecrypt.style.backgroundColor = "white";
        btnDecrypt.style.color = "#253850";
        btnDecrypt.style.cursor = "pointer";
        activeBtn = 0;
      }
    });
  
    btnDecrypt.addEventListener("click", function() {
      if (activeBtn === 0) {
        btnDecrypt.style.backgroundColor = "#b09332";
        btnDecrypt.style.color = "white";
        btnDecrypt.style.cursor = "initial";
        btnEncrypt.style.backgroundColor = "white";
        btnEncrypt.style.color = "#253850";
        btnEncrypt.style.cursor = "pointer";
        activeBtn = 1;
      }
    });
  
    btnEnter.addEventListener("click", function() {
      EncryptionDecryptionSwitch(txt1.value.split(""), txt2.value.split(""));
    });
 /**
  * Valiation and Perform Encryption/Decryption Operation
  * @param {*} str 
  * @param {*} pStr 
  */
    function EncryptionDecryptionSwitch(str, pStr) {
        var i = 0;
        var err = 0;
        var val = 0;
        var cStr = [];
        var xorStr = [];
        if (str.length !== 0 && pStr.length !== 0) {
          console.log(activeBtn);
          if (str.length > pStr.length || str.length <= 5 || str.length >= 51 )
            err = 1;
          else {
            val = 1;
            while (i < str.length && val) {
              if (str[i] === undefined || pStr[i] === undefined)
                val = 0;
              else {
                if (activeBtn === 0)
                cStr[i]  = EncryptRot13(str[i], pStr[i]),
                xorStr[i] = xorEncryption(cStr[i], pStr[i]);
                else
                
                  cStr[i] = xorEncryption(str[i], pStr[i]),
                  xorStr[i]  = EncryptRot13(cStr[i], pStr[i]);
                  //cStr[i] = decrypt(str[i], pStr[i]);
                i++;
              }
            }
          }
        }
        if (err)
          result.textContent = "Please Follow the Instructions Carefully !";
        else if (!val)
          result.textContent = "Introduce only valid characters";
        else
          result.innerHTML = "Ciphered Message: " + xorStr.join("");
      }
      /**
       * ROT-13 Ecryption
       * @param {*} str text
       */    
      function EncryptRot13(str) { // 
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowerCase = "abcdefghijklmnopqrstuvwxyz";
        return str.split("")
        .map(char => {
          let pos = upperCase.indexOf(char.toUpperCase());
          if (pos >= 0) {
            return (char == char.toUpperCase() ? upperCase[(pos + 13) % 26] : lowerCase[(pos + 13) % 26]);
          } else {
            console.log(char);
            return char;
          }
        })
        .join("");
      }
   
      
 
    /**
     * XOR Encryption
     * @param {*} str text 
     * @param {*} keyStr key
     */
    function xorEncryption(str, keyStr) {
		var output = "";
		for( var i = 0; i < str.length; ) {
			for( var j = 0; ( j < keyStr.length && i < str.length); j++, i++ ) {
        console.log("XOR Str "+str[i].charCodeAt(0));
        console.log("XOR Key "+keyStr[j].charCodeAt(0));
        output += String.fromCharCode(str[i].charCodeAt(0) ^ keyStr[j].charCodeAt(0));
        //testing
        console.log("str[i].charCodeAt(0)"+str[i].charCodeAt());
        console.log("keyStr[j].charCodeAt(0)"+keyStr[j].charCodeAt());
        console.log(str[i].charCodeAt(0) ^ keyStr[j].charCodeAt(0));
        console.log("XOR result "+String.fromCharCode(str[i].charCodeAt(0) ^ keyStr[j].charCodeAt(0)));
			}
    }
		return output;
	}
console.log("end");
  })();
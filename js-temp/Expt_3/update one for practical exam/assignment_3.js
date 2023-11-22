function reverseString() {
    let final = "";
    let str = document.getElementById("reverse").value;
    for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
    }
    document.getElementById("display").innerHTML = final;
    }

   
    function palindromeS() {
    let final = "";
    let check_pal = "";
    let str = document.getElementById("palindrome").value;
    for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
    }
    if (str == final) {
    check_pal = "string is palindrome";
    }
    else {
    check_pal = "string is not palindrome";}
    document.getElementById("display2").innerHTML = check_pal;
    }

    function replaceS() {
        let str = document.getElementById("str").value;
        let char1 = document.getElementById("char1").value;
        let char2 = document.getElementById("char2").value;
        if (str.indexOf(char1)>-1==true){
            let new_final = str.replaceAll(char1, char2);
            document.getElementById("display1").innerHTML = new_final;
        }
        else{
            alert('Invalid String')
        }
        }
        
    function replaceI(){
        let str=document.getElementById("str1").value;
        let ind = document.getElementById("replaceInd").value;
        let char2 = document.getElementById("char3").value;
        if(ind<0 || ind>str.length){
            alert("invalid index")
        }
        else{
            let x=str[ind]
            let new_final = str.replaceAll(x, char2);
            document.getElementById("display3").innerHTML = new_final;
        }


    }
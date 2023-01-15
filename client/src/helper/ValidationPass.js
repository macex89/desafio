
function checkPass(password) {
    const  longPassword = (password) => {
        return password.length >= 8 && password.length <= 18;
    }
    
    const isNum = (l) => {
        return l >= 48 && l <= 57;
    }

    const containsNums = (password) => {
        var num = [];
        for(let i=0;i<password.length; i++){
            if(isNum(password.charCodeAt(i))){
                num.push(password[i]);
            }
        }
        return num.length >= 1;
    }

    const isUpperCase = (l) => {
        return l >= 65 && l <= 90;
    }

    const upperLetters = (password) =>{
        var i = 0;
        var validation = false;
        while(i<password.length && !validation){
            validation = isUpperCase(password.charCodeAt(i));
            i++;
        }
        return validation;
    }

    const isLowerCase = (l) => {
        return l >= 97 && l <= 122;
    }

    const lowerLetters = (password) =>{
        var i = 0;
        var validation = false;
        while(i<password.length && !validation){
            validation = isUpperCase(password.charCodeAt(i));
            i++;
        }
        return validation;
    }

    const isSpecialCharacters = (l) => {
        return (l == 42) || (l == 63) || (l == 33) || (l == 64) || (l == 35) || (l == 36) || (l == 47) || (l == 40) || (l == 41) || (l == 123) || (l == 125) || (l == 46) || (l == 44) || (l == 59) || (l == 58);
    }

    const specialCharacters = (password) => {
        var i = 0;
        var validation = false;
        while(i<password.length && !validation){
            validation = isSpecialCharacters(password.charCodeAt(i));
            i++;
        }
        return validation;
    }

    if (longPassword(password) && containsNums(password) && upperLetters(password) && lowerLetters(password) && specialCharacters(password)){
        var message = "";
        var validation = true; 
    }else {
        var message = "La contraseña no cumple con los requisitos de seguridad";
        var validation = false;
    }
 
    return {validation,message};
}
        


export default checkPass;




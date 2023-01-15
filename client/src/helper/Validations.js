// //COMPROBACION DNI
// const validationDni = (dni) => {
//     var msn = "";
//     var validation = true;
//     if (dni.length != 9 ){
//         msn = "El DNI introducido es incorrecto";
//         validation = false;
//     }else{
//         var letter = dni[dni.length - 1].toUpperCase()
//         var num = getNumber(dni);
//         if (num > "99999999") {
//             msn = "El DNI introducido es incorrecto";
//             validation=false;
//         }
//         else {
//             var rest = num % 23;
//             var letters = "TRWAGMYFPDXBNJZSQVHLCKET";
//             var set = letters.charAt(rest);
//             if (letter != set) {
//                 msn = "El DNI introducido es incorrecto"; 
//             }
//         }
//     } 
//     return {validation,msn}
// }

// //COMPROBACIONES CONTRASEÑA
// function longPassword(password){
//     return password.length >= 8 && password.length <= 18;
// }

// function isUppercase(letter)
// {
//     return letter >= 65 && letter <= 90;
// }

// function mayusculas(password){
//     var i = 0;
//     var validation = false;
//     while(i<password.length && !validation){
//         validation = isUppercase(password.charCodeAt(i));
//         i++;
//     }

//     return validation;
// }

// function isLowecase(letter)
// {
//     return letter >= 97 && letter <= 122;
// }

// function minusculas(password){
//     var i = 0;
//     var validation = false;
//     while(i<password.length && !validation){
//         validation = isLowecase(password.charCodeAt(i));
//         i++;
//     }

//     return validation;
// }

// function esNumero(letter){
//     return letter >= 48 && letter <= 57;
// }

// function dosNumeros(password){
//     var num = [];
//     for(let i=0;i<password.length; i++){
//         if(esNumero(password.charCodeAt(i))){
//             num.push(password[i]);
//         }
//     }
//     return num.length >=2;
// }

// function esCaracterEspecial(letter){
//     return (letter == 42) || (letter == 63) || (letter == 33) || (letter == 64) || (letter == 35) || (letter == 36) || (letter == 47) || (letter == 40) || (letter == 41) || (letter == 123) || (letter == 125) || (letter == 46) || (letter == 44) || (letter == 59) || (letter == 58);
// }

// function caracteresEspeciales(password){
//     var i = 0;
//     var validation = false;
//     while(i<password.length && !validation){
//         validation = esCaracterEspecial(password.charCodeAt(i));
//         i++;
//     }

//     return validation;

// }

// const isNotAllowedcharacters = (letter) =>{
//     return (letter != 32) || (letter != 39) || (letter != 34) || (letter != 60) || (letter != 62) || (letter != 45) || (letter != 61) || (letter != 37);
// }

//  const notAllowedcharacters = (password) => {
//     var i = 0;
//     var validation = false;
//     while(i<password.length && !validation){
//         validation = isNotAllowedcharacters(password.charCodeAt(i));
//         i++;
//     }

//     return validation;
// }

// validationPassword = (password) => {
//     var msn = "";
//     var validation = true;
//     var longPassword = longPassword(password);
//     var tieneMayus = mayusculas(password);
//     var tieneMinus = minusculas(password);
//     var tieneNums = dosNumeros(password);
//     var caracEspeciales = caracteresEspeciales(password);

//     if (longPassword && tieneNums && tieneMayus && tieneMinus && caracEspeciales){

//     }

//     return {validation,msn}
// }
function checkNotAllChar(value) {
    const isNotAllowedcharacters = (letter) =>{
        return (letter ==32) || (letter ==39) || (letter ==34) || (letter ==60) || (letter ==62) || (letter ==45) || (letter ==61) || (letter ==37);
    }
    const notAllowChars = (value) => {
        var i = 0;
        var validation = false;
        while(i<value.length && !validation){
            validation = isNotAllowedcharacters(value.charCodeAt(i));
            i++;
        }
        return validation;
    }

    return !notAllowChars(value);
}

export default checkNotAllChar;


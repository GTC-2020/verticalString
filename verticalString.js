function showVerticalMessage(str){
    const lengthOfOutputString = 10;
    const firstLatter = "м"

    if(str[0] === firstLatter){
        str = str[0].toUpperCase() + str.slice(1);
    }
    for(let i = 0; i < lengthOfOutputString; i++){
        if(str.length === i) break;
        console.log(str[i] + '\n');
    }
    
}
showVerticalMessage("марафон");
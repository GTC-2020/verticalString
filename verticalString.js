function showVerticalMessage(str){
    const lengthOfOutputString = 10;
    const firstLetter = "м"

    str = str.startsWith(firstLetter) ? str[0].toUpperCase() + str.substr(1, 9):str.substr(0, 10);

    for(let char of str){
        console.log(`${char}\n`);
    }
    
}
showVerticalMessage("марафон55555555555");
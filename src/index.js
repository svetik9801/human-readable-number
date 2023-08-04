module.exports = function toReadable (number) {
    const numbersToNineteen = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine', 
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    const numbersDecades = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
     
    let result = number.toString().split('');

    if(number < 20) {
        return numbersToNineteen[number]
    } 
    if(number < 100) {
        if(result[1] == 0) {
            return numbersDecades[result[0]];
        }
        return numbersDecades[result[0]] + ' ' + numbersToNineteen[result[1]];
    } 
    
    if(number % 100 === 0) {
        return numbersToNineteen[result[0]] + ' hundred';
    } 
    if(result[1] == 0) {
        return numbersToNineteen[result[0]] + ' hundred ' + numbersToNineteen[result[2]];
    }
    if(result[1] == 1) {
        
        return numbersToNineteen[result[0]] + ' hundred ' + numbersToNineteen[result[1].toString() + result[2].toString()];
    }
    if(number % 10 === 0) {
        return numbersToNineteen[result[0]] + ' hundred ' + numbersDecades[result[1]];
    } 
     
    return numbersToNineteen[result[0]] + ' hundred ' + numbersDecades[result[1]] + ' ' + numbersToNineteen[result[2]];
}


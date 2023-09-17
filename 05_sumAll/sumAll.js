const sumAll = function(from , to) {

    let sumTotal = 0;

    if (from < 0 || to < 0 || !Number.isInteger(from) || !Number.isInteger(to)){

        return 'ERROR';
    }


    if (from > to){
        for(let i = to ; i <= from ; i++){
            sumTotal += i;

    }
}

    for(let i = from ; i <= to ; i++){

        sumTotal += i;
        
    }
    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;

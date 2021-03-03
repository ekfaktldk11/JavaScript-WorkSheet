/**1**/

const func = () => {
    logic_1();
    logic_2();
    logic_3();
};
// No matter how you list the logics, 
// all the logics are executed simultaneously

/**2**/

// NaN -> Not a Number
// For checking NaN -> isNaN(val)

/**3**/

// Logic of the a random number production

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }
}; // exclude : invalid / ceil : 95.4 to 96 / floor : 95.4 to 95
// 'exclude' is used to prevent from recreating recent rndNum


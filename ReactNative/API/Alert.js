/* Alert
*/


/**1**/

const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99',
            [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
        return; // not valid -> terminate the function
    }
    // setConfirmed(true);
    // setEnteredValue('');
    // setSelectNumber(parseInt(enteredValue));
    // Keyboard.dismiss();
};

/* 
    - ('',) : Alert title / (,'') : Alert content
    - (,,[{text: ,}]) : the text which will be presented on the button in alert box
    - (,,[{,,onPress}]) : A logic that be carried on when the button be pressed
*/
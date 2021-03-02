/* value.replace() */

/**1**/
// Cleaning User Input & Controlling the Soft Keyboard

const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0~9]/g, ''));
}

/*
    1. If a value is string, we can call a internal fucntion 'replace'
    like value.replace(/[^0-9]/g,'')
    - replace(/[^0-9]/g,'') -> It means that replacing anything that's not a number 0 ~ 9, 
    so not a number, globally in the entire text to a empty string
    - basically drop non-number of value
    
    2. For iOS, its property that keyboard can't be hided by touching the screen, 
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> (Keyboard is a not component, but a API of RN) 
    -> Wrap all of the components of a screen

*/
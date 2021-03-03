/* useRef */

/*
    - UseRef is similar to useState
    - But there is a difference that would be occur a problem
    if we use both thoughtlessly

    -> In the case of using useState, if we change a state
    that is modified the state by 'useState', components would be re-rendered
    But the case that we use the 'useRef' in the similar situation, 
    components wouldn't be re-rendered

*/

const currentHigh = useRef(100);

// when change those values

currentHigh.current = rndNum;

// should use the .current prop
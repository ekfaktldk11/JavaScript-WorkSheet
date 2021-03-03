/* ------ Spread Operator ------- 

- A modern JS feature which pulls all the key-value pairs of an object out of the object and 
adds it to a new surrounding object
- Using the Spread Operator, We can merge the styles like {{...styles.card, ...props.style}}
- If we want to set the standard styles, array or something else for reusable custom js files, 
above-content will be better than make custom js files have similar looks to each others.

*/

/**1**/
// merge two styles
const Card = props => {
    return (
        <View style={{ ...styles.cardContainer, ...props.style }}>{props.children}</View>
    )
};
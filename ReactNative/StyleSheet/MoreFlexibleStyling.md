# Working with More Flexible Styling Rules
1. In many cases, screen width might be bigger than 300 pixels
-> For the others, we had better set the /*'width'/* to percentage(ex. '80%') & /*'minWidth'/* to pixels (ex. '300') than /*'maxWidth'/* to percentage & /*'width'/* to pixels
-> also set the 'maxWidth'(ex. '95%') with 'width' & 'minWidth'

# Introducing the Dimensions API
1. We need to find out how many pixels we have available in width and that's something
-> import { Dimensions } from 'react-native' // an obj not a component
-> Dimensions.get('?') // ? : window & screen

2. there is only difference between window & screen is, that is only matter in Android, status bar is excluded in 'window'

3. So 'window' means the real room you have available for your layout
-> width : Dimensions.get('window').width / 4 (ex)

# Using Dimensions in "if" Checks
1. marginTop: Dimensions.get('window').height > 600 ? 30 : 5,
-> If pixels of window's height are bigger than 600 -> marginTop : 30 / nor 5

2. 

const listContainerStyle = styles.listContainer;
...

if(Dimensions.get('window').width > 350){
  listContainerStyle = styles.listContainerBig;
};
...


const styles = StyleSheet.create({
    listContainer: {
        flex : 1,
        width: '80%'
    },
    listContainerBig: {
        flex : 1,
        width: '60%'
    }
})
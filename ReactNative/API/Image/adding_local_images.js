/**2**/

/*

- you can use two image's sources (Local & Network)

- In Local.. : source = {require('../.png')} 
-> 'require' would render the image with auto-arranging width & height
-> But in the case of image is big, the image will be overflowed
-> In that case, we should set(resize) an image on your own

- In Network.. : source = {{uri : 'https...'}}
-> The web image always have to set a width & a height on the !<image> component! (not <View>)

*/

// in local..
<View style={styles.imageContainer}>
                <Image
                    source={require('../meJinSeok.jpg')}
                    style={styles.image}
                    resizeMode="cover" />
            </View>
...

const styles = StyleSheet.create({ 
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },
    image: {
        width: '100%',
        height: '100%'
    }
});
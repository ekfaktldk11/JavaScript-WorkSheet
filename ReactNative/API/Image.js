/* Image 
    - 서로 다른 타입의 이미지들을 전시하는 컴포넌트로, 
    네트워크 이미지, 스태틱 리소스, 일시적 로컬 이미지 그리고 카메라 roll과 같은 로컬 디스크에서 가져온 미지가 있음.
    - source : 이미지를 어디서 가져오는지.. 메모리 내이미지, uri 이미지
*/

/*
    - you can use two image's sources (Local & Network)

    - In Local.. : source = {require('../.png')} 
    -> 'require' would render the image with auto-arranging width & height
    -> But in the case of image is big, the image will be overflowed
    -> In that case, we should set(resize) an image on your own
    
    - In Network.. : source = {{uri : 'https...'}}
    -> The web image always have to set a width & a height on the !<image> component! (not <View>)
*/

/**1**/

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../meJinSeok.jpg')}
                    style={styles.image}
                    resizeMode="cover" />
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>
                Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text>
                rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
                </Text>
            </View>
            <MainButton onPress={props.onRestart}>New Game</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },
    highlight: {
        color: Colors.primary,
    },
    resultText:{
        textAlign: 'center',
    },
    resultContainer:{
        marginHorizontal : 20,
    }
});
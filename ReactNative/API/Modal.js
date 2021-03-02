/* ------- Modal -------- 
    - how we can style our apps in a little bit of a more beautiful way 
    because obviously our styling here ---> <Modal>

    - 어떠한 content 에 대한 정보를 여/닫기 하는 기본적인 방법이다.
    - 보여줄 컨텐츠를 동봉하여 처음에는 안보여주다가 버튼아나 터치로 컨텐츠를 보여줄 수 있도록 하는 역할.
    - 컨텐츠가 편지라면 modal은 편지지 역할
    - 원하는 컨텐츠만 보여주도록 데이터를 절약하거나 어플 속도를 빠르게 해줄 수 있음.
*/
const ModalDisplay = props => {
    const [modalVisible, setModalVisible] = useState(false);

    const modalVisibleHandler = () => {
        setModalVisible(!!modalVisible);
    }

    return (
        <View style={{ marginTop: 22 }}>
            <Modal
                animationtype="slide"
                transparent={false} // if true -> position will be concated
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Text>Hello World!</Text>
                        <TouchableHighlight onPress={modalVisibleHandler}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <TouchableHighlight
                onPress={modalVisibleHandler}>
                <Text>Show Modal</Text>
            </TouchableHighlight>
        </View>
    )
}
// Note : If you need more control over how to present modals over the rest of your app, then consider using a top-level Navigator.
// Modal과 Touchable한 컴포넌트랑 같이 사용되어 touchable을 사용하여 modal을 열거나 닫음
// *Modal은 스타일 적용이 불가하여 Modal 내부의 View로 스타일링

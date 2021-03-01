/* Picker */
// native picker component를 만듬
// in the series of combo box

<Picker
    selectedValue={this.state.language}
    style={{ height: 50, width: 100 }}
    onValueChange={(itemValue, itemIndex) =>
        this.setState({ language: itemValue })
    }>

    <Picker.Item label="Java" value="java" />
    <Picker.Item label="JavaScript" value="js" />
</Picker>

// <Picker <Picker.Item “1”> <Picker.Item “2”> <Picker.Item “3”> ... >
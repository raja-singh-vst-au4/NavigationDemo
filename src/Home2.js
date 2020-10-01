import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export class Home2 extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <TouchableOpacity
style={{backgroundColor:'red'}}

onPress={()=>{this.props.navigation.navigate('Home1')}}
>
<Text> Navigate to Home1 </Text>

</TouchableOpacity>
            </View>
        )
    }
}

export default Home2

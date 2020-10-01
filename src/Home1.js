import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'

export class Home1 extends Component {
    render() {
        return (
            <View>
                <Text> Home 1 component </Text>
<TouchableOpacity
style={{backgroundColor:'red'}}
onPress={()=>{this.props.navigation.navigate('Home2')}}
>
<Text> Navigate to Home2 </Text>

</TouchableOpacity>
            </View>
        )
    }
}

export default Home1

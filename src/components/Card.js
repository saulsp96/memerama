import React from 'react';
import { Image , View , StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{

    },
    image:{
        height:90,
        width:90,
    }
})

class Card extends React.Component{
    render(){
        return(
            <View>
                <Image source={this.props.source} style={styles.image}/>
            </View>
        );
    }
}
export default Card;
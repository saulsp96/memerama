import React from 'react';
import { FlatList, StyleSheet  } from 'react-native';
import Card  from './Card';
import meme0 from '../../assets/0.jpg'
import meme1 from '../../assets/1.jpg'
import meme2 from '../../assets/2.jpg'
import meme3 from '../../assets/3.jpg'
import meme4 from '../../assets/4.jpg'
import meme5 from '../../assets/5.jpg'
import meme6 from '../../assets/6.jpg'
import meme7 from '../../assets/7.jpg'
import meme8 from '../../assets/8.jpg'
import meme9 from '../../assets/9.jpg'

const memes = [
  meme0,
  meme1,
  meme2,
  meme3,
  meme4,
  meme5,
  meme6,
  meme7,
  meme8,
  meme9,
];

const sources =[...memes,...memes];
const styles = StyleSheet.create({

cardsContainer:{
alignItems:'center',
paddingVertical:10
},
  container:{
 
},
meme:{
  height:300,
  width:300,
}
});

class Cards extends React.Component {
  keyExtractor = (item ,index) =>{
    return String(index);
  }
  renderCard = ({item}) =>{
    return <Card  source={item}/>;  
  }
  render(){
    return (
    
      <FlatList 
      contentContainerStyle={styles.cardsContainer}
      data={sources}
      keyExtractor={this.keyExtractor}
      numColumns={4}
      renderItem={this.renderCard}
      style={styles.cards}
      />
           
    
    );  
  }
}

  export default Cards;
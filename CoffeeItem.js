import React, { useState } from 'react'
import { Text, View, Image, StyleSheet} from 'react-native'

const CoffeeItem = (props) => {

    const [item, setItem] = useState(props.route.params.item)
    return (
        <View>
            <Image style={styles.productImage} source={{ uri : item.image}}/>
            <Text>{item.name}</Text>
            <Text>{item.price}€</Text>
            <Text>{item.description}</Text>
        </View>
    )
}


export default CoffeeItem

const styles = StyleSheet.create({
    productImage:{
        width: 100,
        height: 200 
    }
});
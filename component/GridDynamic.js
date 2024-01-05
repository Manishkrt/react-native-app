import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const GridDynamic = () => {
    const users = [
        { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
        { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
        { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" },
        { id: 4, name: "David", age: 22, email: "david@example.com" },
        { id: 5, name: "Eva", age: 27, email: "eva@example.com" },
        { id: 6, name: "Frank", age: 35, email: "frank@example.com" },
        { id: 7, name: "Grace", age: 29, email: "grace@example.com" },
        { id: 8, name: "Hannah", age: 31, email: "hannah@example.com" },
        { id: 9, name: "Isaac", age: 26, email: "isaac@example.com" },
        { id: 10, name: "Jasmine", age: 24, email: "jasmine@example.com" },
      ];
  return (
    <View>
        <Text>Dynamic Grid with Flex and Map Function</Text>
        <View style={style.ItemBox}> 
            {users.map((item)=>
            <View style={style.itemWrap} key={item.id}>
                <Text style={style.item}>{item.name} </Text>
                <Text style={style.item}>{item.email}</Text>
            </View>
            )} 
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    ItemBox : {
        flex : 1, 
        flexDirection : "row",
        flexWrap : 'wrap',
        gap : 10,
        margin : 10

    },
    itemWrap : {
        backgroundColor : "red",
        color: "white",
        padding : 10, 
        textAlign : 'center', 
        verticalAlign : 'center',
        height : 100, 
        width : 150

    },
    item : {
        color : "white", 
        fontSize : 12
    }


})

export default GridDynamic
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';

const FlatListPage = () => {
    const users = [
        { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
        { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
        { id: 3, name: 'Charlie', age: 28, email: 'charlie@example.com' },
        { id: 4, name: 'David', age: 22, email: 'david@example.com' },
        { id: 5, name: 'Eva', age: 27, email: 'eva@example.com' },
        { id: 6, name: 'Frank', age: 35, email: 'frank@example.com' },
        { id: 7, name: 'Grace', age: 29, email: 'grace@example.com' },
        { id: 8, name: 'Hannah', age: 31, email: 'hannah@example.com' },
        { id: 9, name: 'Isaac', age: 26, email: 'isaac@example.com' },
        { id: 10, name: 'Jasmine', age: 24, email: 'jasmine@example.com' },
      ];
  return (
    <View>
        <Text>Flat List </Text>
        <FlatList
        data={users}
        keyExtractor={item=>item.id}
        renderItem={({item})=>
            <View style={style.listStyle}>
                <Text>name : {item.name}</Text>
                <Text>Email : {item.email}</Text>
                <Text>Age : {item.age}</Text>
            </View>
        }
        />
    </View>
  )
}

const style = StyleSheet.create({
    listStyle : {
        fontSize : 20,
        padding : 10,
        backgroundColor : '#aaaaaa',
        borderBottomColor : '#ccc',
        borderBottomWidth : 1
    }
})

export default FlatListPage
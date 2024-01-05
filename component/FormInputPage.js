import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const FormInputPage = () => {
    const [ name, setName] = useState("")
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const [ print , setPrint] = useState(false)

    const resetForm = ()=>{
        setPrint(false)
        setName("")
        setEmail("")
        setPassword("")
    }


  return (
    <View style={{margin : 10}}> 
        <Text>Form Input Page</Text>
        <TextInput style={style.inputStyle} placeholder='enter your name' onChangeText={value=>setName(value)} value={name}/>
        <TextInput style={style.inputStyle} placeholder='enter your email' onChangeText={value=>setEmail(value)} value={email}/>
        <TextInput style={style.inputStyle} placeholder='enter your password' secureTextEntry={true} onChangeText={value=>setPassword(value)} value={password}/>
        <View style={{marginBottom : 8}}>
            <Button title="Submit Form" color="green" onPress={()=>setPrint(true)}></Button>
        </View>
        <View>
            <Button color="#FFBF00" title="Reset Form" onPress={resetForm}></Button>
        </View>

        {print ? 
        <View>
            <Text>
            {name} {email} {password}
            </Text>
        </View>
        : null}
    </View>
  )
}

const style = StyleSheet.create({
    inputStyle : {
        borderWidth : 2,
        borderColor: "gray",
        marginBottom : 10,
        padding : 4

    }
})

export default FormInputPage
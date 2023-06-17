import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function GetScreen() {
  const [textContent, setTextContent] = useState("");
  const [Name, setName] = useState('')

  const handleTextChange = (e) => {
    setTextContent(e);
  };

  const fetchEmployee = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/employee/${textContent}`)
    .then(response => response.text())
    .then(data => {
        console.log(data);
    }).catch(error => {
        console.error(error);
    })
    
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        value={textContent}
        onChangeText={handleTextChange}
        style={styles.input}
        placeholder="ID"
      />
      <Button
        onPress={fetchEmployee}
        title="Get Employee Details"
        color="#841584"
      />
      <Text>Fetched Values: {Name}</Text>
      <Text>Employee Name: </Text>
      <Text>Employee Salary: </Text>
      <Text>Employee Image: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 16,
    borderWidth: 2,
    padding: 12,
    width: 240,
    borderRadius: 8,
  },
});

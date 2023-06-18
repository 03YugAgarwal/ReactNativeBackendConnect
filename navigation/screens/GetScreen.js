import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function GetScreen() {
  const [textContent, setTextContent] = useState("");
  const [Name, setName] = useState('')
  const [Age, setAge] = useState('')
  const [Salary, setSalary] = useState('')

  const handleTextChange = (e) => {
    setTextContent(e);
  };

  const fetchEmployee = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/employee/${textContent}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data);
        setName(data.data.employee_name)
        setAge(data.data.employee_age)
        setSalary(data.data.employee_salary)
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
      <Text>Fetched Values: </Text>
      <Text>Employee Name: {Name}</Text>
      <Text>Employee Age: {Age}</Text>
      <Text>Employee Salary: {Salary}</Text>
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

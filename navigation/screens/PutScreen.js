import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default function PutScreen() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Salary, setSalary] = useState("");
  const [ID, setID] = useState("");

  const [employee, setEmployee] = useState({});

  const [successMsg, setSuccessMsg] = useState();

  const postEmployee = () => {
    setEmployee({ name: Name, age: Age, salary: Salary });

    fetch(`https://dummy.restapiexample.com/api/v1/update/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccessMsg(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleNameChange = (value) => {
    setName(value);
  };
  const handleAgeChange = (value) => {
    setAge(value);
  };
  const handleSalaryChange = (value) => {
    setSalary(value);
  };
  const handleIDChange = (value) => {
    setID(value);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        value={ID}
        onChangeText={handleIDChange}
        style={styles.input}
        placeholder="ID"
      />
      <TextInput
        value={Name}
        onChangeText={handleNameChange}
        style={styles.input}
        placeholder="Name"
      />
      <TextInput
        value={Salary}
        onChangeText={handleSalaryChange}
        style={styles.input}
        placeholder="Salary"
      />
      <TextInput
        value={Age}
        onChangeText={handleAgeChange}
        style={styles.input}
        placeholder="Age"
      />

      <Button
        onPress={postEmployee}
        title="Update Details"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 8,
    borderWidth: 2,
    padding: 12,
    width: 240,
    borderRadius: 8,
  },
});

import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default function DeleteScreen() {
  const [ID, setID] = useState("");
  const [successMsg, setSuccessMsg] = useState();

  const handleIDChange = (value) => {
    setID(value);
  };

  const postEmployee = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/delete/${ID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuccessMsg(data.message)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        value={ID}
        onChangeText={handleIDChange}
        style={styles.input}
        placeholder="ID"
      />
      <Button onPress={postEmployee} title="Delete Employee" color="#841584" />
      {successMsg ? <Text>{successMsg}</Text> : <Text>Delete a user</Text>}
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

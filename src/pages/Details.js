import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import axios from 'axios';

function Details({navigation, route}) {
  const {userID} = route.params;
  const [user, setUser] = useState([]);

  const getDetails = () => {
    axios
      .get(`https://reqres.in/api/users/${userID}`)
      .then((res) => setUser(res.data.data));
  };

  useEffect(() => {
    getDetails();
  }, [1]);

  return (
    <View style={{borderTopWidth: 1}}>
      <Image
        source={{uri: user.avatar}}
        style={{
          marginVertical: 5,
          width: 300,
          height: 200,
        }}
      />
      <Text>ID: {user.id}</Text>
      <Text>
        ADI: {user.first_name} {user.last_name}
      </Text>
      <Text>email: {user.email}</Text>
    </View>
  );
}

export default Details;

import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import axios from 'axios';

function Home({navigation}) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        setUsers(users.concat(res.data.data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUsers();
  }, [page]);

  const moreLoadFlatList = () => {
    setPage(page + 1);
  };

  const Item = ({user}) => (
    <View style={styles.cardViewStyle}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {userID: user.id})}
        style={styles.cardStyle}>
        <View>
          <Image source={{uri: user.avatar}} style={styles.cardImageStyle} />
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mobil / Web Tasarım</Text>
          <Text style={{fontWeight: '700', marginVertical: 5}}>
            Lorem ipsum dolor sit amet
          </Text>
          <Text style={styles.userNameStyle}>
            {user.first_name} {user.last_name}
          </Text>
          <View style={styles.cardBottomStyle}>
            <Text
              style={{
                flex: 5,
                fontSize: 14,
                color: '#6BA1FF',
                fontWeight: '700',
              }}>
              5.0 puan
            </Text>
            <Text style={{fontWeight: '700', color: '#6BA1FF', fontSize: 14}}>
              30₺ / dakika
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderUser = ({item}) => <Item user={item} />;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchView}>
          <TextInput
            style={styles.searchStyle}
            placeholder={'Uzman ya da konu ara'}
            placeholderTextColor="#757575"
            returnKeyType="search"
          />
        </View>
        <View style={styles.listView}>
          <Text style={styles.listTitle}>Öne Çıkanlar</Text>
          <FlatList
            data={users}
            renderItem={renderUser}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={moreLoadFlatList}
          />
        </View>
        <View style={styles.listView}>
          <Text style={styles.listTitle}> Popüler</Text>
          <FlatList
            data={users}
            renderItem={renderUser}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={moreLoadFlatList}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  searchView: {flex: 1, marginBottom: 10},
  listView: {flex: 3, marginTop: 10},
  listTitle: {fontWeight: 'bold', fontSize: 16, marginHorizontal: 10},
  searchStyle: {
    fontSize: 14,
    backgroundColor: '#DCDCDC',
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 10,
  },
  cardViewStyle: {marginTop: 10, flex: 1},
  cardStyle: {
    flexDirection: 'column',
    margin: 5,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: '#E9ECEE',
  },
  cardImageStyle: {
    width: 250,
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  cardBody: {flex: 1, margin: 5, flexDirection: 'column'},
  cardTitle: {
    color: '#6BA1FF',
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 5,
  },
  userNameStyle: {
    color: '#2D3640',
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 5,
  },
  cardBottomStyle: {
    flex: 1,
    paddingVertical: 5,
    marginVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#E9ECEE',
    flexDirection: 'row',
  },
});

export default Home;

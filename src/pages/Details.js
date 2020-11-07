import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';

function Details({route}) {
  const {userID} = route.params;

  const [user, setUser] = useState([]);

  const getDetails = () => {
    axios
      .get(`https://reqres.in/api/users/${userID}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetails();
  }, [1]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageViewStyle}>
          <Image style={styles.imageStyle} source={{uri: user.avatar}} />
        </View>
        <View style={styles.detailHeader}>
          <Text style={{color: '#71A2F9', fontWeight: '700', fontSize: 13}}>
            İş ve Ticaret
          </Text>
          <Text style={{color: '#2D3640', fontWeight: 'bold', fontSize: 18}}>
            Dijital Pazarlama Teknikleri
          </Text>
          <Text style={{color: '#2D3640'}}>
            {user.first_name} {user.last_name}{' '}
          </Text>
        </View>
        <View style={styles.detailBody}>
          <Text
            style={{
              textAlign: 'justify',
              fontWeight: '700',
              fontSize: 14,
              color: '#2D3640',
            }}>
            Geleneksel pazarlama anlayışında baskı, televizyon, telefon gibi
            araçlar kullanılır ve etki alanı sınırlıdır. Dijital pazarlamanın
            geleneksel pazarlamadan maliyet, iletişim, zaman, kapsam,
            kullanılabilirlik, deneyim sunumu, çalışan kişiler ve kullanılan dil
            açısından farkları vardır. Geleneksel pazarlama anlayışında baskı,
            televizyon, telefon gibi araçlar kullanılır ve etki alanı
            sınırlıdır. Dijital pazarlamanın geleneksel pazarlamadan maliyet,
            iletişim, zaman, kapsam, kullanılabilirlik, deneyim sunumu, çalışan
            kişiler ve kullanılan dil açısından farkları vardır. Geleneksel
            pazarlama anlayışında baskı, televizyon, telefon gibi araçlar
            kullanılır ve etki alanı sınırlıdır. Dijital pazarlamanın geleneksel
            pazarlamadan maliyet, iletişim, zaman, kapsam, kullanılabilirlik,
            deneyim sunumu, çalışan kişiler ve kullanılan dil açısından farkları
            vardır.
          </Text>
        </View>
        <View style={styles.detailBottom}>
          <Text style={{fontWeight: 'bold', color: '#71A2F9'}}>
            İletişim bilgileri:
          </Text>
          <Text style={{fontWeight: '700'}}>
            {user.first_name} {user.last_name}
          </Text>
          <Text style={{fontWeight: '700'}}>{user.email}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Görüşme Talebi',
              `${user.first_name} ${user.last_name} ile görüşme talebiniz alındı!`,
              [{text: 'Tamam'}],
            )
          }
          style={styles.button}>
          <Text style={styles.buttonText}>Görüşme Talebi</Text>
          <Text style={styles.buttonPriceText}>₺7.67</Text>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 12,
              color: '#FFFFFF',
            }}>
            /dakika
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F3FC',
  },
  imageViewStyle: {flex: 1, alignItems: 'center', margin: 5},
  imageStyle: {width: 335, height: 190, borderRadius: 5},
  detailHeader: {flex: 1, marginHorizontal: 10, marginVertical: 5},
  detailBody: {flex: 1, margin: 10},
  detailBottom: {flex: 1, margin: 10},
  button: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#0861FB',
  },
  buttonText: {flex: 1, fontWeight: '700', color: '#FFFFFF'},
  buttonPriceText: {fontWeight: '700', color: '#FFFFFF'},
});

export default Details;

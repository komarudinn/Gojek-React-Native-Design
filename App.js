import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TextInput } from 'react-native'
import appStyle from './appStyle'
const kontenKamu = ['Jalan-jalan', 'Makanan', 'Promo', 'Pembayaran']

export default class App extends Component {
  componentDidMount(){
    console.log('Testing')
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 80, flexDirection: 'row', paddingVertical: 15, marginHorizontal: 40 }}>
          <View style={{ flex: 3 }}>
            <Image
              style={{ width: 30, height: 30, position: 'absolute', left: 10, top: 5 }}
              source={require('./assets/search.png')} />
            <TextInput
              pdslaceholderTextColor='Black'
              placeholder='Cari layanan Gojek...'
              style={{
                height: 40, borderWidth: 0.7, borderColor: '#E8E8E8', borderRadius: 50,
                paddingLeft: 50
              }} />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', allignItems: 'center', height: 43, borderWidth: 0.7, borderColor: '#E8E8E8', borderRadius: 50, paddingVertical: 8, marginLeft: 20 }}>
            <Image
              style={{ width: 20, height: 20, marginLeft: 10, marginTop: 2 }}
              source={require('./assets/promo.png')}
            />
            <Text style={{ marginTop: 2, marginLeft: 3 }}>
              Promo
            </Text>
          </View>
        </View>
        <ScrollView style={{ paddingHorizontal: 15 }}>
          {/* GOPAY SECTION */}
          <View style={{ height: 200, }}>
            <View style={{ height: 65, backgroundColor: '#2A5EB5', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image
                style={{ height: 22, width: 100 }}
                source={require('./assets/gopay.png')}
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', height: 90 }}>Rp. 0</Text>
            </View>
            <View style={{ backgroundColor: '#2E62BB', flex: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,  flexDirection: 'row', paddingHorizintal: 20}}>
            <View style={{ flex: 1, allignItems: 'center', marginLeft: 40, marginTop: 20}}>
            <Image style={{ width: 45, height: 45, marginTop: 10, resizeMode: 'contain'}}
              source={require('./assets/gopay-fitur-1.png')}
            />
            <Text style={{ color: 'white', fontSize: 12 }}>Bayar</Text>
          </View>
            <View style={{ flex: 1, allignItems: 'center', marginTop: 20}}>
            <Image style={{ width: 45, height: 45, marginTop: 10, resizeMode: 'contain' }}
              source={require('./assets/gopay-fitur-2.png')}
            />
            <Text style={{ color: 'white', fontSize: 12 }}>Bayar</Text>
          </View>
            <View style={{ flex: 1, allignItems: 'center', marginTop: 20}}>
            <Image style={{ width: 45, height: 45, marginTop: 10, resizeMode: 'contain' }}
              source={require('./assets/gopay-fitur-3.png')}
            />
            <Text style={{ color: 'white', fontSize: 12 }}>Bayar</Text>
          </View>
            <View style={{ flex: 1, allignItems: 'center', marginTop: 20}}>
            <Image style={{ width: 45, height: 45, marginTop: 10, resizeMode: 'contain' }}
              source={require('./assets/gopay-fitur-4.png')}
            />
            <Text style={{ color: 'white', fontSize: 12 }}>Bayar</Text>
          </View>
            </View>
          </View>

          {/* KONTEN BUAT KAMU */}
          <Text style={appStyle.text_style}>
            Konten Buat Kamu
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{borderWidth: 0.7, borderColor: '#E8E8E8', backgroundColor: '#31B057', padding: 10, borderRadius: 50, marginRight:10}}>
            <Text style={{color: 'white'}}>Apa aja</Text>
          </View>
              {
                kontenKamu.map(val =>{
                  return(
                    <View style={{borderWidth: 0.7, borderColor: '#E8E8E8', padding: 10, borderRadius: 50, marginRight:10}}>
                      <Text>{val}</Text>
                    </View>
                  )
                })
              }
          </ScrollView>


        </ScrollView>
        <View style={{ height: 80, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 30, borderTopColor: '#E8E8E8', borderTopWidth: 2, paddingVertikal: 15, paddingHorizontal: 10 }}>
          <View style={{ flex: 1, allignItems: 'center', marginLeft: 40 }}>
            <Image style={{ width: 45, height: 45, marginTop: 10, resizeMode: 'contain' }}
              source={require('./assets/tab-beranda.png')}
            />
            <Text style={{ color: 'green', fontSize: 12 }}>Beranda</Text>
          </View>
          <View style={{ flex: 1, allignItems: 'center' }}>
            <Image style={{ width: 45, height: 45, marginTop: 10, resizeMode: 'contain' }}
              source={require('./assets/tab-pesanan.png')} />
            <Text style={{ fontSize: 12 }}>Pesanan</Text>
          </View>
          <View style={{ flex: 1, allignItems: 'center' }}>
            <Image style={{ width: 45, height: 45, marginTop: 10, resizeMode: 'contain' }}
              source={require('./assets/tab-pesan.png')} />
            <Text style={{ fontSize: 12, marginLeft: 8 }}>Chat</Text>
          </View>
          <View style={{ flex: 1, allignItems: 'center' }}>
            <Image style={{ width: 40, height: 40, marginTop: 10, resizeMode: 'contain' }}
              source={require('./assets/tab-akun.png')} />
            <Text style={{ fontSize: 12, marginTop: 5, marginLeft: 5 }}>Akun</Text>
          </View>
        </View>
      </View>
    )
  }
}

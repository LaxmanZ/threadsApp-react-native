import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <View style={{ marginTop: 100 }}>
        <Image
          style={{ width: 150, height: 100, resizeMode: 'contain' }}
          source={{
            uri: 'https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png',
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ marginTop: 25, fontSize: 20, fontWeight: 'bold' }}>
            Create New Account
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              borderColor: '#d0d0d0',
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <Ionicons
              style={{ marginLeft: 9 }}
              name="person"
              size={24}
              color="gray"
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: 'gray',
                marginVertical: 5,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder="Enter Your Name"
              placeholderTextColor={'gray'}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              borderColor: '#d0d0d0',
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 9 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: 'gray',
                marginVertical: 5,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter Your Email"
              placeholderTextColor={'gray'}
            />
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                borderColor: '#d0d0d0',
                borderWidth: 1,
                paddingVertical: 5,
                borderRadius: 5,
              }}
            >
              <AntDesign
                style={{ marginLeft: 9 }}
                name="lock"
                size={24}
                color="gray"
              />
              <TextInput
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                style={{
                  color: 'gray',
                  marginVertical: 5,
                  width: 300,
                  fontSize: password ? 16 : 16,
                }}
                placeholder="Enter Your Password"
                placeholderTextColor={'gray'}
              />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 30 }} />

        <Pressable
          style={{
            width: 130,
            backgroundColor: 'black',
            padding: 13,
            marginTop: 30,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable
          style={{ marginTop: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ textAlign: 'center', fontSize: 17 }}>
            Already have an Account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});

import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const LoginScreen = () => {
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
            Login To Your Account
          </Text>
        </View>

        <View
          style={{
            marginTop: 40,
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
              style={{ color: 'gray', marginVertical: 5, width: 300 }}
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
                style={{ color: 'gray', marginVertical: 5, width: 300 }}
                placeholder="Enter Your Password"
                placeholderTextColor={'gray'}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 15,
            }}
          >
            <Text>Keep me Logged in</Text>
            <Text style={{ fontWeight: '500', color: '#007fff' }}>
              Forgot Password
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

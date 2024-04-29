import React from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const schema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
});

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigation = useNavigation();

  const onPressSend = (formData) => {
    console.log(formData);
    navigation.navigate('Timeline', {
      paramemail: formData.email,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <KeyboardAvoidingView style={styles.inner} behavior="padding" keyboardVerticalOffset={100}>
          <View>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Username or Email"
                  style={styles.input}
                />
              )}
              name="email"
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Password"
                  secureTextEntry
                  style={styles.input}
                />
              )}
              name="password"
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onPressSend)}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.optionsContainer}>
            <TouchableOpacity onPress={() => console.log("Forgotten password pressed")}>
              <Text style={styles.optionText}>Forgotten password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => console.log("Create new password pressed")} style={styles.createPasswordButton}>
            <Text style={styles.createPasswordButtonText}>Create new password</Text>
          </TouchableOpacity>
          <View style={styles.languagesContainer}>
            <TouchableOpacity onPress={() => console.log("Languages pressed")}>
              <Text style={styles.languagesText}>English(US) , Sesotho , More Languages...</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
  },
  optionsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  optionText: {
    color: '#007AFF',
  },
  createPasswordButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  createPasswordButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  languagesContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  languagesText: {
    color: '#007AFF',
  },
});

export default Login;

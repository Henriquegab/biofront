import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Pressable, TouchableOpacity, ActivityIndicator, Platform, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logos.png'
import email from '../assets/email3.png'
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import axios from 'axios';

const RegisterScreen = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

  const handleRegister = async () => {
      if(password != confirmPassword){
        Toast.show("O campo senha e confirmar senha devem ser iguais!",{
          position: 70
        });
        return;
      }
      if(password.length < 6){
        Toast.show("A senha deve conter no mínimo 6 dígitos!",{
          position: 70
        });
        return;
      }
      if(name.length < 2){
        Toast.show("O nome deve conter no mínimo 2 dígitos!",{
          position: 70
        });
        return;
      }
      setLoading(true);

      try {

        const credentials = {
          email: email,
          password: password,
          name: name
        }
  
        const res = await axios.post(global.apiUrl + '/api/register', credentials).then(function (res_api) {
          
          setResponse(res_api.data);
          Toast.show(res_api.data.message,{
            position: 70
          });
          navigation.navigate('Login')
  
  
        }).catch(function (error) {
          
          Toast.show(error.response.data.message,{
            position: 70
          })
          
        });
  
      } catch (error) {
        setLoading(false);
        console.error('Erro ao fazer a requisição POST:', error);
      }
  
      setLoading(false);
  }

  const login = () => {
        navigation.navigate('Login')
  }

  if (loading) {
    // Exibe um indicador de carregamento enquanto espera a resposta da API
    return (
      <View className="flex-1 justify-center items-center bg-zinc-900">
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center px-8"
      >
        <View className="items-center mb-8">
          <Image
            source={require('../assets/logo.jpg')}
            className="w-16 h-16"
          />
        </View>

        <View className="mb-6">
          <Text className="text-white text-2xl font-bold text-center">BIOFRONT</Text>
          <View className="flex-row justify-center space-x-4 mt-2">
            <TouchableOpacity onPress={()=> {navigation.navigate('Login')}}>
              <Text className="text-gray-400">ENTRAR</Text>
            </TouchableOpacity>
            
            <View className="border-b border-bioVerde">
              <Text className="text-white font-semibold">CADASTRAR</Text>
            </View>
            
          </View>
        </View>

        <TextInput
          value={name} onChangeText={name => setName(name)} placeholder="Nome" maxLength={40}
          // value={username}
          // onChangeText={setUsername}
          className="bg-zinc-800 text-white rounded-md p-4 mb-4"
          placeholderTextColor="#9CA3AF"
        />

        <TextInput
          value={email} onChangeText={email => setEmail(email)} placeholder="Email" maxLength={40}
          className="bg-zinc-800 text-white rounded-md p-4 mb-4"
          placeholderTextColor="#9CA3AF"
        />
        <TextInput
          secureTextEntry={true} onChangeText={password => setPassword(password)} value={password} placeholder="Senha" maxLength={40} textContentType={'oneTimeCode'}
          // value={username}
          // onChangeText={setUsername}
          className="bg-zinc-800 text-white rounded-md p-4 mb-4"
          placeholderTextColor="#9CA3AF"
        />

        <TextInput
          secureTextEntry={true} onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} value={confirmPassword} placeholder="Confirmar Senha" maxLength={40} textContentType={'oneTimeCode'}
          className="bg-zinc-800 text-white rounded-md p-4 mb-4"
          placeholderTextColor="#9CA3AF"
        />

        

        <TouchableOpacity
          className="bg-bioVerde rounded-full py-4 items-center"
          onPress={handleRegister}
          
        >
          <Text className="text-white font-bold">CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate("ForgotPassword")}} className="mt-4">
          <Text className="text-gray-400 text-center">Esqueceu a senha?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

//   return (
//     <>
//     <SafeAreaView className="">

      
      

        
        
//     </SafeAreaView>

//       <View className="flex-1 items-center justify-center bg-bioBrancoPrincipal">

//         <View className=" w-64 items-center">
//             <Image className="w-28 h-28" source={logo}></Image>
//             <Text className="font-bold text-black text-lg">BioFront</Text> 

//           </View>
//           <View className="w-80 items-center b mt-16 pt-4 pb-1 space-y-6">
//             <View className="flex-row rounded-sm border-2 border-bioTextoCinzaEscuro">
//               <View className="w-2 justify-center items-center">
                
//               </View>
//               <TextInput value={name} onChangeText={name => setName(name)} placeholder="Nome" maxLength={40} className="w-64 h-10 p-1"></TextInput>
//             </View>

//             <View className="flex-row rounded-sm border-2 border-bioTextoCinzaEscuro">
//               <View className="w-2 justify-center items-center">
                
//               </View>
//               <TextInput value={email} onChangeText={email => setEmail(email)} placeholder="Email" maxLength={40} className="w-64 h-10 p-1"></TextInput>
//             </View>

//             <View className="flex-row rounded-sm border-2 border-bioTextoCinzaEscuro">
//               <View className="w-2 justify-center items-center">
                
//               </View>
//               <TextInput secureTextEntry={true} onChangeText={password => setPassword(password)} value={password} placeholder="Senha" maxLength={40} className="w-64 h-10 p-1"></TextInput>
//             </View>

//             <View className="flex-row rounded-sm border-2 border-bioTextoCinzaEscuro">
//               <View className="w-2 justify-center items-center">
                
//               </View>
//               <TextInput secureTextEntry={true} onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} value={confirmPassword} placeholder="Confirmar Senha" maxLength={40} className="w-64 h-10 p-1"></TextInput>
//             </View>
            
            

            
            

//           </View>
//           <View className="flex-2 w-80 items-end pr-6">
//             <View className="flex-row rounded-sm pb-8">
              
              
//             </View>
//           </View>
//           <View>
//             <View className="flex-row rounded-sm">
//                 <LoginButton press={handleRegister} title="Cadastrar"></LoginButton>
                
//             </View>
//           </View>
//           <View>
//             <View className="flex-row rounded-sm mt-4">
                
//                   <Text className="text-bioTextoCinzaMaisEscuro text-sm">Já tem uma conta? </Text>
//                   <TouchableOpacity onPress={login}><Text className="text-blue-800 font-semibold">Faça login!</Text></TouchableOpacity>
                
                
//             </View>
//           </View>

//       </View>
      
          
          
      
//     </>
//   )
// }


export default RegisterScreen



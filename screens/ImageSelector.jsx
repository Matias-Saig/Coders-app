import { useState } from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker';
import { setImageCam } from '../features/Auth/AuthSlice';
import { useSetProfileImageMutation } from '../app/Service/userProfileApi';


const ImageSelector = ({navigation}) => {
    const [image, setImage] = useState("")
    const {localId} = useSelector(state => state.auth.value)
    const [triggerProfileImage, result] = useSetProfileImageMutation
    const dispatch = useDispatch()

    const pickImage = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        
        if(granted){
          let result = await ImagePicker.launchCameraAsync({
             allowsEditing:true,
             aspect:[6,4],
             quality:0.3,
             base64:true
          })
 
          if(!result.canceled){
             setImage('data:image/jpeg;base64,' + result.assets[0].base64)
          }
        }
 
    }

    const saveImage = () => {
        dispatch(setImageCam(image))
        triggerProfileImage({localId, image})
        navigation.goBack()
    }
    
return (
<View>

{
    image ?
    <>
    <Image source={{uri:image}} />
    <Pressable onPress={pickImage}> Tomar otra foto </Pressable>
    <Pressable onPress={saveImage}>Guardar foto</Pressable>
    </>
    :
    // foto generica
    <Pressable onPress={pickImage}>Tomar foto</Pressable>

}

</View>
 )
}

export default ImageSelector

const styles = StyleSheet.create({})    
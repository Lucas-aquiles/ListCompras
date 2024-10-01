import React, {useState} from 'react';
import {View, Linking, TouchableOpacity, Dimensions} from 'react-native';
import {globalColors} from '../theme/theme';
import {
  Button,
  Text,
  Modal,
  Div,
  Radio,
  Icon,
  Checkbox,
} from 'react-native-magnus';
import {useIdiomaStore} from '../../store/useIdiomaStore';
interface IdiomaState {
  lenguage: boolean;
}
export const SettingScreen = () => {
  const lenguage = useIdiomaStore((state: IdiomaState) => state.lenguage);

  const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla
  const [visible, setVisible] = useState(false);
  const setLenguage = useIdiomaStore(state => state.setLenguage);

  const handlePress = () => {
    // Reemplaza la URL con la dirección a la que deseas redirigir
    Linking.openURL('https://rootsoftware.com.ar/politicaslistcompras');
  };

  return (
    <View
      style={{
        backgroundColor: globalColors.primary,
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        paddingVertical: height * 0.1,
      }}>
      <Button
        mx="auto"
        px="xl"
        py="lg"
        bg="green700"
        w={250}
        borderWidth={1}
        borderColor="green900"
        color="white"
        underlayColor="green900"
        onPress={handlePress}
        rounded={'2xl'}>
        <Text color="white" fontSize="2xl" fontWeight="bold" opacity={0.9}>
          {lenguage ? 'Políticas de Privacidad' : 'Privacy Policy'}
        </Text>
      </Button>
      <Button
        underlayColor="green900"
        mx="auto"
        px="xl"
        py="lg"
        bg="green700"
        mt={20}
        w={250}
        borderWidth={1}
        borderColor="green900"
        rounded={'2xl'}
        onPress={() => {
          setVisible(true);
        }}>
        <Text color="white" fontSize="2xl" fontWeight="bold" opacity={0.9}>
          {lenguage ? 'Idioma' : 'Language'}
        </Text>
      </Button>

      <Modal isVisible={visible} bg="green1000">
        <Button
          bg="green700"
          position="absolute"
          top={50}
          right={15}
          rounded="circle"
          onPress={() => {
            setVisible(false);
          }}>
          <Icon
            name="close"
            fontFamily="Ionicons"
            fontSize={30}
            color="white"
          />
        </Button>

        <Div mt={200} mx={'auto'}>
          <Text
            color="white"
            mx="lg"
            fontSize="2xl"
            fontWeight="bold"
            opacity={0.9}>
            {lenguage ? 'Current Language' : 'Idioma Actual'} :
            {lenguage ? ' Spanish' : ' English'}
          </Text>
          <Div row>
            <Button
              mt="lg"
              px="xl"
              py="lg"
              bg="green700"
              mx="lg"
              borderWidth={1}
              borderColor="green900"
              color="white"
              underlayColor="red400"
              onPress={() => {
                setLenguage(false);
              }}>
              English
            </Button>
            <Button
              mt="lg"
              px="xl"
              py="lg"
              bg="green700"
              borderWidth={1}
              borderColor="green900"
              color="white"
              mx="lg"
              underlayColor="blue300"
              onPress={() => {
                setLenguage(true);
              }}>
              Spanish
            </Button>
          </Div>
        </Div>
      </Modal>
    </View>
  );
};

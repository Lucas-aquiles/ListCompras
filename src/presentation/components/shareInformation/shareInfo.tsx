import {View, Share, Dimensions} from 'react-native';
import {Button, Icon, Text} from 'react-native-magnus';
import {useIdiomaStore} from '../../../store/useIdiomaStore';
interface IdiomaState {
  lenguage: boolean;
}
export const ShareInfo = ({total, products}: any) => {
  const lenguage = useIdiomaStore((state: IdiomaState) => state.lenguage);

  const resultado = total;
  const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: lenguage
          ? `Te gastaste en la compra  : ${resultado}`
          : `You spent on the purchase : ${resultado}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      console.log('Error al compartir:', error);
    }
  };

  return (
    <Button
      onPress={handleShare}
      my={'auto'}
      py="lg"
      bg="green700"
      color="white"
      underlayColor="green900"
      shadow="sm"
      suffix={
        <Icon
          name="arrow-forward-outline"
          fontFamily="Ionicons"
          fontSize={24}
          color="white"
          rounded="md"
          ml={1}
        />
      }>
      <Text color="white" fontSize="2xl" fontWeight="bold" opacity={0.9}>
        {lenguage ? 'Compartir' : 'Share'}
      </Text>
    </Button>
  );
};

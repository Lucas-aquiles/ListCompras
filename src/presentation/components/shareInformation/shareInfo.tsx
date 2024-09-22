import {Button, View, Share, Pressable, Text, Dimensions} from 'react-native';

export const ShareInfo = ({total}: any) => {
  const resultado = total;
  const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Te gastaste en la compra  : ${resultado}`,
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
    <Pressable
      style={{
        backgroundColor: 'gray',
        width: width * 0.3,
        height: height * 0.07,
        justifyContent: 'center',
        borderRadius: 20,
      }}
      onPress={handleShare}>
      <Text
        style={{
          color: 'white',
          marginHorizontal: 'auto',
          fontSize: width * 0.05,
        }}>
        {' '}
        Compartir
      </Text>
    </Pressable>
  );
};

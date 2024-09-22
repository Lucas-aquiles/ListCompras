import {Button, View, Share, Pressable, Text} from 'react-native';

export const ShareInfo = ({total}: any) => {
  const resultado = total;

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `El resultado de la compra es de : ${resultado}`,
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
        width: 110,
        height: 35,
        justifyContent: 'center',
        borderRadius: 20,
      }}
      onPress={handleShare}>
      <Text
        style={{
          color: 'white',
          marginHorizontal: 'auto',
          fontSize: 15,
        }}>
        {' '}
        Compartir
      </Text>
    </Pressable>
  );
};

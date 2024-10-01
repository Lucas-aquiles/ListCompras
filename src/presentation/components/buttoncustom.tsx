import React from 'react';
import {Button, Icon, Text} from 'react-native-magnus';

interface CustomProps {
  nameIcon: string;
  onPress: () => void;
}

const Buttoncustom = ({nameIcon, onPress}: CustomProps) => {
  return (
    <Button
      bg="green700"
      mx="auto"
      rounded="circle"
      shadow="md"
      my={5}
      borderless
      onPress={onPress}>
      <Icon name={nameIcon} fontFamily="Ionicons" fontSize={30} color="white" />
    </Button>
  );
};

export default Buttoncustom;

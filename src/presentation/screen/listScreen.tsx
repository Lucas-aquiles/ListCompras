import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useList} from '../hooks/useList';
import {ShareInfo} from '../components/shareInformation/shareInfo';
import {globalColors} from '../theme/theme';
import {Div, Input, Collapse} from 'react-native-magnus';
import Buttoncustom from '../components/buttoncustom';
import {useIdiomaStore} from '../../store/useIdiomaStore';
const {width, height} = Dimensions.get('window');
interface IdiomaState {
  lenguage: boolean;
}
export const ListScreen = () => {
  const lenguage = useIdiomaStore((state: IdiomaState) => state.lenguage);

  const {
    products,
    product,
    productAux,
    total,
    modal,
    invisibiliti,
    editPro,
    addProduct,
    editProduct,
    handleInputChange,
    handleInputChangeAux,
    updateProduct,
    deleteProduct,
    calculateTotal,
    setInvisibiliti,
    setModal,
  } = useList();

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: height * 0.02,
        }}
        onPress={() => setInvisibiliti(!invisibiliti)}>
        <Text style={styles.title}>
          {lenguage ? 'Cargar Producto' : 'Load Product'}
        </Text>
        {!invisibiliti && (
          <Icon name="caret-down-outline" size={20} color={'white'} />
        )}
        {invisibiliti && (
          <Icon name="caret-up-outline" size={20} color={'white'} />
        )}
      </Pressable>
      {invisibiliti && (
        <Div>
          <Input
            h={45}
            borderWidth={1}
            rounded="md"
            shadow="2xl"
            placeholder={lenguage ? 'Producto' : 'Product'}
            placeholderTextColor="teal900"
            my={5}
            fontSize={18}
            focusBorderColor="green700"
            value={product.name}
            onChangeText={text => handleInputChange('name', text)}
          />

          <Input
            h={45}
            borderWidth={1}
            rounded="md"
            shadow="2xl"
            placeholder={lenguage ? 'Cantidad' : 'Quantity'}
            placeholderTextColor="teal900"
            my={5}
            fontSize={18}
            focusBorderColor="green700"
            value={product.quantity === 0 ? '' : `${product.quantity}`}
            onChangeText={text => handleInputChange('quantity', text)}
            keyboardType="numeric"
          />

          <Input
            h={45}
            borderWidth={1}
            rounded="md"
            shadow="2xl"
            placeholder={lenguage ? 'Peso (kg/gr)' : 'Weight'}
            placeholderTextColor="teal900"
            my={5}
            fontSize={18}
            focusBorderColor="green700"
            value={product.weight === 0 ? '' : `${product.weight}`}
            onChangeText={text => handleInputChange('weight', text)}
            keyboardType="numeric"
          />

          <Input
            h={45}
            borderWidth={1}
            rounded="md"
            shadow="2xl"
            placeholder={lenguage ? 'Precio' : 'Price'}
            placeholderTextColor="teal900"
            my={5}
            fontSize={18}
            focusBorderColor="green700"
            value={product.price === 0 ? '' : `${product.price}`}
            onChangeText={text => handleInputChange('price', text)}
            keyboardType="numeric"
          />

          <Buttoncustom nameIcon={'add-outline'} onPress={addProduct} />
        </Div>
      )}
      {products.length !== 0 && (
        <Text style={[styles.title, {marginTop: width * 0.05}]}>
          {lenguage ? 'Productos cargados :' : 'Loaded products :'}
        </Text>
      )}
      {/* ---------------------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------------------- */}
      {modal && (
        <View
          style={{
            backgroundColor: 'white',
            width: width * 0.9,
            height: 'auto',
            borderRadius: 20,
          }}>
          <Text
            style={{marginLeft: width * 0.05, marginVertical: height * 0.01}}>
            {lenguage
              ? `Producto: ${editPro.name.toUpperCase()}`
              : `Product: ${editPro.name.toUpperCase()}`}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TextInput
              style={styles.input1}
              placeholder={lenguage ? 'Cantidad' : 'Quantity'}
              placeholderTextColor="white"
              keyboardType="numeric"
              value={productAux.quantity === 0 ? '' : `${productAux.quantity}`}
              onChangeText={text => handleInputChangeAux('quantity', text)}
            />
            <TextInput
              style={styles.input1}
              placeholder={lenguage ? 'Peso' : 'Weight'}
              placeholderTextColor="white"
              keyboardType="numeric"
              value={productAux.weight === 0 ? '' : `${productAux.weight}`}
              onChangeText={text => handleInputChangeAux('weight', text)}
            />
            <TextInput
              style={styles.input1}
              placeholder={lenguage ? 'Precio' : 'Price'}
              placeholderTextColor="white"
              keyboardType="numeric"
              value={productAux.price === 0 ? '' : `${productAux.price}`}
              onChangeText={text => handleInputChangeAux('price', text)}
            />
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginHorizontal: 'auto',
              width: width * 0.3,
              justifyContent: 'space-between',
              marginVertical: height * 0.01,
            }}>
            <Pressable
              onPress={() => {
                updateProduct(editPro.index);
              }}>
              <Icon
                name="checkmark-sharp"
                size={width * 0.09}
                color={'#66e466'}
              />
            </Pressable>

            <Pressable
              onPress={() => {
                deleteProduct(editPro.index);
              }}>
              <Icon name="trash-outline" size={width * 0.09} color={'red'} />
            </Pressable>
          </View>
        </View>
      )}
      {/* Lista de productos */}
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.productItem}>
            <Text
              style={{
                color: 'white',
                width: width * 0.06,
                fontWeight: '600',
              }}>
              {index + 1} -
            </Text>
            <Text
              style={{
                color: 'white',
                width: width * 0.22,
                fontSize: width * 0.035,
                fontWeight: '600',
                marginVertical: 'auto',
              }}>
              {item.name.toUpperCase()}
            </Text>
            <Text
              style={{
                width: width * 0.11,
                color: 'white',
                fontWeight: '600',
              }}>
              {item.quantity} .u
            </Text>
            <Text
              style={{
                color: 'white',
                width: width * 0.16,
                fontWeight: '600',
              }}>
              {item.weight}kg/gr
            </Text>
            <Text
              style={{
                color: 'white',
                width: width * 0.15,
                fontWeight: '600',
              }}>
              ${item.price}
            </Text>

            <Pressable
              onPress={() => {
                editProduct(index, item.name);
              }}>
              <Icon name="create-outline" size={19} color={'#0b280b'} />
            </Pressable>
          </View>
        )}
      />
      {products.length !== 0 && (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Buttoncustom nameIcon={'bag-add-outline'} onPress={calculateTotal} />
        </View>
      )}
      <View
        style={{
          backgroundColor: 'white',
          height: height * 0.1,
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 7,
          paddingHorizontal: width * 0.04,
        }}>
        <ShareInfo products={products} total={total} />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 'auto',
          }}>
          <Text style={{fontSize: width * 0.05, alignSelf: 'center'}}>
            Total :
          </Text>
          <Text style={{alignSelf: 'center', fontSize: width * 0.03}}> $ </Text>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={{alignSelf: 'center', fontSize: width * 0.06}}>
            {products.length === 0 ? 0 : total}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.primary,
    padding: 20,
  },
  title: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    borderWidth: 0,
    paddingVertical: width * 0.004,
    paddingHorizontal: width * 0.02,
    marginBottom: height * 0.009,
    borderRadius: 5,
    backgroundColor: globalColors.background,
  },
  input1: {
    borderWidth: 0,
    padding: width * 0.01,
    marginBottom: height * 0.009,
    borderRadius: 20,
    width: width * 0.2,
    backgroundColor: 'gray',
  },

  productItem: {
    flexDirection: 'row',
    padding: width * 0.004,
    borderBottomWidth: 1,
    borderColor: 'white',
    marginBottom: width * 0.004,
    width: width * 0.85,
    justifyContent: 'space-between',
  },

  customButton: {
    borderRadius: 10, // Ajusta el valor según el radio deseado
  },
});

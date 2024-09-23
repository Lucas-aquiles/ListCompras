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

const {width, height} = Dimensions.get('window');

export const ListScreen = () => {
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
        <Text style={styles.title}>Cargar Producto</Text>
        {!invisibiliti && (
          <Icon name="caret-down-outline" size={20} color={'white'} />
        )}
        {invisibiliti && (
          <Icon name="caret-up-outline" size={20} color={'white'} />
        )}
      </Pressable>
      {invisibiliti && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Producto"
            value={product.name}
            onChangeText={text => handleInputChange('name', text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Cantidad"
            value={product.quantity === 0 ? '' : `${product.quantity}`}
            onChangeText={text => handleInputChange('quantity', text)}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            value={product.weight === 0 ? '' : `${product.weight}`}
            onChangeText={text => handleInputChange('weight', text)}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Precio"
            value={product.price === 0 ? '' : `${product.price}`}
            onChangeText={text => handleInputChange('price', text)}
            keyboardType="numeric"
          />

          <Pressable
            onPress={addProduct}
            style={{
              marginHorizontal: 'auto',
            }}>
            <Icon name="add-circle-sharp" size={width * 0.12} color={'white'} />
          </Pressable>
        </View>
      )}
      {products.length !== 0 && (
        <Text style={[styles.title, {marginTop: width * 0.05}]}>
          Productos cargados :
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
            {' '}
            Producto: {editPro.name.toUpperCase()}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TextInput
              style={styles.input1}
              placeholder="Cantidad"
              placeholderTextColor="white"
              keyboardType="numeric"
              value={productAux.quantity === 0 ? '' : `${productAux.quantity}`}
              onChangeText={text => handleInputChangeAux('quantity', text)}
            />
            <TextInput
              style={styles.input1}
              placeholder="Peso"
              placeholderTextColor="white"
              keyboardType="numeric"
              value={productAux.weight === 0 ? '' : `${productAux.weight}`}
              onChangeText={text => handleInputChangeAux('weight', text)}
            />
            <TextInput
              style={styles.input1}
              placeholder="Precio"
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
              {item.weight}kg
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
          <Pressable
            style={({pressed}) => ({
              backgroundColor: pressed ? '#887f7f' : 'white', // Cambia de color si está presionado
              width: width * 0.15,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: width * 0.05,
            })}
            onPress={calculateTotal}>
            <Icon
              name="bag-add-outline"
              size={width * 0.07}
              color={globalColors.secondary}
            />
          </Pressable>
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
          borderRadius: 20,
          paddingHorizontal: width * 0.04,
        }}>
        <ShareInfo total={total} />

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
          <Text style={{alignSelf: 'center', fontSize: width * 0.09}}>
            {total}
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
    borderRadius: 20,
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

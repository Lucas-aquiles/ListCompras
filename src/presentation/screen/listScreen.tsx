import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Pressable,
  Dimensions,
  Button,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {globalColors} from '../theme/theme';

// Definir el tipo de producto
interface Product {
  name: string;
  quantity: number;
  weight: number;
  price: number;
}

const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

export const ListScreen = () => {
  const [product, setProduct] = useState<Product>({
    name: '',
    quantity: 0,
    weight: 0,
    price: 0,
  });

  const [productAux, setProductAux] = useState<Product>({
    name: '',
    quantity: 0,
    weight: 0,
    price: 0,
  });

  const [products, setProducts] = useState<Product[]>([]);
  console.log('aaaaa', products);
  const [modal, setModal] = useState(false);
  const [invisibiliti, setInvisibiliti] = useState(false);

  const [editPro, setEditPro] = useState({index: 0, name: ''});

  console.log(products.length);
  const addProduct = () => {
    const {name, quantity, weight, price} = product;
    if (name && quantity >= 0 && weight >= 0 && price >= 0) {
      setProducts([...products, product]);
      setProduct({name: '', quantity: 0, weight: 0, price: 0});
    }
  };

  const editProduct = (index: number, newName: string): void => {
    setModal(!modal);
    setEditPro({index, name: newName}); // Pasa un objeto con las propiedades 'index' y 'name'
    handleInputChangeAux('name', newName);
    // Your existing editProduct logic here
  };

  const handleInputChange = (key: keyof Product, value: string) => {
    if (key === 'name') {
      setProduct({...product, [key]: value}); // Si es el nombre, guardar como string
    } else {
      const numericValue = Number(value);
      if (!isNaN(numericValue)) {
        setProduct({...product, [key]: numericValue}); // Para los otros campos, guardarlo como número
      }
    }
  };

  const handleInputChangeAux = (key: keyof Product, value: string) => {
    if (key === 'name') {
      setProductAux({...productAux, [key]: value}); // Si es el nombre, guardar como string
    } else {
      const numericValue = Number(value);
      if (!isNaN(numericValue)) {
        setProductAux({...productAux, [key]: numericValue}); // Para los otros campos, guardarlo como número
      }
    }
  };

  const ActualizationProduct = (index: number) => {
    const nuevoObjeto = {};
    productAux;
    console.log(productAux, index);
    let articulo = products[index];

    const objeto3 = {...articulo};

    if (productAux.price !== 0) {
      objeto3.price = productAux.price;
    }
    if (productAux.quantity !== 0) {
      objeto3.quantity = productAux.quantity;
    }
    if (productAux.weight !== 0) {
      objeto3.weight = productAux.weight;
    }

    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts]; // Create a copy
      updatedProducts[index] = objeto3;
      return updatedProducts;
    });

    setProductAux({
      name: '',
      quantity: 0,
      weight: 0,
      price: 0,
    });
    setEditPro({index: 0, name: ''});
    setModal(false);
  };

  const DeleteProduct = (index: number) => {
    const newArray = products.filter((_, i) => i !== index);
    setProducts(newArray);
    setModal(false);
  };

  const resultado = 10;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `El resultado de la suma es: ${resultado}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Compartido con alguna actividad específica
          console.log('Compartido con', result.activityType);
        } else {
          // Compartido directamente
          console.log('Compartido');
        }
      } else if (result.action === Share.dismissedAction) {
        // El diálogo de compartir fue cerrado
        console.log('Compartir cancelado');
      }
    } catch (error) {
      console.log('Error al compartir:');
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 25,
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
        <Text style={[styles.title, {marginTop: 30}]}>
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
          <Text style={{marginLeft: 20, marginVertical: 10}}>
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
              width: width * 0.2,
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Pressable
              onPress={() => {
                ActualizationProduct(editPro.index);
              }}>
              <Icon name="checkmark-sharp" size={30} color={'#66e466'} />
            </Pressable>

            <Pressable
              onPress={() => {
                DeleteProduct(editPro.index);
              }}>
              <Icon name="trash-outline" size={30} color={'red'} />
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
                width: width * 0.07,
                fontWeight: '600',
              }}>
              {index + 1} -
            </Text>
            <Text
              style={{
                color: 'white',
                width: width * 0.24,
                fontWeight: '600',
              }}>
              {item.name.toUpperCase()}
            </Text>
            <Text
              style={{
                width: width * 0.175,
                color: 'white',
                fontWeight: '600',
              }}>
              {item.quantity} .u
            </Text>
            <Text
              style={{
                color: 'white',
                width: width * 0.175,
                fontWeight: '600',
              }}>
              {item.weight}kg
            </Text>
            <Text
              style={{
                color: 'white',
                width: width * 0.175,
                fontWeight: '600',
              }}>
              ${item.price}
            </Text>

            <Pressable
              onPress={() => {
                editProduct(index, item.name);
              }}>
              <Icon name="create-outline" size={20} color={'#0b280b'} />
            </Pressable>
          </View>
        )}
      />
      <Button onPress={onShare} title="Compartir resultado" />
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    borderWidth: 0,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: globalColors.background,
  },
  input1: {
    borderWidth: 0,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    width: width * 0.2,
    backgroundColor: 'gray',
  },

  productItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    width: width * 0.9,
    justifyContent: 'space-between',
  },

  customButton: {
    borderRadius: 10, // Ajusta el valor según el radio deseado
  },
});

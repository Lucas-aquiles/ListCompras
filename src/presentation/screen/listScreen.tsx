import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';

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
  // Estado para los campos de un producto
  const [product, setProduct] = useState<Product>({
    name: '',
    quantity: 0,
    weight: 0,
    price: 0,
  });

  // Estado para almacenar los productos cargados (arreglo de Product)
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);

  // Función para agregar un producto
  const addProduct = () => {
    const {name, quantity, weight, price} = product;
    if (name && quantity >= 0 && weight >= 0 && price >= 0) {
      // Agregar el producto al array de productos
      setProducts([...products, product]);
      // Limpiar los campos del producto
      setProduct({name: '', quantity: 0, weight: 0, price: 0});
    }
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cargar Producto</Text>

      {/* Input para Nombre */}
      <TextInput
        style={styles.input}
        placeholder="Nombre del producto"
        value={product.name}
        onChangeText={text => handleInputChange('name', text)}
      />

      {/* Input para Cantidad */}
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        value={product.quantity === 0 ? '' : `${product.quantity}`}
        onChangeText={text => handleInputChange('quantity', text)}
        keyboardType="numeric"
      />

      {/* Input para Peso */}
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={product.weight === 0 ? '' : `${product.weight}`}
        onChangeText={text => handleInputChange('weight', text)}
        keyboardType="numeric"
      />

      {/* Input para Precio */}
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={product.price === 0 ? '' : `${product.price}`}
        onChangeText={text => handleInputChange('price', text)}
        keyboardType="numeric"
      />

      {/* Botón para agregar el producto */}

      <Pressable
        onPress={addProduct}
        style={{
          backgroundColor: '#096f26',
          height: 40,
          borderRadius: 20,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: '600',
            marginVertical: 'auto',
            fontSize: 25,
          }}>
          {'Agregar Producto'}
        </Text>
      </Pressable>

      <Text style={[styles.title, {marginTop: 30}]}>Productos cargados: </Text>

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
          </View>
        )}
      />
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
    marginBottom: 10,
    color: '#042804',
  },
  input: {
    borderWidth: 0,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: globalColors.background,
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

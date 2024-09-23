import {useState} from 'react';

interface Product {
  name: string;
  quantity: number;
  weight: number;
  price: number;
}

export const useList = () => {
  const [products, setProducts] = useState<Product[]>([]);
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
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);
  const [invisibiliti, setInvisibiliti] = useState(false);
  const [editPro, setEditPro] = useState({index: 0, name: ''});

  const addProduct = () => {
    if (
      product.name &&
      product.quantity >= 0 &&
      product.weight >= 0 &&
      product.price >= 0
    ) {
      setProducts([...products, product]);
      setProduct({name: '', quantity: 0, weight: 0, price: 0});
    }
  };

  const editProduct = (index: number, newName: string): void => {
    setModal(!modal);
    setEditPro({index, name: newName});
    handleInputChangeAux('name', newName);
  };

  const handleInputChange = (key: keyof Product, value: string) => {
    if (key === 'name') {
      setProduct({...product, [key]: value});
    } else {
      const numericValue = Number(value);
      if (!isNaN(numericValue)) {
        setProduct({...product, [key]: numericValue});
      }
    }
  };

  const handleInputChangeAux = (key: keyof Product, value: string) => {
    if (key === 'name') {
      setProductAux({...productAux, [key]: value});
    } else {
      const numericValue = Number(value);
      if (!isNaN(numericValue)) {
        setProductAux({...productAux, [key]: numericValue});
      }
    }
  };

  const updateProduct = (index: number) => {
    const updatedProduct = {...products[index]};

    if (productAux.price !== 0) updatedProduct.price = productAux.price;
    if (productAux.quantity !== 0)
      updatedProduct.quantity = productAux.quantity;
    if (productAux.weight !== 0) updatedProduct.weight = productAux.weight;

    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index] = updatedProduct;
      return updatedProducts;
    });

    setProductAux({name: '', quantity: 0, weight: 0, price: 0});
    setEditPro({index: 0, name: ''});
    setModal(false);
  };

  const deleteProduct = (index: number) => {
    const newArray = products.filter((_, i) => i !== index);
    setProducts(newArray);
    setModal(false);
  };

  const calculateTotal = () => {
    const totalAmount = products.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0,
    );
    setTotal(totalAmount);
  };

  return {
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
  };
};

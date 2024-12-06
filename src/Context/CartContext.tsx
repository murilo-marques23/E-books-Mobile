import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";
 

  import { ProductModel } from "../Service/product.service";
    import { getItem, setItem } from "../Service/cache.service";
  
  interface ProductCartModel extends ProductModel {
    amount: number;
  }
  
  interface CartContextData {
    cart: ProductCartModel[];
    totalCart: number;
    addProduct: (product: ProductModel) => void;
    removeProduct: (productId: number) => void;
    clearCart: () => void;
    addQuantity: (productId: number) => void;
    subQuantity: (productId: number) => void;
  }
  
  export const CartContext = createContext<CartContextData>(
    {} as CartContextData
  );
  
  export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<ProductCartModel[]>([]);
  
    useEffect(() => {
      (async () => {
        const cachedCart = await getItem("cart", []);
        setCart(cachedCart);
      })();
    }, []);
  
    useEffect(() => {
      setItem("cart", cart);
    }, [cart]);
  
    const addQuantity = (productId: number) => {
      const productIndex = cart.findIndex((item) => item.id === productId);
      if (productIndex === -1) return;
      const newCart = [...cart];
      newCart[productIndex].amount++;
  
      setCart(newCart);
    };
  
    const subQuantity = (productId: number) => {
      const productIndex = cart.findIndex((item) => item.id === productId);
      if (productIndex === -1) return;
      const newCart = [...cart];
      newCart[productIndex].amount--;
      if (newCart[productIndex].amount === 0) {
        newCart.splice(productIndex, 1);
      }
      setCart(newCart);
    };
  
    const addProduct = (product: ProductModel) => {
      const productIndex = cart.findIndex((item) => item.id === product.id);
      if (productIndex === -1) {
        setCart([...cart, { ...product, amount: 1 }]);
        return;
      }
      const newCart = cart.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    };
  
    const removeProduct = (productId: number) => {
      const newCart = cart.filter((item) => item.id !== productId);
      setCart(newCart);
    };
  
    const clearCart = () => {
      setCart([]);
    };
  
    const totalCart = useMemo(() => {
      return cart.reduce((acc, item) => acc + item.preco * item.amount, 0);
    }, [cart]);
  
    return (
      <CartContext.Provider
        value={{
          cart,
          totalCart,
          addProduct,
          removeProduct,
          clearCart,
          addQuantity,
          subQuantity,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => useContext(CartContext);
  
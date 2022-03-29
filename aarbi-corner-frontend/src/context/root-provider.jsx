import { createContext } from "react";
import CartProvider from "./provider/cart/cart.provider";
import DirectoryProvider from "./provider/directory/directory.provider";
import ShopProvider from "./provider/shop/shop.provider";
import UserProvider from "./provider/user/user.provider";

const RootContext = createContext();

const RootProider = ({ children }) => {
  return (
    <RootContext.Provider>
      <ShopProvider>
        <CartProvider>
          <DirectoryProvider>
            <UserProvider>{children}</UserProvider>
          </DirectoryProvider>
        </CartProvider>
      </ShopProvider>
    </RootContext.Provider>
  );
};

export default RootProider;
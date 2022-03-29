import React, { createContext} from "react";

const sections = [
  {
      id: 1,
      title: "Hats",
      imageUrl: "https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg",
      routeName: "shop/hats"
  },
  {
      id: 2,
      title: "Sneakers",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4hca8fbOjQyp-ZhH91z00TZkjHwEMa8fFg&usqp=CAU",
      routeName: "shop/sneakers"
  },
  {
      id: 3,
      title: "Men",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4Rl_De31jdarqdXmbyBGld9fj0S4gZOrSA&usqp=CAU",
      routeName: "shop/men"
  },
  {
      id: 4,
      title: "Women",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXYaihYmw27i0Lw402glriMOhK0rnPZxvDw&usqp=CAU",
      routeName: "shop/women"
  },
  {
      id: 5,
      title: "Jackets",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9wj3yWrcRfXE_D8RT2-9OV5wlcNkWIQQ1Q&usqp=CAU",
      routeName: "shop/jackets"
  }
]
export const DirectoryContext = createContext({
  sections
});

const DirectoryProvider = ({ children }) => {
  return (
    <DirectoryContext.Provider value={{ sections }}>
      {children}
    </DirectoryContext.Provider>
  );
};

export default DirectoryProvider;

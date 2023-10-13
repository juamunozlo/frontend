import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      image: {
        url: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/a503e7eb-0166-4f30-86d6-d276dfcbd3bc/42447522-65cd-428e-ae12-14a2b3754be4_560_420.jpg",
      },
      name: "Cangreburger",
      description:
        " Una hamburguesa servida en un pan suave y dorado, con lechuga crujiente, tomate maduro y una deliciosa salsa secreta de la casa. Acompañada de papas fritas crujientes",
      price: 10000,
      updated_at: "03/10/2023 17:44:00",
      order: 1,
    },
    {
      id: 2,
      image: {
        url: "https://i.pinimg.com/736x/e9/36/be/e936be05c7f39544da01f699ab8d0f1c.jpg",
      },
      name: "Doble Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 20000,
      updated_at: "03/10/2023 17:44:00",
      order: 2,
    },
    {
      id: 3,
      image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuB_OEo9NAFstBlIPcy5HgcwbB3cZRhpfRCt09IqU56NrmldiHOWop0Wsv3bTFEADTvM&usqp=CAU",
      },
      name: "Triple Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 30000,
      updated_at: "03/10/2023 17:44:00",
      order: 3,
    },
    {
      id: 4,
      image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiubgYw3KzZ3OseJOvscBI3AK4EE2sOM4z9jNSC_gu9RhU3ECo4Pzj7DKQ4O-hee7wQcA&usqp=CAU",
      },
      name: "Doble Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 20000,
      updated_at: "03/10/2023 17:44:00",
      order: 2,
    },
    {
      id: 5,
      image: {
        url: "https://static.wikia.nocookie.net/spongebob/images/5/5b/Yours%2C_Mine_and_Mine_014.png",
      },
      name: "Triple Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 30000,
      updated_at: "03/10/2023 17:44:00",
      order: 3,
    },
    {
      id: 6,
      image: {
        url: "https://ih1.redbubble.net/image.549259340.2222/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
      },
      name: "Doble Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 20000,
      updated_at: "03/10/2023 17:44:00",
      order: 2,
    },
    {
      id: 7,
      image: {
        url: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/a503e7eb-0166-4f30-86d6-d276dfcbd3bc/42447522-65cd-428e-ae12-14a2b3754be4_560_420.jpg",
      },
      name: "Triple Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 30000,
      updated_at: "03/10/2023 17:44:00",
      order: 3,
    },
    {
      id: 8,
      image: {
        url: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/a503e7eb-0166-4f30-86d6-d276dfcbd3bc/42447522-65cd-428e-ae12-14a2b3754be4_560_420.jpg",
      },
      name: "Doble Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 20000,
      updated_at: "03/10/2023 17:44:00",
      order: 2,
    },
    {
      id: 9,
      image: {
        url: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/a503e7eb-0166-4f30-86d6-d276dfcbd3bc/42447522-65cd-428e-ae12-14a2b3754be4_560_420.jpg",
      },
      name: "Triple Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 30000,
      updated_at: "03/10/2023 17:44:00",
      order: 3,
    },
    {
      id: 10,
      image: {
        url: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/a503e7eb-0166-4f30-86d6-d276dfcbd3bc/42447522-65cd-428e-ae12-14a2b3754be4_560_420.jpg",
      },
      name: "Doble Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 20000,
      updated_at: "03/10/2023 17:44:00",
      order: 2,
    },
    {
      id: 11,
      image: {
        url: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/a503e7eb-0166-4f30-86d6-d276dfcbd3bc/42447522-65cd-428e-ae12-14a2b3754be4_560_420.jpg",
      },
      name: "Triple Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 30000,
      updated_at: "03/10/2023 17:44:00",
      order: 3,
    },
  ],
  reducers: {
    get: (state, { payload }) => {
      return payload;
    },
    getActiveProducts: (state, { payload }) => {
      //Obtener los productos activos
      return payload;
    },
    store: (state, { payload }) => {
      return [payload, ...state];
    },
    update: (state, { payload }) => {
      return state.map((product) =>
        product.id === payload.id ? payload : product
      );
    },
    changeStatus: (state, { payload }) => {
      //Cambiar estado
      return state.map((product) => {
        product.id === payload
          ? product.deleted_at
            ? { ...product, deleted_at: null }
            : { ...product, deleted_at: "deleted" }
          : product;
      });
    },
  },
});

export const { store, get, update, remove } = productsSlice.actions;

import axios from "axios";
import {
  get,
  store,
  update,
  changeStatus,
  getActiveProducts,
} from "./productsSlice";

export const storeProduct = (product) => {
  return async (dispatch) => {
    axios
      .post("/api/products", product)
      .then((res) => {
        dispatch(store(res.data.data));
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const updateProduct = (product) => {
  return async (dispatch) => {
    axios
      .post(`/api/products/${product.get("id")}`, product, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        dispatch(update(res.data.data));
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
};

export const getProduct = () => {
  return async (dispatch) => {
    axios
      .get("/api/products")
      .then((res) => {
        dispatch(get(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getProductActive = () => {
  return async (dispatch) => {
    axios
      .get("/api/products")
      .then((res) => {
        dispatch(getActiveProducts(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const changeStatusProduct = (idProduct) => {
  return async (dispatch) => {
    dispatch(changeStatus(idProduct));
  };
};

/* 
const createProduct = (product) => {
    axios
      .post("/api/products", product)
      .then((res) => {
        dispatch({ type: TYPES.CREATE_PRODUCT, payload: res.data.data });
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const editProduct = (product) => {
    axios
      .put(`/api/products/${product.get("id")}`, product)
      .then((res) => {
        dispatch({ type: TYPES.EDIT_PRODUCT, payload: res.data.data });
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const changeStatusProduct = (id) => {
    let isChange = window.confirm(
      "Are you sure you want to change the status?"
    );
    if (isChange) {
      axios
        .delete(`/api/products/${id}`)
        .then((res) => {
          dispatch({ type: TYPES.CHANGE_STATUS_PRODUCT, payload: id });
          console.log(res);
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    } else {
      return;
    }
  };


*/

/*import axios from "axios";
import { show } from "../message/messageSlice";*/
import { get, store, update, remove } from "./productsSlice";

export const storeProduct = (question) => {
  return async (dispatch) => {
    /*await axios
      .post("/questions/create", question)
      .then((res) => {
        if (res.status === 200) {
          dispatch(store(question.name));
          dispatch(show(res.data.message));
        } else {
          dispatch(show("Operación erronea."));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(show("Operación erronea."));
      });*/
  };
};
export const updateProduct = (question) => {
  return async (dispatch) => {
    /*await axios
      .put(`/questions/updateQuestion/${question.id}`, question)
      .then((res) => {
        if (res.status === 200) {
          dispatch(update(question));
          dispatch(show(res.data.message));
        } else {
          dispatch(show("Operación erronea."));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(show("Operación erronea."));
      });*/
  };
};

export const getProduct = () => {
  return async (dispatch) => {
    /*await axios
      .get("/questions/getQuestions")
      .then((res) => {
        dispatch(get(res.data.questions));
      })
      .catch((err) => {
        console.log(err);
      });*/
  };
};

export const changeStatusProduct = () => {
  return async (dispatch) => {
    /*await axios
          .get("/questions/getQuestions")
          .then((res) => {
            dispatch(get(res.data.questions));
          })
          .catch((err) => {
            console.log(err);
          });*/
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

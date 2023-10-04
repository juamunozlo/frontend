/*import axios from "axios";
import { show } from "../message/messageSlice";*/
import { add, deleteOne, deleteAll, clean } from "./cartSlice";

export const addProduct = (product) => {
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

    dispatch(add(product));
  };
};
export const deleteOneProduct = (product) => {
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
    console.log("product: ", product);
    dispatch(deleteOne(product));
  };
};

export const deleteAllProducts = (product) => {
  return async (dispatch) => {
    /*await axios
      .get("/questions/getQuestions")
      .then((res) => {
        dispatch(get(res.data.questions));
      })
      .catch((err) => {
        console.log(err);
      });*/

    dispatch(deleteAll(product));
  };
};

export const cleanCart = () => {
  return async (dispatch) => {
    /*await axios
          .get("/questions/getQuestions")
          .then((res) => {
            dispatch(get(res.data.questions));
          })
          .catch((err) => {
            console.log(err);
          });*/
    dispatch(clean());
  };
};

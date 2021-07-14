import { apiTouched } from "../reducers/authAndSign";
import Axios from "./http";
const touchedApiMiddleWare =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiTouched.type) return next(action);
    const {
      url,
      data,
      method,
      onSuccess,
      onError,
      onWaiting,
      params,
      headers,
    } = action.payload;
    if (onWaiting) dispatch({ type: onWaiting, payload: true });
    try {
      const response = await Axios.request({
        url,
        data,
        method,
        onSuccess,
        onError,
        onWaiting,
        params,
        headers,
      });
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
      if (onWaiting) dispatch({ type: onWaiting, payload: false });
    } catch (er) {
      if (onWaiting) dispatch({ type: onWaiting, payload: false });
      if (onError) dispatch({ type: onError, payload: er.response.data.error });
    }
  };
export default touchedApiMiddleWare;

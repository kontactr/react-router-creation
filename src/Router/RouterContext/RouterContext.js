import { createContext } from "react";
import history from "../History/History";

const __RouterContext = createContext({
  history: history
});

export default {
  RouterProvider: __RouterContext.Provider,
  RouterConsumer: __RouterContext.Consumer
};

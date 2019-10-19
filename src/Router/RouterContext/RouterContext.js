import React, { createContext } from "react";

const __RouterContext = createContext({});

console.log(__RouterContext, 5);

export default {
  RouterProvider: __RouterContext.Provider,
  RouterConsumer: __RouterContext.Consumer
};

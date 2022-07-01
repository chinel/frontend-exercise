import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContextProvider } from "./app/context/stopWatch.context";

import { Root } from "./app/root";

const element = document.querySelector("[data-app-root]");

ReactDOM.hydrate(
  <AppContextProvider>
    <Root />
  </AppContextProvider>,
  element
);

if (module.hot) {
  module.hot.accept("./app/root.js", async () => {
    const { Root } = await import("./app/root.js");

    ReactDOM.render(
      <AppContextProvider>
        <Root />
      </AppContextProvider>,
      element
    );
  });
}

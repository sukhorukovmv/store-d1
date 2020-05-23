import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context";
import { Provider } from "react-redux";
import { store } from "./App";
import * as serviceWorker from "./serviceWorker";
import {} from "./components/Redux/Test";
//const WrapperMainComponent = connect(putStateToProps, putActionsToProps)(App);

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const stt = {
  name: "jvm.memory.used",
  description: "The amount of used memory",
  baseUnit: "bytes",
  measurements: [{ statistic: "VALUE", value: 1.81920296e8 }],
  availableTags: [
    { tag: "area", values: ["heap", "nonheap"] },
    {
      tag: "id",
      values: [
        "CodeHeap 'profiled nmethods'",
        "Eden Space",
        "CodeHeap 'non-profiled nmethods'",
        "Survivor Space",
        "Compressed Class Space",
        "Metaspace",
        "CodeHeap 'non-nmethods'",
        "Tenured Gen",
      ],
    },
  ],
};

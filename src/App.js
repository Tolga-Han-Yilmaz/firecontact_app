import "./App.css";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./redux/index";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer />
    </Provider>
  );
}

export default App;

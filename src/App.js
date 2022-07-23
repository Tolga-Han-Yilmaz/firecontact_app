import "./App.css";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./redux/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer />
    </Provider>
  );
}

export default App;

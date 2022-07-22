// import error from "../../assets/404.jpeg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-4">
      <img className="w-75" src="{error}" alt="" />
      <div>
        <button
          style={{ width: "100px" }}
          onClick={() => navigate("/")}
          className="btn btn-outline-warning"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

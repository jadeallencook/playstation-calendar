import LoadingImage from "../../assets/loading.gif";
import "./style.css";

const Loading: React.FC = () => {
  return (
    <div className="Loading">
      <img src={LoadingImage} alt="Loading" />
    </div>
  );
};

export default Loading;

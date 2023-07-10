import { useSelector } from "react-redux";
import DeleteImg from "../../assets/img/delete.svg";
import EditImg from "../../assets/img/edit.svg";

const Transaction = () => {
  const transaction = useSelector((state) => state.transactions);
  
  return (
    <li className="transaction income">
      <p>Earned this month</p>
      <div className="right">
        <p>৳ 100</p>
        <button className="link">
          <img className="icon" src={EditImg} />
        </button>
        <button className="link">
          <img className="icon" src={DeleteImg} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;

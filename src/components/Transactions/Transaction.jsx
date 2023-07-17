import DeleteImg from '../../assets/img/delete.svg'
import EditImg from '../../assets/img/edit.svg'

const Transaction = ({ transaction }) => {
  const { name, type, amount } = transaction || {}

  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link">
          <img className="icon" src={EditImg} />
        </button>
        <button className="link">
          <img className="icon" src={DeleteImg} />
        </button>
      </div>
    </li>
  )
}

export default Transaction

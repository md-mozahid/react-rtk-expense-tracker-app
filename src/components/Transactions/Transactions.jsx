import { useSelector } from 'react-redux'
import Transaction from './Transaction'

const Transactions = () => {
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  )

  // decide what to render
  let content = null

  if (isLoading) content = <p>Loading...</p>

  if (!isLoading && isError)
    content = <p className="error">There was an error occurred</p>

  if (!isLoading && !isError && transactions.length > 0) {
    content = transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ))
  }

  if (!isLoading && !isError && transactions.length === 0) {
    content = <p>No transaction found</p>
  }

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="container_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  )
}

export default Transactions

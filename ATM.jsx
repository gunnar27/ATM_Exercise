const ATMDeposit = ({onChange, isDeposit}) => {
    const choice = ['Deposit', 'Cash Back']
    return (
    
      <label className="label huge">
        <h3>{choice[Number(!isDeposit)]}</h3>
        <input type="number" onChange={onChange}></input>
        <input type="submit" value='Submit'></input>
      </label>
    );
  };
  
  const Account = () => {
    // const [accountState, setAccountState] = React.useState(0);
  let deposit = 0;
  let transactionState = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  let status = `Account Balance $ ${totalState}`;;
  console.log('Account Rendered')
  
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    transactionState = Number(event.target.value);
    console.log(transactionState)
  };
  const handleSubmit = ()=> {
    let newTotal = isDeposit ? totalState + transactionState: totalState - transactionState;
    if(newTotal < 0){
    alert('Cash Back cannot exceed available balance of $' + totalState)
    }else{
    setTotalState(newTotal);
    }
    event.preventDefault();
  };
    return (
      <form onSubmit={handleSubmit}>
        <h2 id='total'>{status}</h2>
        <button onClick = {()=> setIsDeposit(true)}>Deposit</button>
        <button onClick = {()=> setIsDeposit(false)}>Cash Back</button>
        <ATMDeposit onChange={handleChange} isDeposit = {isDeposit}> Deposit</ATMDeposit>
      </form>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById("root"));
  
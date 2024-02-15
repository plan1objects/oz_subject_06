
import './App.css';
import './index.css';
import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';


const App = () => {


  const [expenses, setExpenses] = useState([
    { id : 1, charge : '콜라', amount : 2000 },
    { id : 2, charge : '빵', amount : 1000 },
    { id : 3, charge : '맥북', amount : 100000 }
  ]);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState('');
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({show : false});

  const clearItems = () => {
    setExpenses([]);
  }

  const hadleEdit = id => {
    const expense = expenses.find(item => item.id === id);
    const {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setId(id);
    setEdit(true);
  }

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }

  const handleDelete = (id) => {
    const newExp = expenses.filter(expense => expense.id !== id)
    setExpenses(newExp);
    handleAlert({type: "danger", text : "아이템이 삭제 되었습니다."});
    }
  

  const handleAlert = ({type, text}) => {
    setAlert({show :true , type, text});
    setTimeout(()=>{
      setAlert({show : false});
    },7000);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0){
      if(edit){
        const newExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount} : item;
        });
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({type: "success", text : "아이템이 수정되었습니다."});
      }else{
        const newExpense = { id : crypto.randomUUID(), charge, amount}
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        handleAlert({type: "success", text : "아이템이 생성되었습니다."});
      } 
      setCharge("");
      setAmount(0);     
    }else{
      handleAlert({type: "danger", text : "charge는 빈값일수 없으며, amount는 0보다 커야함."});
    }
  }
    return(
      <main className='main-container'>
        <div className='sub-container'>
          {alert.show? <Alert type={alert.type} text={alert.text} /> : null}
          <h1>장바구니</h1>
          <div style={{width : '100%', backgroundColor: '#fff', padding : '1rem'}}>
              <ExpenseForm edit={edit} charge={charge} handleSubmit={handleSubmit} handleCharge={handleCharge} amount={amount} handleAmount={handleAmount} />
          </div>
          <div style={{width : '100%', backgroundColor: '#fff', padding : '1rem'}}>
              <ExpenseList expenses={expenses} clearItems={clearItems} initialExpense={expenses} handleDelete={handleDelete} hadleEdit={hadleEdit} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop:'1rem'}}>
            <p style={{fontSize : '2rem'}}>
              총합계 :
              <span>
                {expenses.reduce((acc, curr)=>{
                  return (acc += curr.amount);
                },0)}원
              </span>
            </p>
          </div>
        </div>
      </main>
    );
  
  }
  export default App;
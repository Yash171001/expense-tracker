import { Typography, makeStyles, Box, TextField, Button } from '@material-ui/core';
import { useState } from 'react';

const useStyle = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginTop: 30
    }
  },
  button: {
    background: '#445A6F',
    color: '#FFF'
  }
})


const NewTransaction = ({ addTransaction }) => {
  const classes = useStyle();
  const [text, setText] = useState('');
  const [amount, setAmount] = useState();

  const newTransaction = e => {
    const transaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount
    }
    addTransaction(transaction);
  }


  return (
    <Box className={classes.container}>
      <Typography variant="h5"> New Transation</Typography>
      <TextField label="Enter Expense " onChange={(e) => setText(e.target.value)} />
      <TextField label=" Total Amount " onChange={(e) => setAmount(e.target.value)} />
      <Button className={classes.button} onClick={newTransaction} variant="contained">Add Transactions</Button>
    </Box>
  )
}

export default NewTransaction;
import { Typography, makeStyles, Box, Divider,List } from '@material-ui/core';
import Transaction from './Transaction';
const useStyle = makeStyles({
  component: {
      '& > *': {
          marginBottom: 10
      }
  },
  heading: {

  }
})

const Transactions = ({transactions, deleteTransaction})=>{
  const classes = useStyle();
    return (
        <Box className = {classes.component}>
            <Typography variant = "h5"> Transaction History</Typography>
            <Divider/>
            <List>
                {
                  transactions.map(transaction => {
                    return <Transaction key = {transaction.id} deleteTransaction={deleteTransaction}transaction = {transaction}/>
                  })
                }
            </List>
        </Box>
    )
}

export default Transactions;
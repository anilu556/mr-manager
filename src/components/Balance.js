import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Bar} from 'react-chartjs-2'

class Balance extends Component {
  constructor(){
  super()
    this.state ={
      balances: [],
      balance: "0",
      income: "0",
      expense: "0"
    }
  }

  componentDidMount(){
    this.getBalance()
  }

  getBalance = () => {
    fetch(`https://evening-mesa-38422.herokuapp.com/api/v1/properties/${this.props.match.params.propertyId}/balances`, {
      method: 'GET',
      headers: { "Authorization" : `bearer ${localStorage.getItem("token")}`
    }
  })
  .then( response => response.json())
  .then( data =>{
    // console.log(data)
    this.setState({
      balances: data.data,
      balance: data.data[0].balance,
      income: data.data[0].incomes,
      expense: data.data[0].expenses,
    })
  })
  .catch(e => alert(e))

    }


render(){
  const { income, expense, balance } = this.state
      console.log(this.state.balance)
      const data = {
        labels: [ 'Income 12-2018', 'Expense 12-2019', 'Balance 12-2018'],
        datasets: [
          {
            label: ' Incomes Expenses Balance',
            data: [income, expense, balance],
            backgroundColor: [
              'rgba(74, 199, 32, 0.3)',
              'rgba(255, 2, 2, 0.3)',
              'rgba(153, 102, 225, .4)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255, 9, 131, 1)',
              'rgba(255, 2, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      }

      const options = {
        duration: 12000,
        title: {
          display: true,
          text: 'Balance',
          fontSize: 20
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
  console.log(this.state.balances)
  return (
    <React.Fragment>
  <div className="section-balance">
  {this.state.balances.map(balance => {
    return (
  <p> Balance por propiedad </p>
)
  })
}
  <table className="table is-striped is-bordered is-hoverable">
  <thead>
    <tr>
      <th>
        Ingresos
      </th>
      <th>
        Egresos
      </th>
      <th>
        Balance
      </th>
    </tr>
  </thead>
  <tbody>
  {this.state.balances.map(balance => {
    return (
    <tr>
      <td>
      {balance.incomes}
      </td>
      <td>
      {balance.expenses}
      </td>
      <td>
      {balance.balance}
      </td>
    </tr>
  )
    })
}
    </tbody>
  </table>


              <div>
                <Bar data={data} width={100} height={450} options={options} />
              </div>
  </div>
    </React.Fragment>
  )
}
}
export default Balance;

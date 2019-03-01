import React, { Component } from 'react'
import Money from './Money';
import {Link} from 'react-router-dom';
import {Bar} from 'react-chartjs-2'

class Balance extends Component {
  constructor(){
  super()
    this.state ={
      balances: [],
      balance: "0",
      income: "0",
      expense: "0",
      date: ""
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
      date: data.data[0].period
    })
  })
  .catch(e => alert(e))

    }

render(){
  const { income, expense, balance,date } = this.state
      // console.log(this.state.date)
      const data = {
        labels: [ date],
        datasets: [
          {
            label: 'Ingresos',
            data: [income],
            backgroundColor: [
              'rgba(189, 223, 255)',
            ],
            borderWidth: 2
          },
          {
              label: 'Egresos',
              data: [ expense],
              backgroundColor: [
                'rgba(0, 150, 245)',
              ],
              borderWidth: 2
            },
            {
              label: 'Balance',
              data: [balance],
              backgroundColor: [
                'rgba(28, 63, 180)',
              ],
              borderWidth: 2
            },
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

  return (
  <div className="section-balance">
  <p> Balance por propiedad </p>
  <table className="table is-striped is-bordered is-hoverable">
  <thead>
    <tr>
      <th>
        Periodo
      </th>
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
      {balance.period}
      </td>
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

  )
}
}
export default Balance;

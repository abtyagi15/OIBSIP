import React from 'react'

const PizzasList = () => {
  return (
    <div>
      <h1>Pizzas List</h1>
      <table className='w-full'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}

export default PizzasList
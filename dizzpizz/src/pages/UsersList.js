import React from 'react'

const UsersList = () => {   
  return (
    <div>
        <h1>Users List</h1>
        <table>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>User Id</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
  )
}

export default UsersList;
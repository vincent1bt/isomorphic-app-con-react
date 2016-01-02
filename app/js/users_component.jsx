import React from 'react'

class UsersComponent extends React.Component {
  render() {
    return (
      <div>
      {
        this.props.data.map((user) => {
          return <p key={user.id}>{user.name}</p>
        })
      }
      </div>
    )
  }
}

module.exports = UsersComponent
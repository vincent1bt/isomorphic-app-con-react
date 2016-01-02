import React from "react"
import request from "superagent"
import UsersComponent from "./users_component.jsx"

class UserComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: this.props.data ? this.props.data : []
    }
    this.loadUsers = this.loadUsers.bind(this)
  }

  loadUsers() {
    Promise.resolve(request.get("http://jsonplaceholder.typicode.com/users"))
          .then((data) => {
            this.setState({ users: data.body })
          })
  }

  componentDidMount(){
    this.loadUsers()
  }

  render() {
    return (
      <UsersComponent data={this.state.users} />
    )
  }

}

module.exports = UserComponent
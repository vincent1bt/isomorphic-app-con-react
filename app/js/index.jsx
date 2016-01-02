import React from 'react'
import ReactDOM from "react-dom"
import UserComponent from "user_component.jsx"

class MainComponent extends React.Component {
  render() {
    return (
      <UserComponent/>
    )
  }
}

ReactDOM.render(<MainComponent/>, document.querySelector("#main"))
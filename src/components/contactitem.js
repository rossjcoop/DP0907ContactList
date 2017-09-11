import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { selectContact } from '../actions/actions'



class ContactItem extends Component {

  handleClick = (e) => {
    selectContact(this.props.id)
  }





  render() {
    return (
      <li>
        <Link key={this.props.id} to={"/" + this.props.login.username} onClick={this.handleClick}><span><img src={this.props.picture.thumbnail} />{this.props.name.first} {this.props.name.last}</span></Link>
      </li>          
    )
  }
}

export default ContactItem




//1. Wrap the li with a Link to either take me to the single Contact's page, passing id into the params and on that page map data where only that id matches OR maybe I need to do an onClick Action to render data with only that id matched from the params.
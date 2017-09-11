import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactItem from './contactitem'

class ContactList extends Component {
	
  render() {
    return (
    	<div className="container">
    		<ul>
    		{this.props.data.map(contact => (
    			<ContactItem key={contact.id} {...contact} />
    		))}
    		</ul>	
    	</div>     
    )
  }
}


function mapStateToProps(appState) {
	return {
		data: appState.contacts
	}
}


export default connect(mapStateToProps)(ContactList)
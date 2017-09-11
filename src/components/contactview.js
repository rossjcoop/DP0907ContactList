import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectContact } from '../actions/actions'


class ContactView extends Component {
	static defaultProps = {
		name: {
			first: '',
			last: ''
		},
		picture: {
			large: ''
		}
	}


	componentWillMount(){
		selectContact(this.props.match.params.id)
	}

  render() {
  	console.log(this.props)
    return (
     		<div>
     			<img src={this.props.picture.large} />
     			<h1>{this.props.name.first} {this.props.name.last}</h1>
     			<h2>Email: {this.props.email}</h2>
     			<h2>Phone: {this.props.phone}</h2>
     			<h2>Cell: {this.props.cell}</h2>

     		</div>       
    )
  }
}


function mapStateToProps(appState) {
	return {
		...appState.contact		
	}
}


export default connect(mapStateToProps)(ContactView)
      


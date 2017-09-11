import { contactData as data } from '../components/contactdata'


const initialState = {
	contacts: data,
	contact: {}
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'CONTACT_SELECTED':
			return {...state, contact: state.contacts.find(user => user.login.username === action.username)}					
		default:
            return state
    }
}


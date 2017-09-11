import store from "../store"


const CONTACT_SELECTED = 'CONTACT_SELECTED';


export function selectContact(username) {
  store.dispatch({
    type: CONTACT_SELECTED,
    username: username
  });
};
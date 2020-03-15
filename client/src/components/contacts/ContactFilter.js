import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const { filterContacts, clearFilter, filtered } = contactContext;
    const text = useRef('');

    //if the filter state is = to null set the state to be empty
    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
        //eslint-disable-next-line
    }, []);

    const onChange = event => {
        if(text.current.value !== '') {
            filterContacts(event.target.value);
        } else {
            clearFilter();
        }
    }
    return (
        <form>
            <input type="text" ref={text} placeholder="Filter Contacts" onChange={onChange} />
        </form>
    )
}
export default ContactFilter;
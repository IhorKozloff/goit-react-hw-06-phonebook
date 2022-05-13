import React from 'react';
import PropTypes from 'prop-types';
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useSelector } from "react-redux";
import { getContacts, getFilterStatus } from 'Redux/Store';

export const ContactsList = () => {

    const contactsStateData = useSelector(getContacts);
    const filterStateData = useSelector(getFilterStatus);

    const filteredContacts = contactsStateData.filter(item => item.name.includes(filterStateData))
// console.log(contactsData)
    return <ul>
        {
            filteredContacts.map(item => {
                
                   return <ContactsItem key={item.id} 
                    id={item.id} 
                    name={item.name}
                    number={item.number}
                   
                />
              
            })
        }
    </ul>
};

ContactsList.propTypes = {
    data: PropTypes.array, 
    filter: PropTypes.string, 
    // actions: PropTypes.func,
};

// if (item.name.toLowerCase().includes(filter)) {
//     return (
       
//     )
// } else {
//     return ''
// };  
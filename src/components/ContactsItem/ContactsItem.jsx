import React from 'react';
import PropTypes from 'prop-types';
import { ContactActionBtn, ContactItem, ContactNumber  } from 'components/ContactsItem/ContactsItem.styled';



import { useDispatch } from "react-redux";
import { removeContact } from 'Redux/Store';


export const ContactsItem = ({ id, name, number}) => {

    const dispatch = useDispatch();

    const onDeleteContact = (event) => {
        if ( event.target.nodeName !== 'BUTTON') {
            return
        }
        const delitingTargetId = event.currentTarget.id    
            dispatch(removeContact(delitingTargetId))
    };


    return (
        <ContactItem  key={id} id={id} onClick={onDeleteContact}>
            {name}:<ContactNumber>{number}</ContactNumber>
            <ContactActionBtn type="button">
                Delete
            </ContactActionBtn>
        </ContactItem >
    );
};

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    number: PropTypes.string.isRequired, 
    actionOnClick: PropTypes.func.isRequired,
};
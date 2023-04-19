import React from "react";
import {MdDelete} from 'react-icons/md';
import { List, Link, Item, Name, IconUser, Text, Button } from "./ContactList.styled";

import {deleteContact} from 'redux/contacts/operations';
import { useDispatch } from "react-redux";
import { useVisibleContacts } from "hooks";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useVisibleContacts();
    
    return (
        <List>
            {contacts.map(({name, id, number})=>
            <Item key={id}>
                <Text><IconUser/><Name>{name}</Name><Link href={`tel:${number}`}>{number}</Link></Text>
            <Button type="button" title="Delete contact" onClick={()=>dispatch(deleteContact(id))}><MdDelete/></Button>
            </Item>
            )}
        </List>
    );
};

export default ContactList;
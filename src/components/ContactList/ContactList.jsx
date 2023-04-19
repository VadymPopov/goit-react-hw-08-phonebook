import React from "react";
import { List } from "./ContactList.styled";
import ContactItem from "components/ContactItem/ContactItem";

import { useVisibleContacts } from "hooks";

const ContactList = () => {
    const contacts = useVisibleContacts();

    return (
        <List>
            {contacts.map(({name, id, number})=>
            <ContactItem key={id} contact={{name, id, number}}>
            </ContactItem>
            )}
        </List>
    );
};

export default ContactList;
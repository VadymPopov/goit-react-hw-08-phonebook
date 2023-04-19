import React from "react";
import {deleteContact} from 'redux/contacts/operations';
import { useDispatch } from "react-redux";
import { Link, Item, Name, IconUser, Text, Button } from "./ContactItem.styled";
import {ModalTitle, Contact} from '../Modal/Modal.styled'
import {MdDelete, MdEdit} from 'react-icons/md';
import {useState} from "react";
import Modal from "../Modal";
import ModalForm from '../ModalForm'
import { ButtonContainer } from "components/ModalForm/ModalForm.styled";

const ContactItem = ({contact:{name,id,number}}) => {
    const dispatch = useDispatch();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const closeModal=()=> {
      setIsOpenModal(false)
    };
  
    const openModal = () => {
      setIsOpenModal(true)
    };
    
    return (
        <>
            <Item key={id}>
                <Text><IconUser/><Name>{name}</Name><Link href={`tel:${number}`}>{number}</Link></Text>
            <ButtonContainer>
            <Button type="button" title="Edit contact" onClick={openModal}><MdEdit/></Button>
            <Button type="button" title="Delete contact" onClick={()=>dispatch(deleteContact(id))}><MdDelete/></Button>
            </ButtonContainer>
            </Item>

            {isOpenModal && <Modal onClose={closeModal}>
                <ModalTitle>Let's update the contact</ModalTitle>
                <Contact>{name}: {number}</Contact>
            <ModalForm onClose={closeModal} contact={{name,id,number}}/>
            </Modal>}
        </>
)
};

export default ContactItem;
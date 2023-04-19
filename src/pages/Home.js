import { Title, StartLink,Text } from "./Home.styled";
import {MdContactPhone} from 'react-icons/md';

export default function Home() {
    return (
        <>
          <MdContactPhone  size={144} color="rgb(66, 135, 245)"/>
        <Title>
          Phonebook
        </Title>
        <Text>React app that helps you store and manage your contacts</Text>
        <StartLink href="/register">Let's start!</StartLink>
       </>
    );
  }
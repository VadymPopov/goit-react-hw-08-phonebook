import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserName, Wrapper, Welcome, Button } from './UserMenu.styled';
import {MdLogout} from'react-icons/md'

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <UserName><Welcome>Welcome,</Welcome>{user.name}</UserName>
      <Button type="button" onClick={handleLogOut}>Logout <MdLogout/></Button>
    </Wrapper>
  );
};

export default UserMenu;
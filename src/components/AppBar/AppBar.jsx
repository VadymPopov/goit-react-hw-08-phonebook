import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';
import Switch from '../Switch/Switch'

export const AppBar = ({toggleTheme,isDarkTheme}) => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}></Switch>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
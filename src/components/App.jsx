import { useEffect, lazy } from "react";
import { useDispatch} from "react-redux";
import { Layout } from "./Layout/Layout";
import { refreshUser } from "redux/auth/operations";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "hooks";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts')); 

const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();

  useEffect(()=>{
    dispatch(refreshUser())
  },[dispatch]);

    return (
      // !isRefreshing ? (
      //   <b>Refreshing user...</b>
      // ) : (
      !isRefreshing &&
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts"/>}/>
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts"/>}/>
          <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login"/>}/>
        </Route>
      </Routes>
    )
    // )
  };

export default App; 


import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { LayoutContainer, Section } from './Layout.styled';
import { GlobalStyle } from "../GlobalStyles";

export const Layout = () => {
    return (
        <LayoutContainer>
            <AppBar />
            <main>
              <Section>
                <Suspense fallback={null}>
                  <Outlet />
                </Suspense>
              </Section>
            </main>
            
            <Toaster position="top-right" reverseOrder={false} />
            <GlobalStyle/>
        </LayoutContainer>
     
    );
  };
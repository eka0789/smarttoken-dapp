import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Sidebar from './Sidebar';
import Header from './Header';
import PageTransition from 'src/components/Animations/PageTransition';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const MainWrapper = styled(Box)(
  ({ theme }) => `
    flex: 1 1 auto;
    display: flex;
    height: 100%;
    overflow: auto;
    @media (min-width: 1280px) {
      padding-left: 300px;
    }
`
);

const MainContent = styled(Box)(
  ({ theme }) => `
    flex: 1 1 auto;
    overflow: auto;
`
);

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <>
      <Sidebar />
      <MainWrapper>
        <Header />
        <Scrollbars autoHide>
          <MainContent className="main-content-root">
            <PageTransition>
              <Outlet />
            </PageTransition>
          </MainContent>
        </Scrollbars>
      </MainWrapper>
    </>
  );
};

export default React.memo(SidebarLayout);

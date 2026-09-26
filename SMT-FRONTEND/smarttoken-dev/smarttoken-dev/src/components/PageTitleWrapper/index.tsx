import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const PageTitle = styled(Box)(
  ({ theme }) => `
    margin-top: 10px;
    position: relative;
    animation: smt-fade-down 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
`
);

interface PageTitleWrapperProps {
  children?: ReactNode;
}

const PageTitleWrapper = ({ children }: PageTitleWrapperProps) => {
  return (
    <>
      <PageTitle>{children}</PageTitle>
    </>
  );
};

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTitleWrapper;

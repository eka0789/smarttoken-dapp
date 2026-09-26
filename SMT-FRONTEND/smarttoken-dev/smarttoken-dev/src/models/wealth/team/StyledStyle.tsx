import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

// SORT BUTTON
export const SortButton = styled(Button)({
  backgroundColor: '#C4C4C4',
  borderRadius: '20px',
  width: '120px',
  height: '100%',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  '&:hover': {
    backgroundColor: '#212121',
    color: '#C4C4C4'
  }
});

export const GeneralRoot = styled('div')(
  ({ theme }) => `
    @media (max-width: 968px) {
      table {
        font-size: 8px;
        font-weight: 600;
        border-collapse: collapse;
        width: 100%;
        border-radius: 10px;
        border-style: hidden;
      }
      td,
      th {
          border: 3px solid #323232;
          text-align: center;
      }
      th {
          color: #E0A501;
      }
      border-radius: 10px;
      border: 2px solid #323232;
      margin-top: 20px;
      width: 100%;
    }

    @media (min-width: 968px) {
      table {
        font-size: 14px;
        font-weight: 600;
        border-collapse: collapse;
        width: 100%;
        border-radius: 10px;
        border-style: hidden;
      }
      td,
      th {
          border: 3px solid #323232;
          text-align: center;
          padding: 5px;
      }
      th {
          color: #E0A501;
      }
      border-radius: 10px;
      border: 2px solid #323232;
      margin-top: 8px;
      width: 100%;
    }

    color: #EDEDED;
`
);

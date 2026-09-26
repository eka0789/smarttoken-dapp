import { Box, Typography } from '@mui/material';
import CustomCard from 'src/components/Card';
import { styled } from '@mui/material/styles';

const Root = styled('div')(
  ({ theme }) => `
    table {
      border-collapse: collapse;
      width: 100%;
      text-align: center;
      border-radius: 13px;
    }
    table tbody tr:last-child td {
      border-bottom-left-radius: 13px;
      border-bottom-right-radius: 13px;
    }
    table thead tr:first-of-type th {
      border-top-left-radius: 13px;
      border-top-right-radius: 13px;
    }
    thead tr {
      color: #E0A501;
      font-size: 14px;
      font-weight: 600;
    }
    tbody tr {
      font-weight: 600;
      color: #EDEDED;
      font-size: 12px;
    }
    table tr td {
      padding: 1.5px;
    }
    table tr th {
      padding: 7px;
    }
    table tr th, table tr td {
      border-right: 2px solid #000;
    } 
    table tbody {
      background: #5A5A5A;
    }
    table thead {
      background: #5A5A5A;
    }
    
    margin-top: 10px;
    width: 100%;
  `
);

function createData(hash, date, earning) {
  return { hash, date, earning };
}

const rows = [
  createData(
    '3a42c503953909637f78dd8c99b3b85ddde362415585afc11901bdefe8349102',
    '13:30 10/22/2021',
    'You earned 10 SMT'
  ),
  createData(
    '3a42c503953909637f78dd8c99b3b85ddde362415585afc11901bdefe8349102',
    '13:30 10/22/2021',
    'You earned 10 SMT'
  ),
  createData(
    '3a42c503953909637f78dd8c99b3b85ddde362415585afc11901bdefe8349102',
    '13:30 10/22/2021',
    'You earned 10 SMT'
  ),
  createData(
    '3a42c503953909637f78dd8c99b3b85ddde362415585afc11901bdefe8349102',
    '13:30 10/22/2021',
    'You earned 10 SMT'
  ),
  createData(
    '3a42c503953909637f78dd8c99b3b85ddde362415585afc11901bdefe8349102',
    '13:30 10/22/2021',
    'You earned 10 SMT'
  ),
  createData(
    '3a42c503953909637f78dd8c99b3b85ddde362415585afc11901bdefe8349102',
    '13:30 10/22/2021',
    'You earned 10 SMT'
  ),
  createData(
    '3a42c503953909637f78dd8c99b3b85ddde362415585afc11901bdefe8349102',
    '13:30 10/22/2021',
    'You earned 10 SMT'
  )
];

const EarningHistoryTable = () => {
  return (
    <>
      <CustomCard
        width="100%"
        height="auto"
        background="#000000"
        marginTop="10px"
      >
        <Box padding="10px" display="flex" flexDirection="column">
          <Typography
            fontSize="18px"
            fontWeight="700"
            color="#E0A501"
            textAlign="center"
            lineHeight="100%"
          >
            Earning History
          </Typography>
          <Root>
            <table aria-label="custom pagination table" cellSpacing="0">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Hash</th>
                  <th>Date</th>
                  <th>Earning</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>
                      <Typography
                        sx={{
                          wordBreak: 'break-all',
                          padding: '3px 9px',
                          margin: '0 auto',
                          lineHeight: '90%',
                          textAlign: 'left',
                          fontSize: '12px'
                        }}
                      >
                        {row.hash}
                      </Typography>
                    </td>
                    <td>{row.date}</td>
                    <td>{row.earning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Root>
          <Typography
            sx={{
              marginTop: '10px',
              textAlign: 'right',
              fontSize: '14px',
              color: '#E0A501',
              fontWeight: '600'
            }}
          >
            See more &gt;&gt;
          </Typography>
        </Box>
      </CustomCard>
    </>
  );
};

export default EarningHistoryTable;

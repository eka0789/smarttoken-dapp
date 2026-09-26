import { Box, Typography, Hidden } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import RowBox from 'src/components/Box/RowBox';
import CustomCard from 'src/components/Card';
import CustomTitle from 'src/components/Title/BadgeTitle';

const Root = styled('div')(
  ({ theme }) => `
    table {
      border-collapse: collapse;
      width: 100%;
      text-align: center;
    }
    table tbody tr:last-child td:first-of-type {
      border-bottom-left-radius: 13px;
    }
    table tbody tr:last-child td:last-child {
      border-bottom-right-radius: 13px;
    }
    table thead tr:first-of-type th:first-of-type {
      border-top-left-radius: 13px;
    }
    table thead tr:first-of-type th:last-child {
      border-top-right-radius: 13px;
    }
    thead tr {
      border-bottom: 2px solid #000;
      background: #212121;
      color: #E0A501;
      font-size: 14px;
      font-weight: 600;
    }
    tbody tr {
      border-bottom: 1px solid #000;
      background: #212121;
      font-weight: 600;
      color: #EDEDED;
      font-size: 12px;
    }
    table tr td {
      padding: 1px;
    }
    table tr th {
      padding: 7px;
    }
    table tr th, table tr td {
      border-right: 2px solid #000;
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

const useStyles = makeStyles({
  hashTitleStyle: {
    wordBreak: 'break-all',
    width: '380px',
    margin: '0 auto',
    textAlign: 'left',
    padding: '5px',
    '@media (max-width: 968px)': {
      display: 'block',
      width: '150px',
      maxWidth: '98%',
      whiteSpace: 'nowrap',
      overflow: 'hidden!important',
      textOverflow: 'ellipsis'
    }
  },
  firstPageGroup: {
    width: '60% !important',
    '@media (max-width: 968px)': {
      width: '70% !important'
    }
  }
});

const EarningHistoryTable = () => {
  const classes = useStyles();

  return (
    <>
      <CustomCard width="100%" height="auto" background="#000000">
        <Box padding="10px">
          <Typography
            variant="h3"
            fontWeight="700"
            color="#E0A501"
            textAlign="center"
          >
            Earning History
          </Typography>
          <Root>
            <table aria-label="custom pagination table" cellSpacing="0">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Transaction Hash</th>
                  <th>Harvest Date</th>
                  <th>Earning</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>
                      <Typography
                        variant="h4"
                        className={classes.hashTitleStyle}
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
          <Box display="flex" justifyContent="space-between" marginTop="5px">
            <RowBox className={classes.firstPageGroup}>
              <Box display="flex" alignItems="center">
                <Typography variant="h4">Show</Typography>
                <CustomTitle
                  width="32px"
                  height="21px"
                  fontSize="12px"
                  fontWeight="600"
                  color="#323232"
                  background="#E0A501"
                  borderRadius="5px"
                  marginLeft="5px"
                  title="10"
                />
                <CustomTitle
                  width="32px"
                  height="21px"
                  fontSize="12px"
                  fontWeight="600"
                  color="#EDEDED"
                  background="#5A5A5A"
                  borderRadius="5px"
                  marginLeft="5px"
                  title="50"
                />
                <Hidden mdDown>
                  <CustomTitle
                    width="32px"
                    height="21px"
                    fontSize="12px"
                    fontWeight="600"
                    color="#EDEDED"
                    background="#5A5A5A"
                    borderRadius="5px"
                    marginLeft="5px"
                    title="100"
                  />
                </Hidden>
              </Box>
              <Box display="flex" alignItems="center">
                <CustomTitle
                  width="21px"
                  height="21px"
                  fontSize="12px"
                  fontWeight="600"
                  color="#323232"
                  background="#E0A501"
                  borderRadius="20px"
                  marginLeft="5px"
                  title="1"
                />
                <CustomTitle
                  width="21px"
                  height="21px"
                  fontSize="12px"
                  fontWeight="600"
                  color="#EDEDED"
                  background="#5A5A5A"
                  borderRadius="20px"
                  marginLeft="5px"
                  title="2"
                />
                <CustomTitle
                  width="21px"
                  height="21px"
                  fontSize="12px"
                  fontWeight="600"
                  color="#EDEDED"
                  background="#5A5A5A"
                  borderRadius="20px"
                  marginLeft="5px"
                  title="3"
                />
                <CustomTitle
                  width="21px"
                  height="21px"
                  fontSize="12px"
                  fontWeight="600"
                  color="#EDEDED"
                  background="#5A5A5A"
                  borderRadius="20px"
                  marginLeft="5px"
                  title="4"
                />
                <CustomTitle
                  width="21px"
                  height="21px"
                  fontSize="12px"
                  fontWeight="600"
                  color="#EDEDED"
                  background="#5A5A5A"
                  borderRadius="20px"
                  marginLeft="5px"
                  title=">"
                />
              </Box>
            </RowBox>
            <RowBox justifyContent="flex-end" width="auto">
              <Typography variant="h5" color="#E0A501">
                10/
              </Typography>
              <Typography variant="h5" color="#EDEDED">
                50
              </Typography>
            </RowBox>
          </Box>
        </Box>
      </CustomCard>
    </>
  );
};

export default EarningHistoryTable;

import { Box, Typography, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import CustomTitle from 'src/components/Title/BadgeTitle';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
  commonTitle: {
    '@media (max-width: 968px)': {
      fontSize: '8px !important'
    }
  }
});

const Root = styled('div')(
  ({ theme }) => `
    table {
      border-collapse: collapse;
      width: 100%;
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
    table tbody tr td:first-of-type {
      text-align: center;
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
      padding: 4.5px 10px;
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

function createData(quest, username, status, amount) {
  return { quest, username, status, amount };
}

const rows = [
  createData('Loremipsumquest', 'Mark77', 'Claimed', '0.5 SMTC'),
  createData('Loremipsumquest', 'Josh51', 'Pending', '0.5 SMTC'),
  createData('Loremipsumquest', 'Eugen333', 'Rejected', '0.5 SMTC'),
  createData('Loremipsumquest', 'Carlmeyr', 'Pending', '1 SMTC'),
  createData('Loremipsumquest', 'Korrrraaa', 'Pending', '1 SMTC'),
  createData('Loremipsumquest', 'Cottoncandy', 'Claimed', '1 SMTC'),
  createData('Loremipsumquest', 'Carole654', 'Claimed', '1 SMTC'),
  createData('Loremipsumquest', 'Projectbunny', 'Claimed', '1 SMTC'),
  createData('Loremipsumquest', 'KianaKaslana', 'Rejected', '1 SMTC'),
  createData('Loremipsumquest', 'Thisisanickname', 'Rejected', '1 SMTC')
];

const colorGroup = {
  Claimed: {
    background: '#24AE5F',
    color: '#EDEDED'
  },
  Pending: {
    background: '#E8B500',
    color: '#212121'
  },
  Rejected: {
    background: '#F84343',
    color: '#212121'
  }
};

const swordPanelIcon = {
  name: 'swordpanel',
  path: '/static/img/main_achievement/swordPanel.svg',
  desc: 'sword with black background'
};

const Table = () => {
  const classes = useStyles();

  return (
    <>
      <CustomCard
        width="100%"
        height="auto"
        background="#000000"
        marginTop="10px"
      >
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
                  <th>Quest Completed</th>
                  <th>Username</th>
                  <th>Status</th>
                  <th>Amount Claimed</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>
                      <Box display="flex">
                        <Box
                          component="img"
                          src={swordPanelIcon.path}
                          alt={swordPanelIcon.name}
                        />
                        <Box marginLeft="10px" className={classes.commonTitle}>
                          {row.quest}
                        </Box>
                      </Box>
                    </td>
                    <td>
                      <Box textAlign="center" className={classes.commonTitle}>
                        {row.username}
                      </Box>
                    </td>
                    <td>
                      <Box display="flex" justifyContent="center">
                        <Hidden mdDown>
                          <CustomTitle
                            title={row.status}
                            width="100px"
                            fontSize="14px"
                            fontWeight="600"
                            color={colorGroup[row.status].color}
                            background={colorGroup[row.status].background}
                          />
                        </Hidden>
                        <Hidden mdUp>
                          <CustomTitle
                            title={row.status}
                            fontSize="10px"
                            fontWeight="600"
                            color={colorGroup[row.status].color}
                            background={colorGroup[row.status].background}
                          />
                        </Hidden>
                      </Box>
                    </td>
                    <td>
                      <Box textAlign="center" className={classes.commonTitle}>
                        {row.amount}
                      </Box>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Root>
          <Box display="flex" justifyContent="space-between" marginTop="5px">
            <Box display="flex" justifyContent="space-between" width="60%">
              <Box display="flex" alignItems="center">
                <Typography variant="h4">Show</Typography>
                <Box height="100%" marginLeft="5px">
                  <CustomTitle
                    width="32px"
                    height="21px"
                    fontSize="12px"
                    fontWeight="600"
                    color="#323232"
                    background="#E0A501"
                    borderRadius="5px"
                    title="10"
                  />
                </Box>
                <Box height="100%" marginLeft="5px">
                  <CustomTitle
                    width="32px"
                    height="21px"
                    fontSize="12px"
                    fontWeight="600"
                    color="#EDEDED"
                    background="#5A5A5A"
                    borderRadius="5px"
                    title="50"
                  />
                </Box>
                <Box height="100%" marginLeft="5px">
                  <CustomTitle
                    width="32px"
                    height="21px"
                    fontSize="12px"
                    fontWeight="600"
                    color="#EDEDED"
                    background="#5A5A5A"
                    borderRadius="5px"
                    title="100"
                  />
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Box height="100%" marginLeft="5px">
                  <CustomTitle
                    width="21px"
                    height="21px"
                    fontSize="12px"
                    fontWeight="600"
                    color="#323232"
                    background="#E0A501"
                    borderRadius="20px"
                    title="1"
                  />
                </Box>
                <Box height="100%" marginLeft="5px">
                  <CustomTitle
                    width="21px"
                    height="21px"
                    fontSize="12px"
                    fontWeight="600"
                    color="#EDEDED"
                    background="#5A5A5A"
                    borderRadius="20px"
                    title="2"
                  />
                </Box>
                <Box height="100%" marginLeft="5px">
                  <CustomTitle
                    width="21px"
                    height="21px"
                    fontSize="12px"
                    fontWeight="600"
                    color="#EDEDED"
                    background="#5A5A5A"
                    borderRadius="20px"
                    title="3"
                  />
                </Box>
                <Box height="100%" marginLeft="5px">
                  <CustomTitle
                    width="21px"
                    height="21px"
                    fontSize="12px"
                    fontWeight="600"
                    color="#EDEDED"
                    background="#5A5A5A"
                    borderRadius="20px"
                    title="4"
                  />
                </Box>
                <Box height="100%" marginLeft="5px">
                  <CustomTitle
                    width="21px"
                    height="21px"
                    fontSize="12px"
                    fontWeight="600"
                    color="#EDEDED"
                    background="#5A5A5A"
                    borderRadius="20px"
                    title=">"
                  />
                </Box>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography fontSize="12px" fontWeight="600" color="#E0A501">
                10/
              </Typography>
              <Typography fontSize="12px" fontWeight="600" color="#EDEDED">
                50
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomCard>
    </>
  );
};

export default Table;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useWeb3React } from '@web3-react/core';
import useLadder from 'src/hooks/useLadder';
import useSmartArmy from 'src/hooks/useSmartArmy';

const Root = styled('div')(
  ({ theme }) => `
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
    min-width: 768px;

    @media (max-width: 968px) {
      margin-top: 20px;
    }

    color: #EDEDED;
`
);

interface ParentProps {
  curLadderLevel?: number;
}

const Table = ({ curLadderLevel }: ParentProps) => {
  const navigate = useNavigate();
  const { account } = useWeb3React();
  const { fetchUsers } = useLadder();
  const { fetchUserInfo, fetchLicense } = useSmartArmy();
  const [tblRows, setRows] = useState([]);

  let rows = [];
  async function calcUsersByLadderLevel(userAddress, level) {
    if (level > 0) {
      let usersInfo = await fetchUsers(userAddress);
      for (let j = 0; j < usersInfo.length; j++) {
        if (level - 1 === 0) {
          const licenseInfo = await fetchLicense(usersInfo[j]);
          const userInfo = await fetchUserInfo(usersInfo[j]);
          rows.push({
            photoUrl: licenseInfo.tokenUri,
            nickName: userInfo.username,
            totalSale: '1000',
            totalProfit: '500',
            teamNumber: '350',
            lastActive: '2022-03-31',
            account: usersInfo[j]
          });
        } else {
          await calcUsersByLadderLevel(usersInfo[j], level - 1);
        }
      }
    }
    return rows;
  }

  useEffect(() => {
    async function init() {
      if (!account) return;
      let ladderLevel = curLadderLevel + 1;
      if (ladderLevel) {
        let val = await calcUsersByLadderLevel(account, ladderLevel);
        setRows(val);
      }
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, curLadderLevel]);

  return (
    <Grid item xs={12} sx={{ overflowX: 'auto' }}>
      <Root>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Nickname</th>
              <th>Total Sales Made(in BUSD)</th>
              <th>Total Profit from Direct Sales</th>
              <th>Number of Direct Team Member</th>
              <th>Last Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tblRows.map((row, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td
                  style={{
                    width: '90px'
                  }}
                >
                  <Box
                    component="img"
                    alt={row.nickName}
                    src={row.photoUrl}
                    sx={{
                      width: '50px',
                      height: '50px',
                      margin: '0 auto',
                      borderRadius: '50%'
                    }}
                  />
                </td>
                <td>{row.nickName}</td>
                <td
                  style={{
                    width: '160px'
                  }}
                >
                  {row.totalSale}
                </td>
                <td
                  style={{
                    width: '160px'
                  }}
                >
                  {row.totalProfit}
                </td>
                <td
                  style={{
                    width: '145px'
                  }}
                >
                  <Box
                    height="22px"
                    width="60px"
                    margin="0 auto"
                    display="flex"
                    alignItems="center"
                  >
                    <GroupsIcon
                      sx={{
                        width: '22px',
                        height: '22px',
                        color: '#E0A501'
                      }}
                    />
                    <Typography variant="h4" component="span" marginLeft="10px">
                      {row.teamNumber}
                    </Typography>
                  </Box>
                </td>
                <td
                  style={{
                    width: '170px',
                    padding: '0 20px'
                  }}
                >
                  {row.lastActive}
                </td>
                <td>
                  <Box
                    width="24px"
                    height="24px"
                    sx={{
                      border: '1px solid #EDEDED',
                      borderRadius: '50%',
                      background: '#EDEDED',
                      color: '#000',
                      cursor: 'pointer'
                    }}
                    margin="0 auto"
                    onClick={() =>
                      navigate(
                        `/wealth/team/direct/detail/${row.account}/${
                          curLadderLevel + 1
                        }`
                      )
                    }
                  >
                    <FormatListBulletedIcon width="100%" height="100%" />
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Root>
    </Grid>
  );
};

export default Table;

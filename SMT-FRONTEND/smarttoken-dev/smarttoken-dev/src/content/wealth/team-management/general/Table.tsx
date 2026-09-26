import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Box } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { TeamGeneralStyle } from 'src/models/wealth/team/CustomStyle';
import { GeneralRoot } from 'src/models/wealth/team/StyledStyle';
import useLadder from 'src/hooks/useLadder';
import useSmartArmy from 'src/hooks/useSmartArmy';

interface ParentProps {
  curLadderLevel?: number;
  userAccount?: string;
}

const GeneralTable = ({ curLadderLevel, userAccount }: ParentProps) => {
  const classes = TeamGeneralStyle();
  const navigate = useNavigate();
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
            nobility: 'Prince',
            status: 'Active',
            regiDate: 'aaa',
            account: usersInfo[j]
          });
        } else {
          await calcUsersByLadderLevel(usersInfo[j], level - 1);
        }
      }
    } else if (level === 'null') {
      let usersInfo = await fetchUsers(userAddress);
      for (let j = 0; j < usersInfo.length; j++) {
        const licenseInfo = await fetchLicense(usersInfo[j]);
        const userInfo = await fetchUserInfo(usersInfo[j]);
        rows.push({
          photoUrl: licenseInfo.tokenUri,
          nickName: userInfo.username,
          nobility: 'Prince',
          status: 'Active',
          regiDate: 'aaa',
          account: usersInfo[j]
        });
        await calcUsersByLadderLevel(usersInfo[j], level - 1);
      }
    }
    return rows;
  }

  useEffect(() => {
    async function init() {
      if (!userAccount) return;
      let ladderLevel = curLadderLevel + 1;
      if (ladderLevel) {
        let val = await calcUsersByLadderLevel(userAccount, ladderLevel);
        setRows(val);
      } else {
        let val = await calcUsersByLadderLevel(userAccount, 'null');
        setRows(val);
      }
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAccount, curLadderLevel]);

  return (
    <Grid item xs={12}>
      <GeneralRoot>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Nickname</th>
              <th>Nobility</th>
              <th>Status</th>
              <th>Registration date</th>
              {curLadderLevel >= 0 ? <th>Action</th> : null}
            </tr>
          </thead>
          <tbody>
            {tblRows.map((row, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <Box
                    component="img"
                    alt={row.nickName}
                    src={row.photoUrl}
                    className={classes.customAvatarStyle}
                  />
                </td>
                <td>{row.nickName}</td>
                <td>
                  <Box className={classes.customNobilityStyle}>
                    <Box
                      component="img"
                      alt={row.nobility}
                      src={
                        '/static/img/wealth_team/general/' +
                        row.nobility +
                        '.svg'
                      }
                      className={classes.customNobilityImageStyle}
                    />
                    <Typography
                      variant="h4"
                      component="span"
                      className={classes.customNobilityTitleStyle}
                    >
                      {row.nobility}
                    </Typography>
                  </Box>
                </td>
                <td>
                  <Box>{row.status}</Box>
                </td>
                <td>
                  <Box className={classes.regiDateStyle}>{row.regiDate}</Box>
                </td>
                {curLadderLevel >= 0 ? (
                  <td>
                    <Box className={classes.customActionStyle}>
                      <Box
                        className={classes.customActionButtonStyle}
                        onClick={() =>
                          navigate(
                            `/wealth/team/general/member/${row.account}/${
                              curLadderLevel + 1
                            }`
                          )
                        }
                      >
                        <GroupsIcon width="100%" height="100%" />
                      </Box>
                      <Box
                        className={classes.customActionButtonStyle}
                        onClick={() =>
                          navigate(
                            `/wealth/team/general/detail/${row.account}/${
                              curLadderLevel + 1
                            }`
                          )
                        }
                      >
                        <VisibilityIcon width="100%" height="100%" />
                      </Box>
                    </Box>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </GeneralRoot>
    </Grid>
  );
};

export default GeneralTable;

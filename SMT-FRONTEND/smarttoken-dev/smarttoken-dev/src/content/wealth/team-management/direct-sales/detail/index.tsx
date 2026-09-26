import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  Grid,
  Box,
  Popover,
  Button,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DetailTable from './Table';
import Hero from '../../Hero';
import InfoHeader from './InfoHeader';
import StatisticHeader from './StatisticHeader';
import ColumnBox from 'src/components/Box/ColumnBox';
import { DirectDetailStyle } from 'src/models/wealth/team/CustomStyle';
import useSmartArmy from 'src/hooks/useSmartArmy';
import { getRealValue } from 'src/utils/formatBalance';

// SORT BUTTON
const SortButton = styled(Button)({
  backgroundColor: '#C4C4C4',
  borderRadius: '20px',
  width: '120px',
  height: '32px',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  '&:hover': {
    backgroundColor: '#212121',
    color: '#C4C4C4'
  }
});

// SORT CONDITION LIST
const sortBy = [
  'by Date of Sales (Oldest)',
  'by Date of Sales (Newest)',
  'by Lowest Sales',
  'by Most Sales Amount',
  'by Least Sales Amount',
  'by Most Profit from Sales',
  'by Least Profit from Sales'
];

const Detail = () => {
  const classes = DirectDetailStyle();
  const { fetchUserInfo, fetchLicense, fetchLicenseType } = useSmartArmy();
  const ref = useRef<any>(null);

  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  // SORT FUNCTION
  const [selectedSort, setSort] = useState<string>('Sort by');
  const onHandleSelected = (sortTitle: string): void => {
    setSort(sortTitle);
    handleClose();
  };

  const [userInfo, setUserInfo] = useState({
    userName: '',
    ladderLevel: '',
    teamAmount: '',
    curLevelDepth: ''
  });

  const userAccount = window.location.pathname.split('/')[5];
  const selectLadderlevel = window.location.pathname.split('/')[6];
  useEffect(() => {
    async function init() {
      let licenseInfo = await fetchLicense(userAccount);
      let licenseTypeOf = await fetchLicenseType(licenseInfo.level);
      let userInfo = await fetchUserInfo(userAccount);

      setUserInfo({
        ...userInfo,
        userName: userInfo.username,
        ladderLevel: getRealValue(licenseTypeOf.ladderLevel, 18)
      });
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Wealth | Team - Direct Sales</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {/* LEVEL GROUP */}
          <Grid item xs={12}>
            <Box className={classes.customLevelStyle}>
              <Grid item xs={12} md={4}>
                <InfoHeader
                  userName={userInfo.userName}
                  ladderLevel={selectLadderlevel}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <StatisticHeader />
              </Grid>
            </Box>
            {/* SORT BY BUTTON */}
            <Box className={classes.sortButtonBoxStyle}>
              <SortButton ref={ref} onClick={handleOpen}>
                {selectedSort}
              </SortButton>
              <Popover
                anchorEl={ref.current}
                onClose={handleClose}
                open={isOpen}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
              >
                <ColumnBox
                  padding="7px 20px"
                  width="227px"
                  height="225px"
                  background="#C4C4C4"
                  alignItems="flex-start"
                >
                  {sortBy.map((con, idx) => (
                    <Typography
                      key={idx}
                      variant="h3"
                      component="div"
                      className={classes.sortByStyle}
                      onClick={() => onHandleSelected(con)}
                    >
                      {con}
                    </Typography>
                  ))}
                </ColumnBox>
              </Popover>
            </Box>
          </Grid>

          {/* TABLE */}
          <Grid item xs={12}>
            <DetailTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Detail;

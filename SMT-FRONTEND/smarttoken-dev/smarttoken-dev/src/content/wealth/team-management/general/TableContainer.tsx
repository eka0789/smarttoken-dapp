import React, { useRef, useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Box,
  Popover,
  FormControl,
  OutlinedInput
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TeamGeneralStyle } from 'src/models/wealth/team/CustomStyle';
import { SortButton } from 'src/models/wealth/team/StyledStyle';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import Table from './Table';
import { useWeb3React } from '@web3-react/core';

interface ParentProps {
  curLadderLevel?: number;
}

const sortBy = ['by Name', 'by Status', 'by Registration date', 'by Nobility'];

const TableContainer = ({ curLadderLevel }: ParentProps) => {
  const classes = TeamGeneralStyle();
  const ref = useRef<any>(null);
  const { account } = useWeb3React();

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

  // SEARCH FUNCTION
  const [searchVlaues, setValues] = useState<string>('');
  const handleChange = (prop) => (event) => {
    setValues(event.target.value);
  };

  const [curLevel, setCurLevel] = useState(0);

  useEffect(() => {
    setCurLevel(curLadderLevel);
  }, [curLadderLevel]);

  return (
    <>
      {/* CONTROL Part */}
      <Grid item xs={12}>
        <RowBox marginTop="16px" height="32px">
          {/* SORT BY BUTTON */}
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
              width="220px"
              height="128px"
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

          {/* SEARCH FUNCTION */}
          <FormControl variant="outlined" className={classes.searchCustomStyle}>
            <OutlinedInput
              id="outlined-adornment-weight"
              value={searchVlaues}
              onChange={handleChange('weight')}
              placeholder="Search..."
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight'
              }}
              sx={{
                padding: '5px 38px 7px 20px',
                height: '100%',
                borderRadius: '20px',
                background: '#C4C4C4',
                color: '#5A5A5A',
                fontSize: '14px',
                fontWeight: '600'
              }}
            />
            <SearchIcon
              sx={{
                margin: '0 auto',
                position: 'absolute',
                right: '20px',
                color: '#212121',
                width: '18px',
                height: '18px'
              }}
            />
          </FormControl>
        </RowBox>
      </Grid>
      {/* TITLE Part */}
      <Grid item xs={12} md={6} className={classes.titleGroupGridStyle}>
        <Box className={classes.titleGroupBoxStyle}>
          <Typography variant="h4" width="95px" color="#FFFFFF">
            Active: 0000
          </Typography>
          <Typography variant="h4" width="99px" color="#8F8F8F">
            Passive: 0000
          </Typography>
          <Typography variant="h4" width="84px" color="#695400">
            Dead: 0000
          </Typography>
          <Typography variant="h4" width="132px" color="#7C4AAE">
            Outperform: 0000
          </Typography>
        </Box>
      </Grid>
      {/* Table Part */}
      <Table curLadderLevel={curLevel} userAccount={account} />
    </>
  );
};

export default React.memo(TableContainer);

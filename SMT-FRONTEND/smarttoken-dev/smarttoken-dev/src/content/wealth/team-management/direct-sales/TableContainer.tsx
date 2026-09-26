import { useRef, useState } from 'react';
import {
  Grid,
  Typography,
  Popover,
  FormControl,
  OutlinedInput
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SortButton } from 'src/models/wealth/team/StyledStyle';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import Table from './Table';
import { DirectSaleStyle } from 'src/models/wealth/team/CustomStyle';

interface ParentProps {
  curLadderLevel?: number;
}

// SORT CONDITION LIST
const sortBy = [
  'by Name',
  'by Highest Sales',
  'by Lowest Sales',
  'by Most Team Member',
  'by Least Team Member',
  'by Most Active',
  'by Least Active',
  'by Most Profit from Sales',
  'by Least Profit from Sales'
];

const TableContainer = ({ curLadderLevel }: ParentProps) => {
  const classes = DirectSaleStyle();
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

  // SEARCH FUNCTION
  const [weight, setValues] = useState<string>('');
  const handleChange = (prop) => (event) => {
    setValues(event.target.value);
  };

  return (
    <>
      {/* CONTROL GROUP */}
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
              width="227px"
              height="288px"
              background="#C4C4C4"
              alignItems="flex-start"
            >
              {sortBy.map((con, idx) => {
                return (
                  <Typography
                    key={idx}
                    variant="h3"
                    component="div"
                    className={classes.sortByStyle}
                    onClick={() => onHandleSelected(con)}
                  >
                    {con}
                  </Typography>
                );
              })}
            </ColumnBox>
          </Popover>

          {/* SEARCH FUNCTION */}
          <FormControl variant="outlined" className={classes.searchCustomStyle}>
            <OutlinedInput
              id="outlined-adornment-weight"
              value={weight}
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
      {/* TABLE */}
      <Table curLadderLevel={curLadderLevel} />
    </>
  );
};

export default TableContainer;

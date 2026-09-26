import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import CustomCard from 'src/components/Card';
import CustomTitle from 'src/components/Title/BadgeTitle';
import { styled } from '@mui/material/styles';

const API_URL = process.env.REACT_APP_API_URL || '/api';
const PAGE_SIZES = [10, 50, 100];

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
      padding: 5px 10px;
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

const swordPanelIcon = {
  name: 'swordpanel',
  path: '/static/img/main_achievement/swordPanel.svg',
  desc: 'sword with black background'
};

const formatDateTime = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString();
};

const Table = () => {
  const { account } = useWeb3React();
  const [rows, setRows] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [error, setError] = useState<string>('');

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  useEffect(() => {
    async function load() {
      if (!account) {
        setRows([]);
        setTotal(0);
        return;
      }
      try {
        const { data } = await axios.get(
          `${API_URL}/quest/history/${account.toLowerCase()}`,
          { params: { page, limit: pageSize } }
        );
        setRows(data?.items ?? []);
        setTotal(data?.total ?? 0);
        setError('');
      } catch (e) {
        setRows([]);
        setTotal(0);
        setError(
          'Quest history is not available yet. Please check back later.'
        );
      }
    }
    load();
  }, [account, page, pageSize]);

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
            fontSize="18px"
            fontWeight="700"
            color="#E0A501"
            textAlign="center"
            lineHeight="100%"
          >
            History
          </Typography>
          <Root>
            <table aria-label="quest history table" cellSpacing="0">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Quest Completed</th>
                  <th>Date</th>
                  <th>Earning</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={row.id ?? idx}>
                    <td>{(page - 1) * pageSize + idx + 1}</td>
                    <td>
                      <Box display="flex">
                        <Box
                          component="img"
                          src={swordPanelIcon.path}
                          alt={swordPanelIcon.name}
                        />
                        <Box marginLeft="10px">{row.quest}</Box>
                      </Box>
                    </td>
                    <td>
                      <Box textAlign="center">{formatDateTime(row.date)}</Box>
                    </td>
                    <td>
                      <Box textAlign="center">{row.amount}</Box>
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
                {PAGE_SIZES.map((size) => (
                  <Box height="100%" marginLeft="5px" key={size}>
                    <CustomTitle
                      width="32px"
                      height="21px"
                      fontSize="12px"
                      fontWeight="600"
                      color={size === pageSize ? '#323232' : '#EDEDED'}
                      background={size === pageSize ? '#E0A501' : '#5A5A5A'}
                      borderRadius="5px"
                      title={String(size)}
                      onClick={() => {
                        setPage(1);
                        setPageSize(size);
                      }}
                    />
                  </Box>
                ))}
              </Box>
              <Box display="flex" alignItems="center">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <Box height="100%" marginLeft="5px" key={p}>
                      <CustomTitle
                        width="21px"
                        height="21px"
                        fontSize="12px"
                        fontWeight="600"
                        color={p === page ? '#323232' : '#EDEDED'}
                        background={p === page ? '#E0A501' : '#5A5A5A'}
                        borderRadius="20px"
                        title={String(p)}
                        onClick={() => setPage(p)}
                      />
                    </Box>
                  )
                )}
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography fontSize="12px" fontWeight="600" color="#E0A501">
                {rows.length}/
              </Typography>
              <Typography fontSize="12px" fontWeight="600" color="#EDEDED">
                {total}
              </Typography>
            </Box>
          </Box>
          {error && (
            <Typography
              fontSize="12px"
              fontWeight="600"
              color="#E0A501"
              textAlign="center"
              marginTop="5px"
            >
              {error}
            </Typography>
          )}
        </Box>
      </CustomCard>
    </>
  );
};

export default Table;

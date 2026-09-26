import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

function createData(tags, message, status) {
  return { tags, message, status };
}

const rows = [
  createData(
    'Rewards',
    'John opened Prince Chest rewards and found 1,000 SMTC',
    'unread'
  ),
  createData(
    'Golden Tree',
    'Golden Tree achieves a new Growth Phase!',
    'unread'
  ),
  createData('SMT', 'SMT entering global crypto market', 'read'),
  createData('SMT Cash', 'SMTC entering global crypto market', 'read'),
  createData('SMT', 'SMT entering global crypto market', 'read')
];

const Root = styled('div')(
  ({ theme }) => `
      table {
        font-size: 14px;
        font-weight: 600;
        border-collapse: collapse;
        width: 100%;
      }
      table tbody tr:first-of-type td:first-of-type {
        border-top-left-radius: 13px;
      }
      table tbody tr:first-of-type td:last-child {
        border-top-right-radius: 13px;
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
      table thead tr:last-child th:first-of-type {
        border-bottom-left-radius: 13px;
      }
      table thead tr:last-child th:last-child {
        border-bottom-right-radius: 13px;
      }
      thead tr {
        background: linear-gradient(180deg, #5A5A5A 0%, #212121 100%);
        height: 48px;
      }
      thead th {
          color: #E0A501;
          font-size: 18px;
      }
      tbody:before {
        line-height: 10px;
        content: ".";
        display: block;
        color: transparent;
        background: transparent;
      } 
      tbody tr {
        border-bottom: 1px solid #000;
        background: #212121;
        font-weight: 500;
        color: #EDEDED;
      }
      td,
      th {
          padding: 10px;
      }
      table tbody tr td:last-child {
        text-align: center;
      }

      margin-top: 40px;
      width: 100%;
`
);

const colorGroup = {
  Personal: '#EDEDED',
  Global: '#76CEFF',
  Announcement: '#C285FF',
  Achievement: '#F84343',
  Rewards: '#EECA41',
  Licenses: '#24AE5F',
  Quest: '#C4C4C4',
  SMT: '#EDEDED',
  SMTC: '#EDEDED',
  'Golden Tree': '#E0A501',
  unread: '#E0A501',
  read: '#EDEDED'
};

const GlobalTable = () => {
  const navigate = useNavigate();

  const onHandleDetailClick = (): void => {
    navigate('/main/messages/detail');
  };

  return (
    <Root>
      <table aria-label="custom pagination table" cellSpacing="0">
        <thead>
          <tr>
            <th>No</th>
            <th>Tags</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} onClick={onHandleDetailClick}>
              <td>{idx + 1}</td>
              <td>
                <Box sx={{ color: colorGroup[row.tags] }}>{row.tags}</Box>
              </td>
              <td>{row.message}</td>
              <td>
                <Box sx={{ color: colorGroup[row.status] }}>{row.status}</Box>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Root>
  );
};

export default GlobalTable;

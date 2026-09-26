import { styled } from '@mui/material/styles';

function createData(dateSales, nickName, salesAmount, profitSales) {
  return { dateSales, salesAmount, nickName, profitSales };
}

const rows = [
  createData('03:30 21/09/2021', 'Jack88', '100,000 BUSD', '100,000 BUSD'),
  createData('03:30 21/09/2021', 'Snowysniper', '100,000 BUSD', '100,000 BUSD'),
  createData('03:30 21/09/2021', 'Nathan998', '100,000 BUSD', '100,000 BUSD'),
  createData('03:30 21/09/2021', 'Fiorra6350', '100,000 BUSD', '100,000 BUSD'),
  createData('03:30 21/09/2021', 'Claudia412', '100,000 BUSD', '100,000 BUSD'),
  createData(
    '03:30 21/09/2021',
    'KianaKaslana',
    '100,000 BUSD',
    '100,000 BUSD'
  ),
  createData(
    '03:30 21/09/2021',
    'Projectbunny',
    '100,000 BUSD',
    '100,000 BUSD'
  ),
  createData('03:30 21/09/2021', 'Scylla85', '100,000 BUSD', '100,000 BUSD')
];

const Root = styled('div')(
  ({ theme }) => `
    @media (max-width: 968px) {
      table {
        font-size: 12px;
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
      }
      th {
          color: #E0A501;
      }
  
      border-radius: 10px;
      border: 2px solid #323232;
      margin-top: 20px;
      width: 100%;
    }

    @media (min-width: 968px) {
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
      td {
          padding: 20px;
      }
      border-radius: 10px;
      border: 2px solid #323232;
      margin-top: 20px;
      width: 100%;
    }

    color: #EDEDED;
`
);

const DetailTable = () => {
  return (
    <Root>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>No</th>
            <th>Date of Sales</th>
            <th>Sales Amount</th>
            <th>Buyer’s Nickname</th>
            <th>Profit from Sales</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{row.dateSales}</td>
              <td>{row.salesAmount}</td>
              <td>{row.nickName}</td>
              <td>{row.profitSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Root>
  );
};

export default DetailTable;

import './datatable.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../Datatablesource';
import { userRows } from '../../Datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Editicon from '../EditIcon/EditIcon';

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      feild: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="veiwButton">
              <Editicon/>
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          hideFooter
          checkboxSelection
          sx={{ borderRight: 'none', borderBottom: 'none' }}
        />
      </div>
    </div>
  );
};

export default Datatable;

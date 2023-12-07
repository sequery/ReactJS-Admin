import './userList.scss'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';

function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={params.row.avatar} alt="" className="userListImg" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 210 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <button className="userListEdit">Edit</button>
                        <DeleteOutline className="userListDelete" />
                    </>
                )
            }
        },

      ];
      
    return (
        <div className="userList">
            <DataGrid rows={userRows} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}

export default UserList

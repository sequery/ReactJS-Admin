import './userList.scss'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';

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
      
      const rows = [
          {
              id: 1, username: 'Jon Snow',
              avatar: 'https://images.pexels.com/photos/2888371/pexels-photo-2888371.jpeg?cs=srgb&dl=pexels-fl%C3%A1vio-santos-2888371.jpg&fm=jpg',
              email: 'jon@gmail.com',
              status: 'active',
              transaction: '$120.00'
          },
          {
            id: 2, username: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/2888371/pexels-photo-2888371.jpeg?cs=srgb&dl=pexels-fl%C3%A1vio-santos-2888371.jpg&fm=jpg',
            email: 'jon@gmail.com',
            status: 'active',
            transaction: '$120.00'
          },
          {
            id: 3, username: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/2888371/pexels-photo-2888371.jpeg?cs=srgb&dl=pexels-fl%C3%A1vio-santos-2888371.jpg&fm=jpg',
            email: 'jon@gmail.com',
            status: 'active',
            transaction: '$120.00'
          },
          {
            id: 4, username: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/2888371/pexels-photo-2888371.jpeg?cs=srgb&dl=pexels-fl%C3%A1vio-santos-2888371.jpg&fm=jpg',
            email: 'jon@gmail.com',
            status: 'active',
            transaction: '$120.00'
          },
          {
            id: 5, username: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/2888371/pexels-photo-2888371.jpeg?cs=srgb&dl=pexels-fl%C3%A1vio-santos-2888371.jpg&fm=jpg',
            email: 'jon@gmail.com',
            status: 'active',
            transaction: '$120.00'
          },
          {
            id: 6, username: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/2888371/pexels-photo-2888371.jpeg?cs=srgb&dl=pexels-fl%C3%A1vio-santos-2888371.jpg&fm=jpg',
            email: 'jon@gmail.com',
            status: 'active',
            transaction: '$120.00'
        },
      ];
    return (
        <div className="userList">
            <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}

export default UserList

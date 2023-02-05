export const userColumns = [
    {
      field: "email",
      headerName: "Email",
      width: 330,
      renderCell: (params) => {
        return (
          <div >
            {params.row.email}
          </div>
        );
      },
    },
    {
      field: "firstname",
      headerName: "First Name",
      width: 330,
    },
    {
      field: "lastname",
      headerName: "Last Name",
      width: 330,
    },
    {
      field: "status",
      headerName: "Status",
      width: 260,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "order",
      headerName: "Order",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={`cellWithorder ${params.row.orderstatus}`}>
            {params.row.orderstatus}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      firstname:"john",
      lastname:"doe",
      status: "Active",
      orderstatus:"Completed",
      email: "1snow@gmail.com",
    },
    {
      id: 2,
      username: "Jamie Lannister",
      firstname:"john",
      lastname:"doe",
      email: "2snow@gmail.com",
      orderstatus:"Pending",
      status: "Inactive",
    },
    {
      id: 3,
      username: "Lannister",
      firstname:"john",
      lastname:"doe",
      email: "3snow@gmail.com",
      orderstatus:"Completed",
      status: "Active",
    },
    {
      id: 4,
      username: "Stark",
      firstname:"john",
      lastname:"doe",
      email: "4snow@gmail.com",
      orderstatus:"Pending",
      status: "Inactive",
    },
  ];
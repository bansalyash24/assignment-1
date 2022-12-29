import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataTable({ data }) {

  return (
    <div style={{ padding:"auto",overflowX:"scroll"}}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        {
          data.length > 0 && data.map((cur, id) => {
            return (
                <tbody key={id}>
                  <tr>
                    <td>{id+1}</td>
                    <td>{cur.fname}</td>
                    <td>{cur.lname}</td>
                    <td>{cur.username}</td>
                    <td>{cur.email}</td>
                  </tr>
                </tbody>
            )
          })
        }


      </Table>
    </div>
  );
}

export default DataTable;
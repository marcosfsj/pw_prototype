import React, { Component } from 'react';
import MaterialTable from 'material-table';

class BaseDataTable extends Component {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'id' },
      { title: 'Name', field: 'name' },
      { title: 'User Name', field: 'username' },
      { title: 'e-Mail', field: 'email' },
      { title: 'Website', field: 'website' }
    ],
    data: [
      { id: '1', name: 'Mehmet', username: 'Baran', email: 'blabla@gmail.com', website: 'blabla.com' },
      { id: '2', name: 'Mehmet', username: 'Baran', email: 'blabla@gmail.com', website: 'blabla.com' },
      { id: '3', name: 'Mehmet', username: 'Baran', email: 'blabla@gmail.com', website: 'blabla.com' },
      { id: '4', name: 'Mehmet', username: 'Baran', email: 'blabla@gmail.com', website: 'blabla.com' },
      { id: '5', name: 'Mehmet', username: 'Baran', email: 'blabla@gmail.com', website: 'blabla.com' },
      { id: '6', name: 'Mehmet', username: 'Baran', email: 'blabla@gmail.com', website: 'blabla.com' },
      { id: '7', name: 'Mehmet', username: 'Baran', email: 'blabla@gmail.com', website: 'blabla.com' }
    ]
  });

  render() {
    return (
      <MaterialTable
        title="Editable Example"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
              }, 600);
            })
        }}
      />
    );
  }
}

export default BaseDataTable;

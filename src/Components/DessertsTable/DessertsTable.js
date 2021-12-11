import {connect, useDispatch} from 'react-redux';
import {Table, Button} from 'antd';
import {actionTypes} from '../../store/actionTypes';
import './DessertsTable.css';

const DessertsTable = ({desserts}) => {
  const dispatch = useDispatch();

  const removeAllDesserts = () => {
    dispatch({type: actionTypes.DELETE_ALL});
  };

  const deleteRow = row => {
    dispatch({type: actionTypes.DELETE, payload: row});
  };

  const columns = [
    {
      title: "Dessert Name",
      dataIndex: "dessertName",
      key: "dessertName",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Remove Dessert",
      key: "removeDessert",
      render: row => (
          <Button type="text" onClick={() => deleteRow(row)}>
            X
          </Button>
      ),
    },
  ];

  return (
    <div className="desserts-table">
      <Table columns={columns} dataSource={desserts}/>
        <Button type="danger" onClick={removeAllDesserts}>
            Remove all desserts
        </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  desserts: state 
});

export default connect(mapStateToProps)(DessertsTable);

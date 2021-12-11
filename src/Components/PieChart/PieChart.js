import {connect} from 'react-redux';
import {Pie} from 'react-chartjs-2';
import {Empty, Divider} from 'antd';
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import {backgroundColor} from './PieChart.constants';

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({desserts}) => {
  const dessertsLabels = desserts.map(dessert => dessert.dessertName);
  const dessertsData = desserts.map(dessert => dessert.amount);
  const pieData = {
    labels: dessertsLabels,
    datasets: [
      {
        label: "Desserts",
        backgroundColor: backgroundColor,
        data: dessertsData,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  }
  
  return (
      <div className="pie-chart">
        <Divider orientation="center">Desserts Statistics</Divider>
        {dessertsLabels.length > 0 ? (
          <div className="pie-chart-Container">
            <Pie data={pieData} width={300} height={300} options={options}/>
          </div>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
  );
};

const mapStateToProps = state => ({
  desserts: state 
});

export default connect(mapStateToProps)(PieChart);

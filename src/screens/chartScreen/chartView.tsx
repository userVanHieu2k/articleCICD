import {Text, View} from 'react-native';
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
  RadarChart,
} from 'react-native-gifted-charts';
import RippleButton from '../../modals/RipperAnimation';

// ...
const data = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];

const chartData = [
  {value: 50, label: 'A'},
  {value: 80, label: 'B'},
  {value: 90, label: 'C'},
  {value: 70, label: 'D'},
];
const ChartScreen = () => {
  return (
    <View>
      <BarChart data={data} width={300} height={200} barWidth={20} />
      <View style={{height: 200, width: 340}}>
      <RippleButton focus={true}>
        <Text>Hieu</Text>
      </RippleButton>
      </View>
    </View>
  );
};

export default ChartScreen;

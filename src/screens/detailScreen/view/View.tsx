import {Text, TouchableOpacity, View} from 'react-native';
import { useViewModal } from '../viewModel/viewModalD';

const DetailScreen = () => {
  const {info, handleInfo} = useViewModal();
  console.log('Current Info:', info);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 28, color: 'red'}}>
        Welcome to the Home Screen
      </Text>
      <Text>Detail Screen</Text>
      <Text>{info.UserName}</Text>
      <Text>{info.UserPhone}</Text>
      <Text>{info.UserEmail}</Text>
      <Text>{info.UserAddress}</Text>
      <TouchableOpacity
        onPress={() =>
          handleInfo({...info, UserName: 'VanHieu', UserEmail: 'hanam'})
        }>
        <Text>Update Info</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

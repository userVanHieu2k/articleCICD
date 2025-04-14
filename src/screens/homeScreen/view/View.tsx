import {Text, TouchableOpacity, View} from 'react-native';
import {useViewModal} from '../viewModel/viewModal';

const HomeScreen = () => {
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
      <Text>Home Screen</Text>
      <Text>{info.UserName}</Text>
      <Text>{info.UserPhone}</Text>
      <TouchableOpacity
        onPress={() =>
          handleInfo({...info, UserName: 'John Doe', UserEmail: 'hanam'})
        }>
        <Text>Update Info</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

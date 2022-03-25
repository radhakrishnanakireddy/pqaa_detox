import React, { useContext } from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import MemberContext from '../../context/MemberContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MemberFields from '../../components/memberComponents/MemberFields';
import {formatDate} from '../../utils/date';
import moment from 'moment';

const ShowMemberScreen = ({ navigation }) => {
  const { data } = useContext(MemberContext);
  console.log('ID in show screen', navigation.getParam('id'));

  const member = data.find((member) => member.id === navigation.getParam('id'));
  console.log(member.startDate);
  return (
    <ScrollView testID="showMemberBackground">
      <SafeAreaView>
        <MemberFields labelText="ID" fieldValue={member.id} fieldTestId="id"/>
        <MemberFields labelText="Name" fieldValue={member.name} fieldTestId="name"/>
        <MemberFields labelText="Surname" fieldValue={member.surname} fieldTestId="surname"/>
        <MemberFields
          labelText="Date of Birth"
          fieldValue={formatDate(member.dateOfBirth)}
          fieldTestId="dateOfBirth"
        />
        <MemberFields labelText="Start Day" fieldValue={member.startDay} fieldTestId="startDay"/>
        <MemberFields labelText="Email" fieldValue={member.email} fieldTestId="email"/>
        <MemberFields
          labelText="Address Line One"
          fieldValue={member.addressLineOne}
          fieldTestId="addressLineOne"
        />
        <MemberFields
          labelText="Address Line Two"
          fieldValue={member.addressLineTwo}
          fieldTestId="addressLineTwo"
        />
        <MemberFields labelText="City" fieldValue={member.city} fieldTestId="city"/>
        <MemberFields labelText="Postcode" fieldValue={member.postcode} fieldTestId="postcode"/>
        <MemberFields labelText="Country" fieldValue={member.country} fieldTestId="country"/>
        <MemberFields
          labelText="Start Date"
          fieldValue={moment(member.startDate.dateString).format('DD-MM-YYYY')}
          fieldTestId="startDate"
        />
        <MemberFields
          labelText="Start Time"
          fieldValue={
            member.startTime ? moment(member.startTime).format('HH:mm') : ''
          }
          fieldTestId="startTime"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

ShowMemberScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');

  return {
    headerTitle: () => <Text testID="showMemberHeader">Member {id}</Text>,
    headerTitleAlign: 'center',
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('EditMember', {id})}>
        <FontAwesome style={styles.editIcon} name="pencil" size={25} testID="editMemberIcon" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  editIcon: {
    paddingRight: 5,
  },
});

export default ShowMemberScreen;
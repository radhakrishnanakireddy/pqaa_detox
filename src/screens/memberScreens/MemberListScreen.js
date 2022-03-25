import React, { useContext, useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MemberContext from '../../context/MemberContext';
import ConfirmModal from '../../components/modalComponents/ConfirmModal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MemberListScreen = ({ navigation }) => {
  const { data, getMembers, deleteMember } = useContext(MemberContext);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getMembers();
    const listener = navigation.addListener('didFocus', () => {
      getMembers();
      setModal(false);
    });
    return () => {
      listener.remove();
    };
  }, []);

  const acceptDeletion = (member) => {
    deleteMember(member);
    setModal(false);
  };

  const removeModal = () => {
    setModal(false);
  };

  const tapDeleteMember = (member) => {
    acceptDeletion(member);
  };

  const renderList = () => (
    <FlatList
      data={data}
      keyExtractor={(member) => `${member.id}`}
      renderItem={({ item, index }) => {
        return (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowMember', { id: item.id })} testID={`member-${index}`}>
              <View style={styles.row}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20 }} testID={`memberFullName-${index}`}>
                    {item.name} {item.surname} -
                  </Text>
                  <Text style={{ fontSize: 20, paddingLeft: 5 }} testID={`memberId-${index}`}>{item.id}</Text>
                </View>
                <TouchableOpacity onPress={() => setModal(true)}>
                  <FontAwesome5 style={{ fontSize: 25 }} name="trash" testID={`memberDelete-${index}`}/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <View>
              <ConfirmModal
                visible={modal}
                onAccept={() => acceptDeletion(item.id)}
                onDecline={() => setModal(false)}
                text={`Are you sure you want to delete ${item.name} ${item.surname}?`}
              />
            </View>
          </View>
        );
      }}
    />
  );

  return (
    <SafeAreaView>
      {data && data.length ? (
        renderList()
      ) : (
        <Text testID="noResultsText">No Members added on the list</Text>
      )}
    </SafeAreaView>
  );
};

MemberListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: () => <Text testID="memberListHeader">Members</Text>,
    headerTitleAlign: 'center',
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('AddMember')}>
        <AntDesign style={{ paddingRight: 15 }} name="pluscircle" size={25} testID="addMemberIcon" accessibilityLabel="addMemberLabel" />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'gray',
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderTopWidth: 2,
  },
  surname: {
    fontSize: 20,
    paddingLeft: 5,
  },
  dash: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default MemberListScreen;
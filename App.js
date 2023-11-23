import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const accountsData = [
  { ID: 1, username: 'superman', password: 'kryptonite123', usertype: 'Hero' },
  { ID: 2, username: 'batman', password: 'batmobile456', usertype: 'Hero' },
  { ID: 3, username: 'wonderwoman', password: 'lasso567', usertype: 'Heroine' },
  { ID: 4, username: 'aquaman', password: 'trident789', usertype: 'Hero' },
  { ID: 5, username: 'flash', password: 'speedforce098', usertype: 'Hero' },
  { ID: 6, username: 'greenlantern', password: 'powerring321', usertype: 'Hero' },
  { ID: 7, username: 'shazam', password: 'magicword234', usertype: 'Hero' },
  { ID: 8, username: 'harleyquinn', password: 'madlove876', usertype: 'Antihero' },
  { ID: 9, username: 'joker', password: 'haha555', usertype: 'Villain' },
  { ID: 10, username: 'catwoman', password: 'meow777', usertype: 'Antihero' },
];



const usersData = [
  { ID: 1, firstname: 'John', lastname: 'Doe', course: 'Computer Science', year: '1', section: 'A' },
  { ID: 2, firstname: 'Jane', lastname: 'Smith', course: 'Criminal Justice', year: '2', section: 'B' },
  { ID: 3, firstname: 'Mike', lastname: 'Johnson', course: 'Computer Science', year: '3', section: 'C' },
  { ID: 4, firstname: 'Emily', lastname: 'Taylor', course: 'Education', year: '4', section: 'D' },
  { ID: 5, firstname: 'Chris', lastname: 'Brown', course: 'Electrical Engineering', year: '2', section: 'A' },
  { ID: 6, firstname: 'Sarah', lastname: 'Walker', course: 'Electronic Engineering', year: '1', section: 'B' },
  { ID: 7, firstname: 'Alex', lastname: 'Harris', course: 'Electrical Engineering', year: '3', section: 'C' },
  { ID: 8, firstname: 'Grace', lastname: 'Miller', course: 'Criminal Justice', year: '4', section: 'D' },
  { ID: 9, firstname: 'Daniel', lastname: 'Brown', course: 'Education', year: '3', section: 'A' },
  { ID: 10, firstname: 'Olivia', lastname: 'Jones', course: 'Computer Science', year: '4', section: 'B' },
];

const studentsData = accountsData
  .filter((account) => account.usertype === 'Hero')
  .map((student) => ({
    ID: student.ID,
    name: usersData.find((user) => user.ID === student.ID)?.firstname || '',
    course: usersData.find((user) => user.ID === student.ID)?.course || '',
  }));

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#FFC0CB' },
    tableContainer: { marginTop: 10, marginBottom: 20 },
    head: { height: 40, backgroundColor: '#00FF00' }, 
    text: { margin: 6, textAlign: 'center', fontFamily: 'Montserrat', color: '#333' }, 
  });
  
  const App = () => {
    const renderTable = (data, headers) => (
      <Table borderStyle={{ borderWidth: 1, borderColor: '#800000' }}>
        <Row data={headers} style={styles.head} textStyle={styles.text} />
        {data.map((rowData, index) => (
          <Row key={index} data={Object.values(rowData)} textStyle={styles.text} />
        ))}
      </Table>
    );
  
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#FFC0CB' }}>Accounts Table</Text>
        <ScrollView style={styles.tableContainer}>
          {renderTable(accountsData, ['ID', 'Username', 'Password', 'User Type'])}
        </ScrollView>
  
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#FFC0CB' }}>Users Table</Text>
        <ScrollView style={styles.tableContainer}>
          {renderTable(usersData, ['ID', 'First Name', 'Last Name', 'Course', 'Year', 'Section'])}
        </ScrollView>
  
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#FFC0CB' }}>Students Table</Text>
        <ScrollView style={styles.tableContainer}>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#FFC0CB' }}>
            <Row data={['ID', 'Name', 'Course']} style={styles.head} textStyle={styles.text} />
            <FlatList
              data={studentsData}
              keyExtractor={(item) => item.ID.toString()}
              renderItem={({ item }) => (
                <Row data={[item.ID, item.name, item.course]} textStyle={styles.text} />
              )}
            />
          </Table>
        </ScrollView>
      </View>
    );
  };
  

export default App;
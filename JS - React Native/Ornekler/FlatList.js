import React, { Component } from 'react';
import {SafeAreaView, ScrollView, View, FlatList, Image, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';

// npm i axios --save
import axios from 'axios';

export default class Accounts extends Component {

    constructor(){
        super()
        this.loadMoreDurdur = false;
    }

    state = {
        loading: true,
        page: 1,
        contacts: [],
        filterContacts: [],
        searchedValue:'',
        doRefresh: false
    }


    accountDatasRenderItem = function( {item, index} ){
        return (
            <TouchableOpacity style={[css.listItem, {backgroundColor: (index%2==0? '#f5f5f5' : '#ffffff') }]}>
                <Image style={css.listImage} source={{uri: item.picture.medium }}/>
                <View style={css.listContent}>
                    <Text style={css.listTitle}>{item.name.first} {item.name.last}</Text>
                    <Text style={css.listInfo}>{item.email}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    accountDatasHeader = function(){
        return(
            <View style={css.searchHeader}>
                <TextInput
                style={css.searchInput}
                placeholder="Buradan Arayın"
                onChangeText={ text => this.accountDatasSearch(text) }
                onFocus={ () => this.loadMoreDurdur = true }
                onBlur={ () => this.loadMoreDurdur = false }
                />
            </View>
        );
    }

    accountDatasFooter = function(){
        if(!this.state.loading){ return null; }
        return(
            <View>
                <ActivityIndicator size='large'></ActivityIndicator>
            </View>
        );
    }

    accountDatasSearch = function(searchText){
        this.setState( {searchedValue:searchText} );
        let filterDatas = this.state.contacts.filter( item => {
            let isim = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()}`;
            return isim.indexOf(searchText.toLowerCase()) > -1;
        } );
        this.setState({
            filterContacts: filterDatas
        });
    }

    getUsers = async function(){
        let {data} = await axios.get('https://randomuser.me/api/?results=15&page='+this.state.page);

        let totalDatas = [...this.state.contacts, ...data.results];
        if( this.state.page < 2 ){
            totalDatas = data.results;
        }
        console.log(totalDatas);
        this.setState({
            contacts: totalDatas,
            filterContacts: totalDatas,
            loading:false,
            doRefresh: false
        });
    }

    loadNewDatas = () => {
        if(!this.loadMoreDurdur && this.state.searchedValue.length < 1){
            this.setState( {
                page: this.state.page + 1,
                loading: true
            }, function(){
                this.getUsers();
            } );
        }
    }

    dataRefresh = ()=>{
        this.setState({doRefresh:true, page:1}, () => {
            this.getUsers();
        });
    }


    componentDidMount(){
        this.getUsers();
    }

    render() {
        return (
            <SafeAreaView style={css.container}>
                <View style={css.listView}>
                    <FlatList
                        ListHeaderComponent={this.accountDatasHeader()}
                        ListFooterComponent={this.accountDatasFooter()}
                        data={this.state.filterContacts}
                        renderItem={this.accountDatasRenderItem}
                        keyExtractor={ (item, index) => (index+1).toString() }
                        onEndReached={ this.loadNewDatas }
                        onEndReachedThreshold={0.2}

                        refreshing={this.state.doRefresh}
                        onRefresh={this.dataRefresh}
                    />
                </View>
            </SafeAreaView>
        );
    }
}





const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchHeader: {
      backgroundColor: '#f0f0f0',
      padding:7
  },
  searchInput: {
      backgroundColor: '#fafafa',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius:15,
      fontSize:13,
      fontWeight:'400',
      color: '#777'
  },
  listView: {

  },
  listItem: {
      //backgroundColor: 'white',
      padding:10,
      flex: 1,
      flexDirection: 'row'
  },
  listItemGray: {
      backgroundColor: '#f9f9f9',
      padding:7,
      flex: 1,
      flexDirection: 'row'
  },
  listItemGray: {
      backgroundColor:'#fafafa'
  },
  listImage: {
      width:35,
      height:35,
      borderRadius: 15
  },
  listContent: {
      marginLeft:10
  },
  listTitle: {
      fontWeight: '700',
      fontSize: 15
  },
  listInfo: {
      color: '#888',
      fontSize: 12
  }
});

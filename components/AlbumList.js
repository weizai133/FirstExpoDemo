import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AlbumDetail from "./AlbumDetail";
import axios from "axios";


export default class AlbumList extends Component{
    constructor(props){
        super(props);
        this.state={
            albums: []
        }
    }

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res=> this.setState({ albums: res.data }));
    }


    render(){
        const albums=this.state.albums.map(val=>(<AlbumDetail key={val.title} album={val} />))
        return (
            <View>
                {albums}
            </View> 
        );
    }
}
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import list from '@material-ui/core/List';
import {Divider,Button} from '@material-ui/core';
import SideBarItem from '../sidebarItem/SidebarItem';




class SideBar extends Component{
   constructor(props){
       super(props);
   }


   render(){
       return(<div>This is from the editor</div>)
   }

}


export default withStyles(styles)(SideBar);
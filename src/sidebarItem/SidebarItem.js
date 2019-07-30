import React ,{Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import {Divider, Button} from '@material-ui/core';


class SideBarItem extends Component{

    constructor(props){
        super(props)
    }


    render(){

        return(<div>Hello from sidebarItems</div>)
    }
}


export default withStyles(styles)(SideBarItem);
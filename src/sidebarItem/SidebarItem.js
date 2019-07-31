import React ,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Divider, Button} from '@material-ui/core';
import { removeHTMLTags } from '../helper';
import DeleteIcon from '@material-ui/icons/Delete';

class SideBarItem extends Component{



 selectNote = (note,index) =>{

    this.props.selectNote(note,index);
  }


  deleteNote = (note) => {

     if(window.confirm(`Are you sure you want to delete from the database ?: ${note.title}`)){

        this.props.deleteNote(note);
     }

  }



    render(){
        
        const {_index, _note ,classes,selectedNoteIndex } = this.props

        return(
           <div key={_index}>

         <ListItem
         className={classes.listItem}
         selected ={selectedNoteIndex === _index}
         alignitems = 'flex-start' >
             <div 
             className={classes.textSection}
             onClick ={() => this.selectNote(_note,_index)} >

             <ListItemText
             primary ={_note.title}
             secondary ={removeHTMLTags(_note.body.substring(0,30))+'...'}
             >  
             </ListItemText>
             </div>

             <DeleteIcon  onClick ={() => this.deleteNote(_note)}
              className={classes.deleteIcon}> </DeleteIcon>
         </ListItem>

        </div>)
    }
}


export default withStyles(styles)(SideBarItem);
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import {Divider,Button} from '@material-ui/core';
import SideBarItem from '../sidebarItem/SidebarItem';




class SideBar extends Component{
   constructor(props){
       super(props);


    this.state = {
    
     addingNote:false,
     title:null
    }
   }

   newNoteBtnClick = () =>{
 
    console.log('newBtnClicked');

    this.setState({
        title:null,
        addingNote:!this.state.addingNote})
   }

   updateTitle = (txt) =>{
       
    this.setState({title:txt});
   }

   newNote = () => {
     console.log(this.state);

   }

   selectNote = () => console.log('selctNote');

   
   deleteNote = () => console.log('deleteNOte');

   render()
     {
        const{notes,classes,selectedNoteIndex} = this.props;
      
      if(notes){
        return(<div className={classes.sidebarContainer}>
            <Button
            onClick={this.newNoteBtnClick}
            className={classes.newNoteSubmitBtn}>
              {this.state.addingNote ? 'cancel':'New Note'}
            </Button>
            {
            this.state.addingNote ?
            <div>
                <input type="text"
                 className={classes.newNoteInput}
                 placeholder='Enter note title'
                 onKeyUp ={(e) => this.updateTitle(e.target.value)}/>
 
 
                 <Button className={classes.newNoteSubmitBtn}
                   onClick ={this.newNote}>
                    Submit
                 </Button>
                
            </div> : null
            }
 
         <List>
             {
             notes.map((_note, _index) =>{
 
             return(
                 <div key={_index}>
 
                   <SideBarItem
                   _note={_note}
                   _index={_index}
                   _selectedNoteIndex ={selectedNoteIndex}
                   selectNote ={this.selectNote}
                   deleteNote ={this.deleteNote}>
          
 
                   </SideBarItem>
                 <Divider />
                 </div>
             )
 
             })
 
 
             }
         </List>
        </div>)
      }

      else{
          return(<div></div>)
      }
    }
}


export default withStyles(styles)(SideBar);
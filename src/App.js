import React,{Component} from 'react';
import './App.css';
import SideBar from './sidebar/Sidebar';
import SideBarItem from './sidebarItem/SidebarItem';
import Editor from './editor/Editor';


const firebase = require('firebase');

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      selectedNoteIndex:null,
      selectedNote:null,
      notes:null
    }
  }







  render() {


    return(
   <div class="App_container">
      
    <SideBar
     deleteNote ={this.deleteNote}
     selectNote = {this.selectNote}
     newNote ={this.newNote}
     selectedNoteIndex ={this.state.selectedNoteIndex}
     notes = {this.state.notes}/>
    <Editor/>

   </div>
    )
  }


 componentDidMount = () => {
  firebase
   .firestore()
   .collection('notes')
   .onSnapshot(serverUpdate => {

    const notes = serverUpdate.docs.map(
      _doc => {
        const data = _doc.data();
        data['id'] = _doc.id;
        return data;
      });
      console.log(notes);
      this.setState({notes:notes});
   })
   
 }


 selectNote = (note,index) => this.setState({selectedNoteIndex:index , selectedNote:note})
}
export default App;

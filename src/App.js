import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Recipe from './Recipe';
library.add(faTrash)
library.add(faEdit)
class App extends React.Component {
  
  constructor(props){

    super(props);
    this.state = {
      items:[],
      itemToDisplat: 0,
      vizibil: true,
      currentItem:{
        text:'',
        area:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.updateUI = this.updateUI.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.backToHome = this.backToHome.bind(this);
  }
  changePage(){
    this.forceUpdate();
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !=="" &&newItem.area!==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        area:'',
        key:''
      }
    })
    }
  }
 
  handleInput(e){
 var currentArea = this.state.currentItem.area;
  var currentText = this.state.currentItem.text;
  var currentKey = this.state.currentItem.key;
  if(this.state.currentItem.key==''){
    console.log("Setting key!");
    currentKey = Date.now();
  }

    if(e.target.name=="text"){
       currentArea = this.state.currentItem.area;
       currentText = e.target.value;
    }else if(e.target.name=="area"){
         currentArea = e.target.value;
         currentText = this.state.currentItem.text;
    }
    const items = this.state.items;
    if(Array.isArray(items) || items.length){
    items.map(item=>{      
           console.log("Updatearray " + item.key +"   current "+currentKey)
      if(item.key===currentKey){
 
        item.text= currentText;
        item.area= currentArea;
      }
    })
    this.setState({
      items: items
    })
  }

    this.setState({
      currentItem:{
        text: currentText,
        area: currentArea,
        key: currentKey
    
      }
    })
    console.log(this.state.currentItem);
  }

updateUI(key){
  const items = this.state.items;
    if(Array.isArray(items) || items.length){
    items.map(item=>{      
           console.log("Updatearray " + item.key +"   current "+key)
      if(item.key===key){
        console.log("Updatearray INDEX" + items.indexOf(item));
        this.setState({
          itemToDisplat: items.indexOf(item),    
          vizibil:false
        })
      }
    })}
 
  this.forceUpdate();
  
}

backToHome(){
  console.log("SETTING LOG");
  this.setState({
    vizibil: true
  })
  this.forceUpdate();

}

  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(mtext,marea,mkey){
    this.setState({
      currentItem:{
        text: mtext,
        area: marea,
        key: mkey
  
      }
    })
   
  }
 render(){
   if(this.state.vizibil){
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter recipe name" name="text" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
            <textarea className="textarea" name="area" placeholder="Enter recipe steps" value={this.state.currentItem.area} onChange={this.handleInput} />
          <button className="button" type="submit">Add</button>
        </form>
        <p></p>
       

          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} updateUI={this.updateUI}/>
        
      </header>
    </div>
  );
 }else{
  return(
    <div className="App">
    <header>
    <h1><Recipe item={this.state.items[this.state.itemToDisplat]} backToHome={this.backToHome}/></h1>
    </header>
  </div>
  );

 }}
}


export default App;

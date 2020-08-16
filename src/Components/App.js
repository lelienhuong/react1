import React, { Component } from 'react';
import './../App.css'
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './dulieu.json'
import EditUser from './EditUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      trangthai:false,  
      data:DataUser,
      tukhoa:"",
      editStatus:false
    }
  }
  componentWillMount(){
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DataUser))
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      })
    }
  }
  doiTrangThai=()=>{
      this.setState({
        trangthai:!this.state.trangthai
      })
    }
  timkiem=(event)=>
  {
    this.setState({
      tukhoa: event
    })  
  }
  addUser=(value)=>{
    var items = this.state.data
    items.push(value)
    this.setState(
      {
        data:items
      }
    );
  }
  editUser=(id,trangthai)=>{
    console.log(trangthai);
    if(trangthai==="edit"){
    this.state.data.map((value,key)=>{
      if(value.id === parseInt(id)){
        this.setState({
          object: value,
          editStatus:!this.state.editStatus,
          idEdit: id
        })
      }
       return true;
    })}else{
      this.state.data.map((value,key)=>{
        if(value.id === parseInt(id)){
          this.setState({
          data: this.state.data.filter((item)=>item !== value)
          })
        }
        localStorage.setItem('userData',JSON.stringify(this.state.data))
         return true;
      })
    }
  }
  alreadyEdit=(object)=>{
    this.state.data.map((value,key)=>{
      if(value.id === parseInt(this.state.idEdit)){
          value.name = object.name
          value.tel = object.tel
          value.Permission = object.Permission          
      }
      this.setState({
        data: this.state.data,
        editStatus:!this.state.editStatus
      })
      return true
  }
  )
  
}
  
  render() 
  {
    localStorage.setItem('userData',JSON.stringify(this.state.data));
    return (
      <div>
      <Header/>
      <div className="searchForm">
        <div className="container">
          <div className="row">
               <EditUser data={this.state.data} alreadyEdit={(object)=>this.alreadyEdit(object)} editStatus={this.state.editStatus} object={this.state.object} />
              <Search timkiem={(event)=>this.timkiem(event)} ketnoi={()=>this.doiTrangThai()} trangthai={this.state.trangthai}/>
              <TableData editUser={(id,trangthai)=>this.editUser(id,trangthai)} data={this.state.data} tukhoa = {this.state.tukhoa} />
              <AddUser addUser={(value)=>this.addUser(value)} trangthai={this.state.trangthai}/>
          </div>
        </div>
      </div>   
      </div> 
        )
  }
}
export default App;
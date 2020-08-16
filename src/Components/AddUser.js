import React, { Component } from 'react';
import uid from 'uid';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      fname:'',
      ftel:'',
      fPermission:''
    }
  }
  isChange=(event)=>{
    const ten = event.target.name
    const giatri= event.target.value
    this.setState({
      [ten] : giatri
    })
  }
  submitForm=()=>{ 
    if(this.state.fname.length !== 0 && this.state.fphone.length !== 0 &&this.state.fpermission.length !== 0){
    const value ={
      'id': uid(),
      'name': this.state.fname,
      'tel': this.state.fphone,
      'Permission': parseInt(this.state.fpermission)
    }
    return this.props.addUser(value);
  }else return true;
  }
  hienthiForm=()=>{
    if(this.props.trangthai=== true){
      return(
        <div className="col">
            <div className="card border-primary mb-3">
              <form>
              <div className="card-header">Thêm mới user</div>
              <div className="card-body">
                <div className="form-group">
                  <input onChange={(event)=>this.isChange(event)} name="fname"  type="text" className="form-control"  placeholder="Tên user" />
                </div>
                <div className="form-group">
                  <input onChange={(event)=>this.isChange(event)} name="fphone" type="text" className="form-control"  placeholder="Số điện thoại" />
                </div>
                <div className="input-group">
                  <select onChange={(event)=>this.isChange(event)} name="fpermission" className="custom-select" id="inputGroupSelect04">
                    <option value={0}>Chọn Quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="input-group-append">
                  <input type="reset" onClick={()=>this.submitForm()} className="btn btn-block btn-primary"  value="Thêm mới"/>
                </div>
              </div>
              </form>
            </div>
            </div>
        )
      }
  }
    render() {
      return (
        <div>
            {this.hienthiForm()}
            
        </div>
      )
          }
    
        }
export default AddUser;
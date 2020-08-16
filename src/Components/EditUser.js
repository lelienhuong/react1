import React, { Component } from 'react';

class EditUser extends Component {
  
      isChange=(event)=>{
          console.log("ne");
        const ten = event.target.name
        const giatri= event.target.value 
        this.setState({
          [ten] : giatri
        })
      }
      submitForm=()=>{ 
                const doituong ={
                  'id': this.props.object.id,
                  'name': this.state.name,
                  'tel': this.state.tel,
                  'Permission': parseInt(this.state.Permission)
                }               
                return this.props.alreadyEdit(doituong);
      }

    render() {
       
        if(this.props.editStatus === true){
        return (
            
            <div className="col">
            <div className="card border-primary mb-3">
              <form>
              <div className="card-header">Chỉnh sửa thông tin user</div>
              <div className="card-body">
                <div className="form-group">
                  <input onChange={(event)=>this.isChange(event)} name="name" defaultValue={this.props.object.name}  type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <input onChange={(event)=>this.isChange(event)} name="tel" defaultValue={this.props.object.tel} type="text" className="form-control"  placeholder="Số điện thoại" />
                </div>
                <div className="input-group">
                  <select onChange={(event)=>this.isChange(event)} name="Permission" defaultValue={this.props.object.Permission} className="custom-select" id="inputGroupSelect04">
                    <option value={0}>Chọn Quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="input-group-append">
                  <input type="button" onClick={()=>this.submitForm()} className="btn btn-block btn-danger"  value="Submit"/>
                </div>
              </div>
              </form>
            </div>
            </div>      
             );
    }
    return true
}
}

export default EditUser;
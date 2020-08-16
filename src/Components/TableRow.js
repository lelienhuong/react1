import React, { Component } from 'react';

class TableRow extends Component {
   
    permissionShow=()=>{
        if((this.props.Permission) === 1){
            return "Admin"
        }else if((this.props.Permission) === 2){
            return "Moderator"
        }else if((this.props.Permission) === 3){
            return "Normal"
        }
    }
    getIDEdit(){
        
        return this.props.editUser(this.props.id,"edit");
    }
    getIDDelete(){
        
        return this.props.editUser(this.props.id,"delete");
    }
    render() {
        return (
            <tr>
            <td>{this.props.stt}</td>
            <td>{this.props.name}</td>
            <td>{this.props.tel}</td>
            <td>
            {
                this.permissionShow()
            }
            </td>
            <td>
              <div onClick={()=>this.getIDEdit()} className="btn btn-warning sua"><i className="fa fa-edit">Sửa</i></div>
              <div onClick={()=>this.getIDDelete()} className="btn btn-danger sua"><i className="fa fa-edit">Xóa</i></div>
            </td>
          </tr>                    
          );
    }
}

export default TableRow;
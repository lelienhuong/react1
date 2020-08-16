import React, { Component } from 'react';
import TableRow from './TableRow';

class TableData extends Component {
  hienthiTable=()=>{
        if(this.props.tukhoa.length !== 0 ){
      return(
      this.props.data.map((value,key)=>{
      if(value.name.indexOf(this.props.tukhoa) !== -1 ){
        return(
          <TableRow editUser={(id,trangthai)=>this.props.editUser(id,trangthai)} id={value.id} stt={key+1} name={value.name} tel={value.tel} Permission={value.Permission}/>
        )
        }
        return true;
      }
      )
      )}
    else  {
      return(
        this.props.data.map((value,key)=>(
          <TableRow editUser={(id,trangthai)=>this.props.editUser(id,trangthai)} id={value.id} stt={key + 1} name={value.name} tel={value.tel} Permission={value.Permission} />
        ))
  )}
}

    render() {
        return (
          <div className="col" >
          <div className="col-12">
            <div className="col-12">
            <table className="table table-striped table-hover ">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Điện thoại</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {this.hienthiTable()}
            </tbody>
            </table>
          </div>  
          </div>  
          </div>   
           )
    }
}

export default TableData;
import React, { Component } from 'react';

class Search extends Component {


  hienthiNut=()=>{
      if(this.props.trangthai === false){
        return (
          <div onClick={()=> this.props.ketnoi()} className="btn btn-block btn-outline-info">Thêm mới</div>
        )
      }else{
        return(
          <div onClick={()=> this.props.ketnoi()} className="btn btn-block btn-outline-secondary">Đóng lại </div>
        )
      }
               
    }
  setTuKhoa=(event)=>{
    this.setState({
      tukhoa: event.target.value
    })
  }
  getTuKhoa=()=>{
    return this.props.timkiem(this.state.tukhoa)
  }
    render() {
        return (
            <div className="col-12">
            <div className="col-12">
            <div className="form-group">
              <div className="btn-group">
                <input type="text" style={{width: '500px'}} className="form-control" onChange={(event)=>this.setTuKhoa(event)}  aria-describedby="helpId" placeholder="Nhập từ khóa tìm kiếm" />
                <div className="btn btn-info" onClick={()=>this.getTuKhoa()}> Tìm </div>
              </div>
            </div>  
          </div> 
          {this.hienthiNut()}
          <div className="col-12">
          <hr/>
            </div>  
            </div>    
           );
    }
}

export default Search;
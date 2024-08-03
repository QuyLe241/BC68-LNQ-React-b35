import React from 'react'
// import danhSachGheData from "../Data/danhSachGhe.json"
import {connect} from 'react-redux'


const HangGhe = ({item, soHangGhe}) => {
  const renderGhe = () => {
    return item.danhSachGhe.map((item, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      //    Ghế đã bị đặt
      if(item.daDat){
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      //    Ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = (item.danhSachGheDangDat || [{
        soGhe: "A1",
        gia: "1000",
    },
    {
      soGhe: "D5",
      gia: "1000",
    },
  ]).findIndex((gheDangDat) => gheDangDat.soGhe === item.soGhe); 
      if(indexGheDangDat !== -1){
        cssGheDangDat = "gheDangChon";
      }

      return <button key={index} disabled={disabled} style={{fontWeight: "700"}} className={`ghe ms-3 ${cssGheDaDat} ${cssGheDangDat}`}>{item.soGhe}</button>
    })
  };

  const renderSohang = () => {
    return item.danhSachGhe.map((item, index) => {
      return <button style={{fontWeight: "700"}} className='rowNumber' key={index}>{item.soGhe}</button>
    })
  };

  const renderHangGhe = () => {
    if(soHangGhe === 0) {
      return <div>
        {item.hang} {renderSohang()}
      </div>
    } else {
      return <div>
      {item.hang} {renderGhe()}
    </div>
    }
  }


  return (
    <div className="">
      <div className='text-white ms-5 mt-1' style={{fontSize: "16px", fontWeight: "700"}}>
      {renderHangGhe()}
      </div>
    </div>
  )
}

// export default HangGhe;

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
  }
}

export default connect (mapStateToProps)(HangGhe);

{/* <div className="">
          <span>{hangGhe.hang}</span>
</div> */}
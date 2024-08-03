
import React from 'react'
import './StyleBooking.css'
import ThonginDatGhe from "./ThongTinDatGhe" 
import danhSachGheData from "../Data/danhSachGhe.json"
import HangGhe from "./HangGhe"


const DatVe = () => {   

            //          function test render
        // let renderHangGhe = () {
        //     return danhSachGheData.map((hangGhe, index => {
        //         return <div key={index}>
        //             <HangGhe/>
        //         </div>
        //     }));
        // };
  return (
    <div style={{position: "fixed", width: "100%", height: "100%",
        backgroundImage: "url('./public/img/bgmovie.jpg')",
        backgroundSize: "100%",
                }}>
        <div className="" style={{backgroundColor: "rgba(0,0,0,0.6)",
            position: "fixed", width: "100%", height: "100%",
                }}>
            <div className="container-fliud">
            <div className="row">
                <div className="col-8">
                    <div className="d-flex justify-content-center">
                    <h1 className='display-6 text-warning' style={{fontWeight: "700",}}>Đặt Vé Xem Phim</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                    <div className="text-white" style={{fontSize: "25px", fontWeight: "700",}}>
                            Màn Hình
                    </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="screen">
                        </div>
                        {/* {renderHangGhe()}; */}
                        {/* danhSachGheData.map((hangGhe, index => {
                        return <div key={index}>
                        <HangGhe/>
                        </div>
                        })); */}
                        
                    </div>
                    {/*         Render hang ghế */}
                    <div className="">
                    {danhSachGheData.map((item, index) => {
                            return <div className='' key={index}>
                                <HangGhe item={item}/>
                            </div>
                        })};
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="row">
                        <div className=" display-6 text-light mt-2" style={{fontSize: "35px", fontWeight: "700",}}>Danh Sách Ghế Bạn Chọn</div>
                        <ThonginDatGhe/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DatVe;

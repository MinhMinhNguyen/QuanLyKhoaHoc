function NguoiDungService(){}

NguoiDungService.prototype.DangNhap=function(taiKhoan, matKhau){
    return $.ajax({
        type: "GET",
        url: `http://sv.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`
    })
}
function NguoiDungService(){}

NguoiDungService.prototype.DangNhap=function(taiKhoan, matKhau){
    return $.ajax({
        type: "GET",
        url: `http://sv.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`
    })
}

NguoiDungService.prototype.DangKy=function(nguoiDung){
    return $.ajax({
        type: 'POST',
        url: 'http://sv.myclass.vn/api/QuanLyTrungTam/DangKy',
        dataType: 'json',
        data: nguoiDung
    })
}
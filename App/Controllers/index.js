$(document).ready(function () {
/*
    mục đích: đăng nhập vào hệ thống
    người tạo: mai
    ngày tạo: 9/7/2018
*/

    var nguoiDungSV = new NguoiDungService();

    $('#btnDangNhap').bind('click', function () {
        var taikhoan = $('#txtTaiKhoan').val();
        var matkhau = $('#pwd').val();
        nguoiDungSV.DangNhap(taikhoan, matkhau)
            .done(function (kq) {
                //console.log(kq);
                if (kq !== "fail to login") {
                    localStorage.setItem('currentUser', JSON.stringify(kq[0]));
                    window.location.assign('trangcanhan.html');
                }
            }).fail(function (kq) {
                console.log(kq);
            })
    })
    /* kết thúc đăng nhập*/
})
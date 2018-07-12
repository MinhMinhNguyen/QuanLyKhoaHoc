$(document).ready(function () {
    /*
        mục đích: đăng nhập vào hệ thống
        người tạo: mai
        ngày tạo: 9/7/2018
    */
    var danhSachNguoiDung = new DanhSachNguoiDung();
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
    /*kết thúc đăng nhập*/

    /*
        mục đích: đăng ký vào hệ thống
        người tạo: mai
        ngày tạo: 9/7/2018
    */
    $('#btnDangKy').bind('click', function () {
        var taiKhoan = $('#dkTaiKhoan').val();
        var matKhau = $('#dkPWD').val();
        var hoTen = $('#dkHoTen').val();
        var email = $('#email').val();
        var sdt = $('#phone').val();
        var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, sdt, 'HV', '');
        nguoiDungSV.DangKy(nguoiDung)
            .done(function (kq) {
                console.log(kq);
                /*swal({
                    type: 'success',
                    title: 'Đăng ký thành công!',
                    showConfirmButton: false,
                    timer: 1000
                })*/
            }).fail(function (kq) {
                console.log(kq);
            })
    })
    /*kết thúc đăng ký*/

    /*
        mục đích đăng xuất hệ thống
        người tạo: mai
        ngày tạo: 9/7/2018
    */
    $('#btnDangXuat').bind('click', function () {
        const swalWithBootstrapButtons = swal.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
        })

        swalWithBootstrapButtons({
            title: 'Bạn có muốn thoát',
            //text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Có',
            cancelButtonText: 'Trở về!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons(
                    window.location.assign('index.html')
                )
            }
        })
    })
    /*kết thúc đăng xuất*/
})
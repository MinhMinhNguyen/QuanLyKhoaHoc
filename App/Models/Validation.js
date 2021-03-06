$(document).ready(function () {
    // Khai báo hằng số 
    var Thong_Bao_Nhap_Tai_Khoan = 'Vui lòng nhập tài khoản';
    var Thong_Bao_Nhap_Mat_Khau = 'Vui lòng nhập mật khẩu';
    var Thong_Bao_Nhap_Tat_Ca_So = 'Vui lòng nhập số';
    var Thong_Bao_Nhap_Email = 'Vui lòng nhập email';
    var Thong_Bao_Ho_Ten = 'Vui lòng nhập họ tên';
    var Thong_Bao_Nhap_So_DT = 'Vui lòng nhập số điện thoại';
    //

    function KiemTraPhanTu(id, tb, textTB) {
        var giaTriNhapVao = $(id).val();
        var tbthongBao = $(tb);
        var kq = false;
        if (giaTriNhapVao == '') {
            $(tbthongBao).css({
                "display": "block",
                "color": "red"
            });
            $(tbthongBao).html(textTB);
            kq = false;
        }
        else {
            $(tbthongBao).css("display", "none");
            kq = true;
        }
        console.log(kq);
        return kq;

    }


    function KiemTraTatCaLaSo(id, tb, textTB) {
        var giaTriNhapVao = $(id).val();
        var tbthongBao = $(tb);
        var number = /^[0-9]+$/;
        var kq = false;
        if (giaTriNhapVao.match(number)) {
            $(tbthongBao).css("display", "none");
            kq = true;
        } else {
            $(tbthongBao).css({
                "display": "block",
                "color": "red"
            })
            $(tbthongBao).html(textTB);
            kq = false;
        }
        return kq;
    }

    function KiemTraEmail(id, tb, textTB) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var giaTriNhapVao = $(id).val();
        var tbthongBao = $(tb);
        var kq = false;
        if (giaTriNhapVao.match(mailformat)) {
            $(tbthongBao).css("display", "none");
            kq = true;
        } else {
            $(tbthongBao).css({
                "display": "block",
                "color": "red"
            })
            $(tbthongBao).html(textTB);
            kq = false;
        }
        return kq;
    }

    function KiemTraBatBuocNhapDangNhap() {
        var taiKhoan = $("#txtTaiKhoan").val();
        var matKhau = $("#pwd").val();
        if (taiKhoan != "" && matKhau != '') {
            swal({
                type: 'success',
                title: 'Đăng nhập thành công!',
                showConfirmButton: false,
                timer: 1000
            })
        } else {
            KiemTraPhanTu('#txtTaiKhoan', '.tbUserName', Thong_Bao_Nhap_Tai_Khoan);
            KiemTraPhanTu('#pwd', '.tbpassword', Thong_Bao_Nhap_Mat_Khau);
        }


    }
    function KiemTraBatBuocNhapDangKy() {
        var taiKhoan = $("#dkTaiKhoan").val();
        var matKhau = $("#dkPWD").val();
        var hoTen = $("#dkHoTen").val();
        var email = $("#email").val();
        var soDT = $("#phone").val();
        if (taiKhoan != "" && matKhau != "" && hoTen != "" && email != "" && soDT != "") {
            swal({
                type: 'success',
                title: 'Đăng ký thành công!',
                showConfirmButton: false,
                timer: 1000
            })
        } else {
            KiemTraPhanTu("#dkTaiKhoan", ".tbdkTaiKhoan", Thong_Bao_Nhap_Tai_Khoan);
            KiemTraPhanTu("#dkPWD", ".tbdkPasswork", Thong_Bao_Nhap_Mat_Khau);
            KiemTraPhanTu("#dkHoTen", ".tbdkHoTen", Thong_Bao_Ho_Ten);
            KiemTraEmail("#email", ".tbdkemail", Thong_Bao_Nhap_Email);
            KiemTraPhanTu("#phone", ".tbdksodt", Thong_Bao_Nhap_So_DT);
        }
    }

    $('body').delegate('#btnDangNhap', 'click', function () {
        KiemTraBatBuocNhapDangNhap();
    })

    $('body').delegate("#btnDangKy", "click", function () {
        KiemTraBatBuocNhapDangKy();
    })

})
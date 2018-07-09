function DanhSachKhoaHoc() {
    this.DSKH = [];
}

DanhSachKhoaHoc.prototype.ThemKhoaHoc = function (khoaHoc) {
    this.DSKH.push(khoaHoc);
}

DanhSachKhoaHoc.prototype.TimKhoaHocTheoMaKhoaHoc = function (maKhoaHoc) {
    for (var i = 0; i < this.DSKH.length; i++) {
        if (maKhoaHoc === this.DSKH[i].MaKhoaHoc) {
            return i;
        }
    }
    return -1;
}

DanhSachKhoaHoc.prototype.XoaMotKhoaHoc = function (maKhoaHoc) {
    var index = this.TimKhoaHocTheoMaKhoaHoc(maKhoaHoc);
    this.DSKH.splice(index, 1);
}

DanhSachKhoaHoc.prototype.TimKhoaHocTheoTenKhoaHoc = function (tuKhoa) {
    var mangKhoaHocCanTim = [];
    var tenCanTim = tuKhoa.toLowerCase().trim();
    for (var i = 0; i < this.DSKH.length; i++) {
        if (this.DSKH[i].TenKhoaHoc.toLowerCase().search(tenCanTim) !== -1) {
            mangKhoaHocCanTim.push(this.DSKH[i]);
        }
    } return mangKhoaHocCanTim;
}

DanhSachKhoaHoc.prototype.CapNhatKhoaHoc = function (khoaHoc) {
    var index = this.TimKhoaHocTheoMaKhoaHoc(khoaHocEdit.MaKhoaHoc);
    var khoaHocHienTai = this.DSKH[index];
    khoaHocHienTai.TenKhoaHoc = khoaHocEdit.TenKhoaHoc;
    khoaHocHienTai.MoTa = khoaHocEdit.MoTa;
    khoaHocHienTai.HinhAnh = khoaHocEdit.HinhAnh;
    khoaHocHienTai.LuotXem = khoaHocEdit.LuotXem;
    khoaHocHienTai.NguoiTao = khoaHocEdit.NguoiTao;
}
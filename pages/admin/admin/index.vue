<template lang="">
    <div class="row">
        <div class="col-md-4 ">
            <div class="card ">
                    <div class="card-header text-center">
                        <h2><b>Thêm Mới Tài Khoản</b></h2>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Họ Và Tên</label>
                                    <input tabindex="1" class="form-control" v-model="addAdmin.name"  type="text"
                                        placeholder="Nhập vào họ và tên ">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input tabindex="1" class="form-control" v-model="addAdmin.email"  type="text"
                                         placeholder="Nhập vào email">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Mật Khẩu</label>
                                    <input tabindex="1" class="form-control" v-model="addAdmin.password" 
                                        type="password">
                                </div>
                            </div>
                            
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Giới Tính</label>
                                    <select  class="form-control">
                                        <option value="1">Nam</option>
                                        <option value="0">Nữ</option>
                                        <option value="2">Không xác định</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Quyền Quản Trị</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-end">
                        <button class="btn btn-primary" type="button" @click="createAdmin()">Tạo Tài Khoản</button>
                    </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-header text-center">
                    <h2><b>Danh sách tài khoản Admin</b></h2>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-responsive" id="danhSachAdmin">
                        <thead>
                            <tr class="text-center bg-primary">
                                <th class=" text-nowrap"><b>#</b></th>
                                <th class=" text-nowrap"><b>Họ Và Tên</b></th>
                                <th class=" text-nowrap"><b>Email</b></th>
                                <!-- <th class=" text-nowrap"><b>Giới Tính</b></th> -->
                                <!-- <th class=" text-nowrap"><b>Quyền</b></th> -->
                                <th class=" text-nowrap"><b>Password</b></th>
                                <th class=" text-nowrap"><b>Action</b></th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            <template v-for="(v, k) in admin.list_admin">
                                <tr class="bg-light">
                                    <th class="text-center align-middle">{{ k + 1 }}</th>
                                    <td class="align-middle  text-nowrap">{{ v.name }}</td>
                                    <td class="align-middle">{{ v.email }}</td>
                                    <!-- <td class="align-middle text-center">
                                        <span v-if="v.gioi_tinh ==1">Nam</span>
                                        <span v-else-if="v.gioi_tinh ==0">Nữ</span>
                                        <span v-else>Không Xác Định</span>
                                    </td> -->

                                    <!-- <td class="align-middle text-nowrap" v-if="v.id_quyen ==0">{{ten}}</td>
                                    <td class="align-middle text-nowrap" v-else="v.id_quyen">{{ v.ten_quyen }}</td> -->

                                    <td class="align-middle">
                                        <button data-bs-toggle="modal" data-bs-target="#modalPassword"
                                            v-on:click="edit_pass = v" class="btn btn-primary">
                                            <i class="fa-solid fa-lock"></i>
                                        </button>
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button data-bs-toggle="modal" data-bs-target="#editModal"
                                        v-on:click="edit_ds = Object.assign({}, v)" class="btn btn-primary">
                                            <i class="fa fa-pencil-square" style="font-size: 20px"></i>
                                        </button>
                                       
                                        <!-- <button v-on:click="delete_ds = v" style="width: 0px" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal" class="btn" style="margin-left: 10px"><i
                                                class="fa fa-trash text-danger"style="font-size: 20px"></i></i><span
                                                class="ps-3 text-success"></button> -->
                                    </td>
                                </tr>
                            </template>
                            <!-- {{-- Password --}} -->
                            <div class="modal fade" id="modalPassword" tabindex="-1"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Đổi Mật Khẩu</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <input type="hidden" v-model="edit_pass.id">
                                            <div class="mb-3">
                                                <label class="form-label">Mật Khẩu</label>
                                                <input type="password" class="form-control" name="password"
                                                    v-model="edit_pass.edit_pass"
                                                    placeholder="Nhập vào mật khẩu mới *">
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Xác Nhận Mật Khẩu</label>
                                                <input type="password" class="form-control" name="re_password"
                                                    v-model="edit_pass.re_password"
                                                    placeholder="Nhập lại mật khẩu mới *">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Đóng</button>
                                            <button type="button" class="btn btn-primary"
                                                v-on:click="updatePassword()">Cập Nhật</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- {{-- Sửa --}} -->
                            <div class="modal fade" id="editModal" tabindex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Cập Nhật Admin</h5>
                                            <button class="btn-close" type="button" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <input type="text" name="id" id="id_admin_edit" hidden>
                                            <div class="mb-3">
                                                <label class="form-label">Họ và tên</label>
                                                <input tabindex="1" class="form-control" id="name_edit" name="name"
                                                    v-model="edit_ds.name" type="text">
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Email</label>
                                                <input tabindex="2" class="form-control" id="email_edit"
                                                    v-model="edit_ds.email" name="email" type="text">
                                            </div>
                                            <!-- <div class="col-md-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Giới Tính</label>
                                                    <select name="gioi_tinh" id="gioi_tinh_edit" class="form-control"
                                                        v-model="edit_ds.gioi_tinh">
                                                        <option value="1">Nam</option>
                                                        <option value="0">Nữ</option>
                                                        <option value="2">Không xác định</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Tình Trạng</label>
                                                    <select  v-model="edit_ds.is_block" name="is_block" id="is_block" class="form-control">
                                                        <option value="1">Đã Khóa</option>
                                                        <option value="0">Hoạt Động</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Quyền Quản Trị</label>
                                                    <select v-model="edit_ds.id_quyen" name="id_quyen" id="id_quyen_edit"
                                                        class="form-control">
                                                        <template v-for="(v, k) in list_quyen">
                                                            <option v-bind:value="v.id"> @{{ v.ten_quyen }}</option>
                                                        </template>
                                                    </select>
                                                </div>
                                            </div> -->
                                            <div class="modal-footer">
                                                <button class="btn btn-primary" type="button"
                                                    data-bs-dismiss="modal">Đóng</button>
                                                <button v-on:click="updateAdmin()" class="btn btn-secondary"
                                                    type="button">Lưu Thay Đổi</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- {{-- Xóa --}}
                            <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Xoá Admin</h5>
                                            <button class="btn-close" type="button" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <input type="text" id="id_admin" hidden>
                                            <div class="alert alert-danger" role="alert">
                                                <h4 class="alert-heading">Xóa Admin!</h4>
                                                <p>Bạn có chắc chắn muốn xóa Admin <b
                                                        class="text-warning">@{{ delete_ds.name }}</b> này không?.</p>
                                                <hr>
                                                <p class="mb-0"><i>Lưu ý: Hành động không thể khôi phục
                                                        lại</i>.</p>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-primary" type="button"
                                                data-bs-dismiss="modal">Đóng</button>
                                            <button v-on:click="xoaAdmin()" class="btn btn-danger"
                                                type="button">Xóa</button>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script  setup>
definePageMeta({
    layout: 'admin',
    middleware: 'auth'
});
import { ref, onMounted, computed } from "vue";
import { useAdminCrud } from "../../../stores/admin/admin/crud";
const admin = useAdminCrud();
onMounted(() => {
    admin.getDataAdmin();
});
const addAdmin = {
    'name': '',
    'email': '',
    'password': '',
};
const edit_pass = {

};
const edit_ds = {

};
const delete_ds = {

};
const createAdmin = () => {
    console.log(addAdmin);
    admin.createAdmin(addAdmin)
    addAdmin.name = "";
    addAdmin.email = "";
    addAdmin.password = "";
    admin.getDataAdmin();

};

</script>
<style></style>
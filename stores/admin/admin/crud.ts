import axios from "axios";
import api from "~/services/axios";
export const useAdminCrud = defineStore("admin", {
  state: () => ({
    list_admin: [],
  }),
  getters: {
    getData: (state) => state.list_admin,
  },
  actions: {
    getDataAdmin() {
      api.get("/admin/data").then((res) => {
        this.list_admin = res.data.data;
      });
    },
    createAdmin(payload) {
      axios
          api.post("/admin/create", payload).then((res) => {
            
            if (res.data.status == true) {
              useNuxtApp().$toast.success(res.data.message);
            } else {
              useNuxtApp().$toast.error(res.data.message);
            }
          })
          .catch((errors)=>{
            const listErrors =  errors.response.data.errors;
            Object.values(listErrors).forEach((value,index)=>{
              useNuxtApp().$toast.error(value);
            })     
          });
    },
  },
});

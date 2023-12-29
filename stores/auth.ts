import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {},
  }),
  persist: {
    paths: ["user"],
  },
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async login(payload) {
      const token = useTokenStore();

      try {
        await axios
          .get("http://localhost:8000/sanctum/csrf-cookie", {
            withCredentials: true,
          })
          .then((res) => {
            axios.defaults.withCredentials = true;
            axios.defaults.withXSRFToken = true;
            axios
              .post("http://localhost:8000/api/login", payload)
              .then((res) => {
                if (res.data.status == 1) {
                  useNuxtApp().$toast.success(res.data.message);
                  localStorage.setItem("token", res.data.token);
                  this.commonSetter(res.data);
                  // token.setToken(res.data.token);
                  // this.user=res.data.user;
                } else {
                  useNuxtApp().$toast.error(res.data.message);
                }
              });
          });
      } catch (error) {}
    },
    commonSetter(data) {
      const token = useTokenStore();
      token.setToken(data.token);
      this.user = data.user;
      return navigateTo("/admin/danh-muc");
    },
  },
});

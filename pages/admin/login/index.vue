
<template>
	<div class="wrapper">
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div class="container-fluid">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="mb-4 text-center">
							<img src="/assets/images/logo-img.png" width="180" alt="" />
						</div>
						<form @submit.prevent="actionLogin">
							<div class="card">
								<div class="card-body">
									<div class="border p-4 rounded">
										<div class="text-center">
											<h3 class="">Sign in</h3>
										</div>
										<div class="form-body">
											<div class="row g-3">
												<div class="col-12">
													<label for="inputEmailAddress" class="form-label">Email Address</label>
													<input v-model="payload.email" type="email" class="form-control"
														id="inputEmailAddress" placeholder="Email Address">
												</div>
												<div class="col-12">
													<label for="inputChoosePassword" class="form-label">Enter
														Password</label>
													<div class="input-group" id="show_hide_password">
														<input type="password" class="form-control border-end-0"
															id="inputChoosePassword" v-model="payload.password"
															placeholder="Enter Password"> <a href="javascript:;"
															class="input-group-text bg-transparent"><i
																class='bx bx-hide'></i></a>
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox"
															id="flexSwitchCheckChecked" checked>
														<label class="form-check-label"
															for="flexSwitchCheckChecked">Remember
															Me</label>
													</div>
												</div>
												<div class="col-md-6 text-end"> <a
														href="authentication-forgot-password.html">Forgot Password ?</a>
												</div>
												<div class="col-12">
													<div class="d-grid">
														<button class="btn btn-primary"><i class="bx bxs-lock-open"></i>Sign
															in</button>
															
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'auth-admin',
	middleware: 'admin'
});

const auth = useAuthStore();
const payload = {
  email: "admin@admin.com",
  password: "123123",
};
const token = useTokenStore();

 function actionLogin() {
     auth.login(payload);
}
// async function actionLogin() {
// 	auth.login(payload);
// }
// async function login() {
// 	await useFetch("http://localhost:8000/sanctum/csrf-cookie");
// 	const csrfCookie = useCookie('XSRF-TOKEN');
// 	if (!csrfCookie) {
// 		console.error('CSRF token not found');
// 		return;
// 	}
// 	await useFetch("http://localhost:8000/api/login", {
// 		method: "POST",
// 		mode: 'cors',
// 		body: payload,
// 		headers: {
// 			'X-Requested-With': 'XMLHttpRequest',
// 			'Content-Type': 'application/json',
// 			'X-XSRF-TOKEN': csrfCookie.value,
// 		},
// 		credentials: 'include',
// 	});
// }
// export default {
// 	data() {
// 		return {
// 			payload: {
// 				email: "admin@admin.com",
// 				password: "123123",
// 			}
// 		}
// 	},
// 	methods: {
		
// 		async actionLogin() {
// 			auth.login(this.payload);
// 			// await axios.get('http://localhost:8000/sanctum/csrf-cookie')
// 			// 	.then((res) => {
// 			// 		axios.defaults.withCredentials = true;
// 			// 		axios.defaults.withXSRFToken = true;
// 			// 		axios
// 			// 			.post("http://localhost:8000/api/login", this.payload)
// 			// 			.then((res) => {
// 			// 				console.log(res);
// 			// 			})
// 			// 	});

// 		}
// 	},
// }

</script>

<style lang="scss" scoped></style>

<template>
	<div id="layout-admin">
		<div class="wrapper">
			<div class="header-wrapper">
				<AdminAppHeader></AdminAppHeader>
				<AdminAppMenu></AdminAppMenu>
			</div>
			<div class="page-wrapper">
				<div class="page-content">
					<slot />
				</div>
			</div>
			<div class="overlay toggle-icon"></div>
			<a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
		</div>
		<div class="switcher-wrapper">
			<div class="switcher-btn"> <i class='bx bx-cog bx-spin'></i>
			</div>
			<div class="switcher-body">
				<div class="d-flex align-items-center">
					<h5 class="mb-0 text-uppercase">Theme Customizer</h5>
					<button type="button" class="btn-close ms-auto close-switcher" aria-label="Close"></button>
				</div>
				<hr />
				<h6 class="mb-0">Theme Styles</h6>
				<hr />
				<div class="d-flex align-items-center justify-content-between">
					<div class="form-check">
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="lightmode" checked>
						<label class="form-check-label" for="lightmode">Light</label>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="darkmode">
						<label class="form-check-label" for="darkmode">Dark</label>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="semidark">
						<label class="form-check-label" for="semidark">Semi Dark</label>
					</div>
				</div>
				<hr />
				<div class="form-check">
					<input class="form-check-input" type="radio" id="minimaltheme" name="flexRadioDefault">
					<label class="form-check-label" for="minimaltheme">Minimal Theme</label>
				</div>
				<hr />
				<h6 class="mb-0">Header Colors</h6>
				<hr />
				<div class="header-colors-indigators">
					<div class="row row-cols-auto g-3">
						<div class="col">
							<div class="indigator headercolor1" id="headercolor1"></div>
						</div>
						<div class="col">
							<div class="indigator headercolor2" id="headercolor2"></div>
						</div>
						<div class="col">
							<div class="indigator headercolor3" id="headercolor3"></div>
						</div>
						<div class="col">
							<div class="indigator headercolor4" id="headercolor4"></div>
						</div>
						<div class="col">
							<div class="indigator headercolor5" id="headercolor5"></div>
						</div>
						<div class="col">
							<div class="indigator headercolor6" id="headercolor6"></div>
						</div>
						<div class="col">
							<div class="indigator headercolor7" id="headercolor7"></div>
						</div>
						<div class="col">
							<div class="indigator headercolor8" id="headercolor8"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<AdminAppFooter></AdminAppFooter>
	</div>
</template>
<script setup lang="ts">
useHead({
	title: 'Rocker - Bootstrap 5 Admin Dashboard Template',
	meta: [
		{
			name: 'description',
			content: 'Rocker - Bootstrap 5 Admin Dashboard Template'
		}
	],
	link: [
		{
			rel: "icon",
			href: "/assets/images/favicon-32x32.png",
			type: "image/png",
		},
		{
			rel: "stylesheet",
			href: "/assets/plugins/vectormap/jquery-jvectormap-2.0.2.css",
		},
		{
			rel: "stylesheet",
			href: "/assets/plugins/simplebar/css/simplebar.css",
		},
		{
			rel: "stylesheet",
			href: "/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css",
		},
		{
			rel: "stylesheet",
			href: "/assets/plugins/metismenu/css/metisMenu.min.css",
		},
		{ rel: "stylesheet", href: "/assets/css/pace.min.css" },
		{ rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
		{ rel: "stylesheet", href: "/assets/css/bootstrap-extended.css" },
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap",
		},
		{ rel: "stylesheet", href: "/assets/css/bootstrap-extended.css" },
		{ rel: "stylesheet", href: "/assets/css/app.css" },
		{ rel: "stylesheet", href: "/assets/css/icons.css" },
		{ rel: "stylesheet", href: "/assets/css/dark-theme.css" },
		{ rel: "stylesheet", href: "/assets/css/semi-dark.css" },
		{ rel: "stylesheet", href: "/assets/css/header-colors.css" },
		{ rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css", integrity:"sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==", crossorigin:"anonymous", referrerpolicy:"no-referrer"}
	],
	script: [
		// { src: "/assets/js/pace.min.js", body: true },
		{ src: "/assets/js/bootstrap.bundle.min.js", body: true },
		{ src: "/assets/js/jquery.min.js", body: true },
		{ src: "/assets/plugins/simplebar/js/simplebar.min.js", body: true },
		{ src: "/assets/plugins/metismenu/js/metisMenu.min.js", body: true },
		{ src: "/assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js", body: true },
		{ src: "/assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js", body: true},
		{ src: "/assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js", body: true},
		{ src: "/assets/js/index.js", body: true },
		{ src: "/assets/js/app.js", body: true },
		{ src: "/assets/plugins/chartjs/js/Chart.min.js", body: true },
		{ src: "/assets/plugins/chartjs/js/Chart.extension.js", body: true },
	],

})
</script>
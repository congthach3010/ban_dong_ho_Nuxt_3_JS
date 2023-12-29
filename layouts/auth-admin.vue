
<template>
    <div>
        <slot></slot>
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

<style lang="scss" scoped></style>
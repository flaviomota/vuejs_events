const app = Vue.createApp({
	methods: {
		showAlert() {
			alert('Button pressed!');
		},
	}
});

app.mount('#events');
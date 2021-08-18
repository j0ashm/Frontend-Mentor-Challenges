const app = Vue.createApp({
	data() {
		return {
			email: '',
			error: false,
			reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
		}
	},
	methods: {
		validateEmail() {
			if (this.email !== '') {
				if (reg.test(this.email.toLowerCase()) === false) {
					error = true;
				}
				else {
					error = false;
				}
			}
		}
	}
});

app.mount('#email-validation');
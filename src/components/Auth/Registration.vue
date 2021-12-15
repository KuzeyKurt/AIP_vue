<template> 
	<v-container fluid fill-height>
		<v-layout align-center justify-center> 
			<v-flex xs12 sm8 md8>
			<h1 class="text--secondary mb-3 mt-3">If you don't have a account, Registration</h1>
			<v-card class="elevetion-12">
				<v-toolbar dark color="indigo lighten-1">
				<v-toolbar-title>
					Registration
				</v-toolbar-title>
				</v-toolbar>
				<v-card-text>
					<v-form v-model="valid" ref="form" validation>
					<v-text-field
					prepend-icon="mdi-account" 	
				name="email"
				label="Email" 
				type="email" 
				v-model="email" 
				:rules=" emailRules">
					</v-text-field>
					<v-text-field
						prepend-icon="mdi-lock" 
						name="password" 
						label="Password" 
						type="password" 
						v-model="password"
						:rules="passwordRules">
					</v-text-field>
					<v-text-field
						prepend-icon="mdi-lock" 
						name="confirm-password" 
						label="Confirm Password" 
						type="password" 
						v-model="confirmPassword" 
						:rules="confirmPasswordRules">
					</v-text-field>
					
                    </v-form> 
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn 
					color="indigo lighten-3"
					@click="onSubmit"
					:loading="loading"
					:disabled="!valid||loading">
					Create Account
					</v-btn>
				</v-card-actions>	
			</v-card>
			</v-flex>
		</v-layout> 
	</v-container>
</template>
<script>


export default {
	data () { 
		return {
		email: "",
		password: "",
		valid: false,
		emailRules: [
			v=>!!v || 'E-mail must be required',
			v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
		],
		passwordRules: [
			v=> !!v || 'Name is required',
			v=> (v && v.length>= 6) || 'Password must be more or equal than 6 characters',
		]
		} 	
	},
	computed: {
	loading() {
		return this.$store.getters.loading
	}
	},
	
	methods: 
	{
		onSubmit()
		{
			if(this.$refs.form.validate())
			{
				const user = 
				{
					email:this.email,
					password:this.password
				}
				this.$store.dispatch('registerUser', user)
				.then(() => {
		this.$router.push("/")
	})
	.catch((err) => {
		console.log(err.message)
	})

			}
		}
	},




} 
</script>

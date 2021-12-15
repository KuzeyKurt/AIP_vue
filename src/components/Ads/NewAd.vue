<template> 
	<v-container>
		<v-layout row> 
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3 mt-3">Create Ad</h1>
				<v-form v-model="valid" ref="form" validation>
					<v-text-field
					name="title" 
					label="Ad Title" 
					type="text" 
					v-model="title"
					:rules="[ v => !!v || 'Title is required']" 
					>
					</v-text-field>
					<v-textarea  
					name="description" 
					label="Ad Description" 
					type="text" 
					v-model="description"
					:rules="[ v => !!v || 'Description is required']"
					class="mb-3" 
					></v-textarea>
					</v-form>
					<v-layout  row>
						<v-flex xs12>
						<v-btn 
						class="mt-3"
						color="warning">
						Upload
						<v-icon right dark>mdi-cloud-upload</v-icon>
						</v-btn>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12>
						<img 	src="https://images.greelane.com/proxy?url=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FbGQ3QmmPJ_mEWqdObcA_iHCByrw%3D%2F1500x1000%2Ffilters%3Afill%28auto%2C1%29%2FGettyImages-612789276-5c76bafc46e0fb00019b8cf9.jpg&width=750" height="150" class="mt-3">
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12>
						<v-switch
						v-model="promo"
						label="Ad to Promo?"
						></v-switch>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12>
						<v-spacer></v-spacer>
						<v-btn 
						color="success"
						@click="createAd" 
						>Create Ad</v-btn>
						</v-flex>
					</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
export default {
	data () { 
		return {
			valid: false,
			title: "",
			description: "",
			promo: false
		} 	
	},
	methods: {
		createAd(){
			if (this.$refs.form.validate()){
			const ad = {
				title: this.title,
				desc: this.description,
				promo: this.promo,
				src: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/rtx_3090_21_gbps_memory_micron.png"
			}
			this.$store.dispatch("createAd", ad)

			}
		}
	}


} 
</script>
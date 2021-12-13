<template> 
	<v-container>
	<v-layout row> 
	<v-flex xs12>
	<v-card class="mt-5">
	<v-img
	height="300px"
	src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
	></v-img>
	<v-card-text>
	<h1 class="text--primary mb-3">Lorem Ipsum</h1>
	<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	</v-card-text>
	<v-card-actions>
	<v-spacer></v-spacer>
	<v-btn text class="warning">Edit</v-btn>
	<v-btn class="success">Buy</v-btn>
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
		} 	
	}
} 
</script>

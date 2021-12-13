<template> 
	<v-container>
		<v-layout row> 
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3 mt-3">My ads</h1>
				<v-card class="elevation-10 mb-5" v-for="ad in ads" :key="ad.id">
					<v-layout row>
						<v-flex xs4 class="pl-3">
							<v-img
								:src="ad.src"
								height="175px">
							</v-img>	
						</v-flex>
						<v-flex xs8 class="pr-3">
						<v-card-text>
							<h2 class="text--primary">{{ad.title}}</h2>
							<p>{{ad.desc}}</p>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn 
								color="primary"
								:to="'/ad/' + ad.id">
								Open
							</v-btn>
						</v-card-actions>	
						</v-flex>
					</v-layout>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data () { 
	return {
	ads:[
	{
	title:"First",
	desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	promo: true,
	src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
	id:"1"
	},
	{
	title:"Second",
	desc:"Second Desc",
	promo: true,
	src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
	id:"2"
	},
	{
	title:"Third",
	desc:"Thitd Desc",
	promo: true,
	src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
	id:"3"
	},
	{
	title:"Fouth",
	desc:"Fouth Desc",
	promo: true,
	src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
	id:"4"
	}
	]
} 	
}
} 
</script>
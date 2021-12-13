<template> 
	<div>
	<v-container fluid>
		<v-layout row> 
			<v-flex xs12>
				<v-carousel>
					<v-carousel-item
						v-for="ad in ads"
						:key="ad.id"
						:src="ad.src"
					>
					<div class="ad-link">
						<v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
					</div>
					</v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout> 
	</v-container>
	<v-container grid-list-lg>
		<v-layout row wrap> 
			<v-flex xs12 sm6 md4
			v-for="ad in ads"
			:key="ad.id">
				<v-card>
					<v-img
					:src="ad.src"
					height="200px"
					></v-img>
					<v-card-title primary-title>
					<div>
						<h3 class="headline mb0">
						{{ad.title}}</h3>
						<div>{{ad.desc}}</div>
					</div>
					</v-card-title>
					<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text :to="'/ad/' + ad.id">Open</v-btn>
					<v-btn raised color="primary">
						Buy
					</v-btn>
					</v-card-actions>				
				</v-card>
			</v-flex>
		</v-layout> 
	</v-container>
	</div>
</template>

<script>
export default {
	data () { 
		return {
			ads:[
			{
				title:"First",
				desc:"First Desc",
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

<style scoped>
	.ad-link {
		position:absolute;
		bottom: 50px;
		left:50%;
		background: rgb(0,0,0,0.5);
		transform: translate(-50%,0);
		padding: 5px 15px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
	}
</style>
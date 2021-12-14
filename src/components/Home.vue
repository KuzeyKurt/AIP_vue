<template> 
	<div>
	<v-container fluid>
		<v-layout row> 
			<v-flex xs12>
				<v-carousel>
					<v-carousel-item
						v-for="ad in promoAds"
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
	computed:  { 
		promoAds() {
			return this.$store.getters.promoAds
		},
		ads() {
			return this.$store.getters.ads
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
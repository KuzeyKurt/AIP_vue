<template> 
	<v-container>
	<v-layout row> 
	<v-flex xs12>
		<h1>{{ id }}</h1>
	<v-card class="mt-5">
	<v-img
	height="300px"
	src="https://99px.ru/sstorage/53/2020/01/tmb_283318_749453.jpg"
	></v-img>
	<v-card-text>
	<h1 class="text--primary mb-3">Эпизод I: Скрытая угроза</h1>
	<p>Неспокойные времена настали для Галактической Республики. Налогообложение торговых путей к отдаленным солнечным системам стало причиной раздоров.

В стремлении добиться своего обуянная алчностью Торговая Федерация с помощью мощных боевых кораблей взяла в кольцо блокады маленькую планету Набу, лишив её всех поставок.

В то время как члены Конгресса Республики ведут напряженные дебаты в связи с тревожными событиями, Верховный канцлер втайне от всех поручил двум рыцарям-джедаям — хранителям мира и справедливости в Галактике — урегулировать конфликт…</p>
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
	props: ['id'],
	computed:{
		ad(){
			const id = this.id
			return this.$store.getters.adById(id)
		}
	},
	data () { 
return {
		} 	
	}
} 
</script>

export default {
	state: {
		ads:[
                {
                    title:"ZZ TOP",
                    desc:"The legendary group is coming",
                    promo: true,
                    src: "https://images.greelane.com/proxy?url=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FbGQ3QmmPJ_mEWqdObcA_iHCByrw%3D%2F1500x1000%2Ffilters%3Afill%28auto%2C1%29%2FGettyImages-612789276-5c76bafc46e0fb00019b8cf9.jpg&width=750",
                    id:"1"
                },
                {
                    title:"Fantastic Beasts and Crimes of Grindevald",
                    desc:"Second part of magic saga",
                    promo: true,
                    src: "https://digitalspyuk.cdnds.net/17/46/768x432/gallery-1510842200-fantastic-beasts-first-look-image-1.jpg",
                    id:"2"
                },
                {
                    title:"Spider-Man: No way to home",
                    desc:"Start of Multiverse",
                    promo: true,
                    src: "https://7nebonnov.ru/upload/iblock/8a5/p2mgv0s89z3uqymqyfc625tgum9hbubo/1920x1080.jpg",
                    id:"3"
                },
                {
                    title:"Star Wars: Eclipse",
                    desc:"Story about Old Republic 200 years before Galactic Empire from masters - Quantic Dream",
                    promo: true,
                    src: "https://i.ytimg.com/vi/ER-Rnbiadew/maxresdefault.jpg",
                    id:"4"
                }
            ]},
	mutations: {
        createAd(state, payload){
			state.ads.push(payload)
		}

    },
	actions: {
        createAd({commit},payload){
        payload.id = Math.random()
        commit('createAd', payload)
    }
},
	getters: {
		ads(state) {
			return state.ads
		},
		promoAds(state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},
		myAds(state) {
			return state.ads
        },
        adById(state) {
            return id => {
            return state.ads.find(ad => ad.id == id)
            }
        },
        
                
}
}
<template>
	<div class="content">
        <Banner></Banner>
	    <div class="newsList">
	    	<ul>
	            <li v-for="(item,index) in arrList" :key="index">
	                <router-link :to="'/article/' + item.id">
	                	<h2>{{index+1}} . {{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </router-link>
	            </li>
	        </ul>
	    </div>
	</div>
</template>

<script>
import BannerView from './Banner.vue'
export default {
	data () {
		return {
			arrList: []
		}
	},
    components: {
        'Banner': BannerView
	},
	mounted() {
		this.fetchData();
	},
	methods: {
		fetchData () {
			this.$http.get('src/data/index.data').then(res => {
				this.arrList = res.data;
			}).catch(err => {
				console.log(err);
			})
		}
	}
}
</script>

<style>

</style>

<template>
    <div class="content mt40">
	    <div class="newsList">
	    	<ul>
	            <li v-for="(item,index) in arrList" :key="index">
	                <a :to="'/article/'+item.id">
	                	<h2>{{index+1}} . {{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </a>
	            </li>
	        </ul>
	    </div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			arrList: []
		}
	},
	mounted() {
		this.fetchData();
	},
	methods: {
		fetchData () {
			this.$http.get('src/data/follow.data').then(res => {
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

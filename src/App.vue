<template>
<div id="add">
	<loading v-show="loading"></loading>
	<Nav v-show="headerShow"></Nav>
	<div v-show="headerShow" class="navBlock"></div>
	<transition name="slide-down">
	<keep-alive>
	<router-view class="router-view"></router-view>
	</keep-alive>
	</transition>
	<Footer></Footer>
</div>
</template>

<script>
import NavView from './components/Nav.vue'
import HomeView from './components/Home.vue'
import FooterView from './components/Footer.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
	computed: mapGetters([
		'headerShow',
		'loading'
	]),
	watch: {
		$route (to, from) {
			if (to.path === '/user-info') {
				this.$store.dispatch('hideHeader');
			} else {
				this.$store.dispatch('showHeader');
			}
		}
	},
	components: {
		'Nav': NavView,
		'Home': HomeView,
		'Footer': FooterView
	},
	mounted () {
		
	}
}
</script>

<style>
    @import './assets/css/index.css';
	.slide-down-enter-active,
	.slide-down-leave-active {
		transition: .4s all;
		opacity: .2;
	}
	.slide-down-enter,
	.slide-down-leave-to {
		opacity: 1;
		transform: translate3d(0, 6em, 0);
	}
</style>

<template lang="pug">
.lightbg
	.curtain(:style="{ top: offset }" :class="{'has-border-top' : hasBorderTop}")
	slot
</template>

<script>
export default {
	props:{
		offset:{
			type: String,
			default: '16rem'
		},
		hasBorderTop:{
			type:Boolean,
			default:false
		}
	}
}
</script>

<style lang="stylus">
.lightbg
	position relative
	.curtain
		position absolute
		bottom 0
		width 100%
		left 0
		background $bg
		z-index -1
		border-bottom 1px solid darken($bg,5%)
	.has-border-top
		border-top 1px solid darken($bg,5%)
</style>

<template>
    <header>
        <!-- <h1>{{this.$store.state.message}}</h1> -->
        <h1>{{this.getMessage}}</h1>
    </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'getMessage'
        ])
    }
}
</script>

<style>
    h1 {
        color: black;
        font-weight: 900;
        margin: 2.5rem 0 1.5rem;
    }
</style>

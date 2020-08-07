<template>
    <v-app>
        {{ nama }}
        <router-view/>
    </v-app>
</template>

<script>
    export default {
        name: 'app',
        computed: {
            nama (){
                return this.$store.state.nama
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        created () {
            //
        }
    }
</script>

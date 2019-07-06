<template>
    <section>
        <h1>{{msj}}</h1>
    </section>
</template>
<script>
    export default {
        data(){
            return{
                msj : null
            }
        },
        created() {
            this.msj = "Hello, i am Vue"
        }
    }
</script>
<style lang="scss" scoped>
    h1 {
        color: #ff3be2;
    }
</style>

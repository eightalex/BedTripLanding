<template>
    <section class="container">
        <slot/>
    </section>
</template>

<script lang="ts">
    import {Vue} from 'vue-class-component';

    export default class Container extends Vue {}
</script>

<style lang="scss" scoped>
    @import "../../scss/variables";

    .container {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: $breakpoint-laptop;
    }
</style>

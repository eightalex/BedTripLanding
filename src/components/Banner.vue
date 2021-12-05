<template>
    <div class="banner">
        <h2 class="banner__title">
            <slot></slot>
        </h2>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'vue-class-component';

    export default class Banner extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins";

    .banner {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: 335px;
        background-image: url("../assets/banner/1.webp");
        background-position: 10% 50%;
        background-size: cover;
        background-repeat: no-repeat;

        &__title {
            margin: 0;
            color: var(--background-color);
            font-weight: bold;
            font-size: var(--text-size-l);
        }

        @include mq(1100px) {
            width: 500px;
            height: 275px;
        }

        @include mq(500px) {
            min-height: 200px;
            width: 100%;
            height: auto;
        }
    }
</style>

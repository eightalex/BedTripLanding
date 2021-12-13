<template>
    <span class="gallery-cloth" :class="type">
        <span class="gallery-cloth__title">
            <slot name="title"/>
        </span>
        <img :src="src" class="gallery-cloth__img" alt="Cloth example">
        <span class="gallery-cloth__text">
            <slot/>
        </span>
    </span>
</template>

<script lang="ts">
    import {Vue} from 'vue-class-component';
    import {Prop} from 'vue-property-decorator';

    export default class GalleryCloth extends Vue {
        @Prop({type: String, required: true}) src!: string;
        @Prop({type: String, required: true}) type!: string;
    }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins";
    @import "../scss/variables";

    .gallery-cloth {
        $img-width: 130px;

        display: flex;
        align-items: flex-start;
        flex-direction: column;

        &.grey {
            .gallery-cloth__text {
                color: #b1a595;
            }
        }

        &.brown {
            .gallery-cloth__text {
                color: #7b5537;
            }
        }

        &.pink {
            .gallery-cloth__text {
                color: #dea981;
            }
        }

        &.blue {
            .gallery-cloth__text {
                color: #4b5062;
            }
        }

        &.lightbrown {
            .gallery-cloth__text {
                color: #a98668;
            }
        }

        &__title {
            margin-bottom: 10px;
            font-size: var(--text-size-m);
            font-weight: bold;
        }

        &__img {
            width: 100%;
            max-width: $img-width;
        }

        &__text {
            margin-top: 10px;
            font-size: var(--text-size);
            font-weight: bold;
            width: $img-width;
            text-align: center;
        }

        @include mq($breakpoint-mobile-s) {
            &__text {
                font-size: var(--text-size);
            }
        }
    }
</style>

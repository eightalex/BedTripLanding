<template>
    <article class="gallery">
        <container>
            <gallery-item
                src="img/gallery/1.webp"
                class="gallery__item"
                :telegram="link.telegram"
                :viber="link.viber"
            >
                Постільна білизна за вашими розмірами
                <template #telegram>Пиши нам сюди</template>
                <template #viber>Чи сюди</template>
            </gallery-item>
            <gallery-item
                src="img/gallery/2.webp"
                class="gallery__item"
                :telegram="link.telegram"
                :viber="link.viber"
                reverse
            >
                Високоякісний сатин
                <template #telegram>Тисни сюди</template>
                <template #viber>Чи сюди</template>
            </gallery-item>
            <banner class="gallery__banner">Це може бути твоє ліжечко</banner>
            <gallery-item
                src="img/gallery/3.webp"
                class="gallery__item"
                :telegram="link.telegram"
                :viber="link.viber"
            >
                Доречі, сатин і прохолодний і м'якенький
                <template #telegram>Можна писати сюди</template>
                <template #viber>Або сюди</template>
            </gallery-item>
            <gallery-item
                src="img/gallery/4.webp"
                class="gallery__item"
                :telegram="link.telegram"
                :viber="link.viber"
                reverse
            >
                Солоденьких снів
                <template #telegram>Наш телеграм</template>
                <template #viber>Та вайбер</template>
            </gallery-item>
        </container>
    </article>
</template>

<script lang="ts">
    import {Options, Vue} from 'vue-class-component';
    import {CONTACTS} from '@/config/contacts';
    import Container from '@/components/layout/Container.vue';
    import GalleryItem from '@/components/GalleryItem.vue';
    import LinkButton from '@/components/ui/LinkButton.vue';
    import Banner from '@/components/Banner.vue';

    @Options({
        components: {
            Container,
            GalleryItem,
            LinkButton,
            Banner,
        },
    })
    export default class Gallery extends Vue {
        public link = {
            telegram: CONTACTS.TELEGRAM,
            viber: CONTACTS.PHONE,
            phone: CONTACTS.PHONE,
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins";
    @import "../scss/variables";

    .gallery {
        $img-width: 500px;

        &__item {
            & + & {
                margin-top: 50px;
            }
        }

        &__banner {
            margin: 100px auto;
        }

        @include mq($breakpoint-laptop) {
            &__item {
                & + & {
                    margin-top: 120px;
                }
            }
        }

        @include mq($img-width) {
            &__banner {
                min-height: 200px;
                width: 100%;
                height: auto;
            }
        }
    }
</style>

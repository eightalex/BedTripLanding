<template>
    <article class="gallery">
        <container>
            <gallery-item
                src="img/gallery/1.webp"
                src-cloth="img/gallery/1_cloth.webp"
                cloth-type="grey"
                class="gallery__item"
                :telegram="link.telegram"
                :viber="link.viber"
            >
                Постільна білизна за вашими розмірами
                <template #clothTitle>А може це твій колір?</template>
                <template #cloth>Несамовито сірий</template>
                <template #telegram>Пиши нам сюди</template>
                <template #viber>Чи сюди</template>
            </gallery-item>
            <gallery-item
                src="img/gallery/2.webp"
                src-cloth="img/gallery/2_cloth.webp"
                cloth-type="brown"
                class="gallery__item"
                :telegram="link.telegram"
                :viber="link.viber"
                reverse
            >
                Високоякісний сатин
                <template #clothTitle>Як тобі такий?</template>
                <template #cloth>Густий кавовий</template>
                <template #telegram>Тисни сюди</template>
                <template #viber>Чи сюди</template>
            </gallery-item>
            <banner class="gallery__banner">Це може бути твоє ліжко</banner>
            <gallery-item
                src="img/gallery/3.webp"
                src-cloth="img/gallery/3_cloth.webp"
                cloth-type="pink"
                class="gallery__item"
                :telegram="link.telegram"
                :viber="link.viber"
            >
                Доречі, сатин і прохолодний і м'якенький
                <template #clothTitle>І дуже красивий:</template>
                <template #cloth>Дивовижний рожевий</template>
                <template #telegram>Можна писати сюди</template>
                <template #viber>Або сюди</template>
            </gallery-item>
            <gallery-item
                src="img/gallery/4.webp"
                src-cloth="img/gallery/4_cloth.webp"
                cloth-type="blue"
                class="gallery__item"
                :telegram="link.telegram"
                :viber="link.viber"
                reverse
            >
                Баунті — це дурниця. Наша постіль — ось справжня насолода!
                <template #clothTitle>Твій колір для справжньої насолоди:</template>
                <template #cloth>Глибокий синій</template>
                <template #telegram>Наш телеграм</template>
                <template #viber>Та вайбер</template>
            </gallery-item>
            <gallery-item
                src="img/gallery/5.webp"
                src-cloth="img/gallery/5_cloth.webp"
                cloth-type="lightbrown"
                class="gallery__item"
                :telegram="link.telegram"
                :viber="link.viber"
            >
                Солодких снів
                <template #clothTitle>На твоєму приємному ліжку:</template>
                <template #cloth>Ніжний какао</template>
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

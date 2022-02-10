<template>
    <article class="gallery">
        <container>
            <gallery-item
                src="img/gallery/jpg/1.jpg"
                alt="Постіль під замовлення з сатину сірого кольору (однотонний)"
                src-cloth="img/gallery/jpg/1_cloth.jpg"
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
                src="img/gallery/jpg/2.jpg"
                src-cloth="img/gallery/jpg/2_cloth.jpg"
                cloth-type="brown"
                class="gallery__item"
                :alt="'Пошити постіль на замовлення за вашими розмірами у Києві (Сімейний).' +
                'Колір Какао, однотонний'"
                :telegram="link.telegram"
                :viber="link.viber"
                reverse
            >
                Високоякісний сатин
                <template #clothTitle>Як тобі такий?</template>
                <template #cloth>Смачне какао</template>
                <template #telegram>Тисни сюди</template>
                <template #viber>Чи сюди</template>
            </gallery-item>
            <gallery-item
                src="img/gallery/jpg/3.jpg"
                src-cloth="img/gallery/jpg/3_cloth.jpg"
                cloth-type="pink"
                class="gallery__item"
                :alt="'Пошив постільної білизни на замовлення (Півтораспальний).' +
                'Колір: Рожевий, однотонний'"
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
                src="img/gallery/jpg/4.jpg"
                src-cloth="img/gallery/jpg/4_cloth.jpg"
                cloth-type="blue"
                class="gallery__item"
                :alt="'Пошив постільної білизни на замовлення з резинкою (Двоспальний).' +
                'Колір: синій, однотонний'"
                :telegram="link.telegram"
                :viber="link.viber"
                reverse
            >
                Приємний на дотик
                <template #clothTitle>І виглядає гарно:</template>
                <template #cloth>Глибокий синій</template>
                <template #telegram>Наш телеграм</template>
                <template #viber>Та вайбер</template>
            </gallery-item>
            <gallery-item
                src="img/gallery/jpg/5.jpg"
                src-cloth="img/gallery/jpg/5_cloth.jpg"
                cloth-type="lightbrown"
                class="gallery__item"
                :alt="'Купити комплект постільної білизни з сатину (Євро).' +
                'Колір: Ніжний пудровий, однотонний'"
                :telegram="link.telegram"
                :viber="link.viber"
            >
                Солодких снів
                <template #clothTitle>На твоєму приємному ліжку:</template>
                <template #cloth>Ніжний пудровий</template>
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

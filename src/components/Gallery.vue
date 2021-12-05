<template>
    <article class="gallery">
        <figure class="gallery__item">
            <img src="../assets/gallery/1.webp" alt="Photo" class="gallery__img">
            <figcaption class="gallery__text">
                Не можешь найти комплект по своим размерам?
                <span class="gallery__socials">
                    <social-link type="telegram" :href="link.telegram">
                        Напиши нам!
                    </social-link>
                    <social-link type="viber" :href="link.viber">
                        Сделай заказ!
                    </social-link>
                </span>
            </figcaption>
        </figure>
        <figure class="gallery__item gallery__item_reverse">
            <img src="../assets/gallery/2.webp" alt="Photo" class="gallery__img">
            <figcaption class="gallery__text">
                Поспеши к нам! Их есть у нас! Очень много!
                <span class="gallery__socials">
                    <social-link type="telegram" :href="link.telegram">
                        Закажешь?
                    </social-link>
                    <social-link type="viber" :href="link.viber">
                        Напишешь?
                    </social-link>
                </span>
            </figcaption>
        </figure>
        <banner class="gallery__banner">Хочешь лежать здесь?</banner>
        <figure class="gallery__item">
            <img src="../assets/gallery/3.webp" alt="Photo" class="gallery__img">
            <figcaption class="gallery__text">
                Это твой лучший выбор в жизни. Не пропусти этот шанс!
                <span class="gallery__socials">
                    <social-link type="telegram" :href="link.telegram">
                        Поторопись!
                    </social-link>
                    <social-link type="viber" :href="link.viber">
                        Нажимай!
                    </social-link>
                </span>
            </figcaption>
        </figure>
        <figure class="gallery__item gallery__item_reverse">
            <img src="../assets/gallery/4.webp" alt="Photo" class="gallery__img">
            <figcaption class="gallery__text">
                Заказывай, веселись, спи, наслаждайся, радуйся жизни!
                <span class="gallery__socials">
                    <social-link type="telegram" :href="link.telegram">
                        Порадуй себя!
                    </social-link>
                    <social-link type="viber" :href="link.viber">
                        Жми!
                    </social-link>
                </span>
            </figcaption>
        </figure>
    </article>
</template>

<script lang="ts">
    import {Options, Vue} from 'vue-class-component';
    import {CONTACTS} from '@/config/contacts';
    import SocialLink from '@/components/ui/SocialLink.vue';
    import Banner from '@/components/Banner.vue';

    @Options({
        components: {
            SocialLink,
            Banner,
        },
    })
    export default class Gallery extends Vue {
        public link = {
            telegram: `https://t.me/${CONTACTS.TELEGRAM}`,
            viber: `viber://chat/?number=${CONTACTS.PHONE}`,
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins";

    .gallery {
        $breakpoint: 1100px;

        width: 100%;
        max-width: $breakpoint;

        &__item {
            display: flex;
            align-items: flex-start;
            margin: 0;

            &_reverse {
                flex-direction: row-reverse;
            }

            & + & {
                margin-top: 50px;
            }
        }

        &__img {
            width: 100%;
            max-width: 500px;
        }

        &__text {
            margin-top: 70px;
            padding: 20px 25px;
            font-size: var(--text-size-l);
            font-weight: bold;
            width: 400px;
        }

        &__socials {
            display: flex;
            margin-top: 20px;
        }

        &__banner {
            margin-top: 100px;
            margin-bottom: 100px;
        }

        @include mq($breakpoint) {
            &__item {
                flex-direction: column-reverse;
                align-items: center;

                &_reverse {
                    flex-direction: column-reverse;
                }

                & + & {
                    margin-top: 120px;
                }
            }

            &__text {
                margin-top: 0;
                width: 100%;
                max-width: 500px;
            }
        }

        @include mq(500px) {
            &__socials {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }
</style>

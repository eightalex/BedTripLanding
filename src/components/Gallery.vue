<template>
    <article class="gallery">
        <container>
            <figure class="gallery__item">
                <img src="../assets/gallery/1.webp" alt="Photo" class="gallery__img">
                <figcaption class="gallery__text">
                    Не можешь найти комплект по своим размерам?
                    <span class="gallery__socials">
                    <link-button class="gallery__link-button" type="telegram" :href="link.telegram">
                        Напиши нам!
                    </link-button>
                    <link-button class="gallery__link-button" type="viber" :href="link.viber">
                        Сделай заказ!
                    </link-button>
                </span>
                    <span class="gallery__phone">
                    <link-button class="gallery__link-button" type="phone" :href="link.phone">
                        {{formattedPhone}}
                    </link-button>
                </span>
                </figcaption>
            </figure>
            <figure class="gallery__item gallery__item_reverse">
                <img src="../assets/gallery/2.webp" alt="Photo" class="gallery__img">
                <figcaption class="gallery__text">
                    Поспеши к нам! Их есть у нас! Очень много!
                    <span class="gallery__socials">
                    <link-button class="gallery__link-button" type="telegram" :href="link.telegram">
                        Закажешь?
                    </link-button>
                    <link-button class="gallery__link-button" type="viber" :href="link.viber">
                        Напишешь?
                    </link-button>
                </span>
                    <span class="gallery__phone">
                    <link-button class="gallery__link-button" type="phone" :href="link.phone">
                        {{formattedPhone}}
                    </link-button>
                </span>
                </figcaption>
            </figure>
            <banner class="gallery__banner">Хочешь лежать здесь?</banner>
            <figure class="gallery__item">
                <img src="../assets/gallery/3.webp" alt="Photo" class="gallery__img">
                <figcaption class="gallery__text">
                    Это твой лучший выбор в жизни. Не пропусти этот шанс!
                    <span class="gallery__socials">
                    <link-button class="gallery__link-button" type="telegram" :href="link.telegram">
                        Поторопись!
                    </link-button>
                    <link-button class="gallery__link-button" type="viber" :href="link.viber">
                        Нажимай!
                    </link-button>
                </span>
                    <span class="gallery__phone">
                    <link-button class="gallery__link-button" type="phone" :href="link.phone">
                        {{formattedPhone}}
                    </link-button>
                </span>
                </figcaption>
            </figure>
            <figure class="gallery__item gallery__item_reverse">
                <img src="../assets/gallery/4.webp" alt="Photo" class="gallery__img">
                <figcaption class="gallery__text">
                    Заказывай, веселись, спи, наслаждайся, радуйся жизни!
                    <span class="gallery__socials">
                    <link-button class="gallery__link-button" type="telegram" :href="link.telegram">
                        Порадуй себя!
                    </link-button>
                    <link-button class="gallery__link-button" type="viber" :href="link.viber">
                        Жми!
                    </link-button>
                </span>
                    <span class="gallery__phone">
                    <link-button class="gallery__link-button" type="phone" :href="link.phone">
                        {{formattedPhone}}
                    </link-button>
                </span>
                </figcaption>
            </figure>
        </container>
    </article>
</template>

<script lang="ts">
    import {Options, Vue} from 'vue-class-component';
    import {CONTACTS} from '@/config/contacts';
    import {PhoneFormatter} from '@/utils/PhoneFormatter';
    import Container from '@/components/layout/Container.vue';
    import LinkButton from '@/components/ui/LinkButton.vue';
    import Banner from '@/components/Banner.vue';

    @Options({
        components: {
            Container,
            LinkButton,
            Banner,
        },
    })
    export default class Gallery extends Vue {
        public link = {
            telegram: `https://t.me/${CONTACTS.TELEGRAM}`,
            viber: `viber://chat/?number=${CONTACTS.PHONE}`,
            phone: `tel:${CONTACTS.PHONE}`,
        }

        get formattedPhone(): string {
            return PhoneFormatter.format(CONTACTS.PHONE);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins";
    @import "../scss/variables";

    .gallery {
        $img-width: 500px;

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
            max-width: $img-width;
        }

        &__text {
            margin-top: 70px;
            padding: 20px 25px;
            font-size: var(--text-size-xl);
            font-weight: bold;
            width: 400px;
        }

        &__link-button {
            & + & {
                margin-left: 10px;
            }
        }

        &__socials {
            display: flex;
            margin-top: 20px;
        }

        &__phone {
            display: flex;
            margin-top: 10px;
        }

        &__banner {
            margin: 100px auto;
        }

        @include mq($breakpoint-laptop) {
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
                max-width: $img-width;
            }
        }

        @include mq($breakpoint-mobile-s) {
            &__text {
                font-size: var(--text-size-l);
            }
        }

        @include mq($img-width) {
            &__link-button {
                & + & {
                    margin-top: 15px;
                    margin-left: 0;
                }
            }

            &__socials {
                flex-direction: column;
                align-items: flex-start;
            }

            &__phone {
                margin-top: 15px;
            }

            &__banner {
                min-height: 200px;
                width: 100%;
                height: auto;
            }
        }
    }
</style>

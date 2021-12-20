<template>
    <figure class="gallery-item" :class="{reverse}">
        <img :src="src" class="gallery-item__img" :alt="alt">
        <figcaption class="gallery-item__content">
            <span class="gallery-item__text">
                <slot/>
            </span>
            <gallery-cloth :src="srcCloth" :type="clothType" class="gallery-item__cloth">
                <template #title>
                    <slot name="clothTitle"></slot>
                </template>
                <slot name="cloth"/>
            </gallery-cloth>
            <span class="gallery-item__socials">
                <link-button class="gallery-item__link-button"
                             type="telegram"
                             :href="link.telegram">
                    <slot name="telegram"/>
                </link-button>
                <link-button class="gallery-item__link-button"
                             type="viber"
                             :href="link.viber">
                    <slot name="viber"/>
                </link-button>
            </span>
            <span v-if="phone" class="gallery-item__phone">
                <link-button class="gallery-item__link-button" type="phone" :href="link.phone">
                    {{formattedPhone}}
                </link-button>
            </span>
        </figcaption>
    </figure>
</template>

<script lang="ts">
    import {Options, Vue} from 'vue-class-component';
    import {Prop} from 'vue-property-decorator';
    import {PhoneFormatter} from '@/utils/PhoneFormatter';
    import GalleryCloth from '@/components/GalleryCloth.vue';
    import LinkButton from '@/components/ui/LinkButton.vue';

    @Options({
        components: {
            LinkButton,
            GalleryCloth,
        },
    })
    export default class GalleryItem extends Vue {
        @Prop({type: Boolean}) reverse!: boolean;
        @Prop({type: String, required: true}) src!: string;
        @Prop({type: String, required: true}) alt!: string;
        @Prop({type: String, required: true}) srcCloth!: string;
        @Prop({type: String, required: true}) clothType!: string;
        @Prop({type: String, required: true}) telegram!: string;
        @Prop({type: String, required: true}) viber!: string;
        @Prop({type: String}) phone!: string;

        public link = {
            telegram: `https://t.me/${this.telegram}`,
            viber: `viber://chat/?number=${this.viber}`,
            phone: `tel:${this.phone}`,
        };

        get formattedPhone(): string {
            return PhoneFormatter.format(this.phone);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins";
    @import "../scss/variables";

    .gallery-item {
        $img-width: 500px;

        display: flex;
        align-items: flex-start;
        margin: 0;
        padding: 0 25px;

        &.reverse {
            flex-direction: row-reverse;
        }

        &__img {
            width: 100%;
            max-width: $img-width;
        }

        &__content {
            margin-top: 70px;
            padding: 20px 25px;
            width: 400px;
        }

        &__text {
            font-size: var(--text-size-xl);
            font-weight: bold;
        }

        &__cloth {
            margin-top: 30px;
        }

        &__socials {
            display: flex;
            margin-top: 30px;
        }

        &__phone {
            display: flex;
            margin-top: 10px;
        }

        &__link-button {
            & + & {
                margin-left: 10px;
            }
        }

        @include mq($breakpoint-laptop) {
            flex-direction: column-reverse;
            align-items: center;
            padding: 0;

            &.reverse {
                flex-direction: column-reverse;
            }

            &__content {
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
        }
    }
</style>

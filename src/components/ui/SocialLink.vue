<template>
    <a class="social-link"
       :class="`social-link_${type}`"
       :href="href"
       target="_blank"
       rel="noopener">
        <img v-if="type === socialType.Telegram"
             class="social-link__icon"
             src="../../assets/ico/telegram.svg"
             alt="Telegram icon">
        <img v-if="type === socialType.Viber"
             class="social-link__icon"
             src="../../assets/ico/viber.png"
             srcset="../../assets/ico/viber.png 1x,
                     ../../assets/ico/viber_2x.png 2x"
             alt="Viber logo">
        <slot></slot>
    </a>
</template>

<script lang="ts">
    import {Vue} from 'vue-class-component';
    import {Prop} from 'vue-property-decorator';
    import {SocialType} from '@/types/SocialType';

    export default class SocialLink extends Vue {
        @Prop({type: String, required: true}) type!: SocialType;
        @Prop({type: String, required: true}) href!: string;
        public socialType = SocialType;
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/mixins";

    .social-link {
        display: inline-flex;
        align-items: center;
        padding: 3px 10px 3px 5px;
        font-size: var(--text-size);
        background: none;
        border: 1px solid currentColor;
        border-radius: 3px;
        text-decoration: none;
        cursor: pointer;

        &_telegram {
            color: var(--telegram-color);

            &:hover {
                background-color: rgba(var(--telegram-color-rgb), 0.2);
            }
        }

        &_viber {
            color: var(--viber-color);

            &:hover {
                background-color: rgba(var(--viber-color-rgb), 0.2);;
            }
        }

        & + & {
            margin-left: 10px;
        }

        &__icon {
            margin-right: 5px;
            width: auto;
            height: 25px;
        }

        @include mq(1100px) {
            padding: 6px 20px 6px 10px;
        }

        @include mq(500px) {
            & + & {
                margin-top: 15px;
                margin-left: 0;
            }
        }
    }
</style>

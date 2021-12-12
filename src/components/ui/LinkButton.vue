<template>
    <a class="link-button"
       :class="`link-button_${type}`"
       :href="href"
       target="_blank"
       rel="noopener">
        <img v-if="type === buttonType.Telegram"
             class="link-button__icon"
             src="../../assets/ico/telegram.svg"
             alt="Telegram icon">
        <img v-if="type === buttonType.Viber"
             class="link-button__icon"
             src="../../assets/ico/viber.png"
             srcset="../../assets/ico/viber.png 1x,
                     ../../assets/ico/viber_2x.png 2x"
             alt="Viber logo">
        <img v-if="type === buttonType.Phone"
             class="link-button__icon"
             src="../../assets/ico/phone.svg"
             alt="Phone icon">
        <slot></slot>
    </a>
</template>

<script lang="ts">
    import {Vue} from 'vue-class-component';
    import {Prop} from 'vue-property-decorator';
    import {ButtonType} from '@/types/ButtonType';

    export default class LinkButton extends Vue {
        @Prop({type: String, required: true}) type!: ButtonType;
        @Prop({type: String, required: true}) href!: string;
        public buttonType = ButtonType;
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/mixins";
    @import "../../scss/variables";

    .link-button {
        display: inline-flex;
        align-items: center;
        padding: 3px 10px 3px 5px;
        font-size: var(--text-size);
        color: var(--link-color);
        background: none;
        border: 1px solid currentColor;
        border-radius: 3px;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background-color: rgba(var(--link-color-rgb), 0.2);
        }

        &_telegram {
            color: var(--telegram-color);

            &:hover {
                background-color: rgba(var(--telegram-color-rgb), 0.2);
            }
        }

        &_viber {
            color: var(--viber-color);

            &:hover {
                background-color: rgba(var(--viber-color-rgb), 0.2);
            }
        }

        &__icon {
            margin-right: 5px;
            width: auto;
            height: 25px;
        }

        @include mq($breakpoint-laptop) {
            padding: 6px 20px 6px 10px;
        }
    }
</style>

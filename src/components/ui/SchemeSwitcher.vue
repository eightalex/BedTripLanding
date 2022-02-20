<template>
    <fieldset class="switcher">
        <legend class="switcher__legend">Схема</legend>
        <input class="switcher__radio switcher__radio--light"
               type="radio"
               name="color-scheme"
               aria-label="Світла"
               :value="scheme.Light"
               :checked="isChecked(scheme.Light)"
               @change="setScheme"
        >
        <input class="switcher__radio switcher__radio--auto"
               type="radio"
               name="color-scheme"
               aria-label="Системна"
               :value="scheme.Auto"
               :checked="isChecked(scheme.Auto)"
               @change="setScheme"
        >
        <input class="switcher__radio switcher__radio--dark"
               type="radio"
               name="color-scheme"
               aria-label="Темна"
               :value="scheme.Dark"
               :checked="isChecked(scheme.Dark)"
               @change="setScheme"
        >
        <div class="switcher__status"></div>
    </fieldset>
</template>

<script lang="ts">
    import {Vue} from 'vue-class-component';
    import {Scheme} from '@/constants/scheme';
    import {SchemeHandler} from '@/services/SchemeHandler';

    export default class LinkButton extends Vue {
        public scheme = Scheme;
        private schemeHandler = new SchemeHandler();

        public mounted(): void {
            this.schemeHandler.setupScheme();
            this.schemeHandler.setupListener();
        }

        public isChecked(scheme: Scheme): boolean {
            const savedScheme = this.schemeHandler.getSavedScheme();

            return scheme === savedScheme;
        }

        public setScheme(event: Event): void {
            const target = event.target as HTMLInputElement;
            this.schemeHandler.setScheme(target.value as Scheme);
        }
    }
</script>

<style lang="scss" scoped>
    .switcher {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 2px;
        border: none;

        &__legend {
            position: absolute;
            opacity: 0;
            pointer-events: none;
        }

        &__radio {
            -webkit-appearance: none;
            appearance: none;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            width: 32px;
            height: 32px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 20px;
            color: #000;
            font-size: 21px;
            font-weight: bold;
            text-align: center;
            transition: filter 100ms ease-in;
            cursor: pointer;

            &:focus {
                outline: none;
            }

            &:focus-visible ~ .switcher__status {
                box-shadow: 0 0 0 2px black;
            }

            &:checked {
                filter: invert(1);
            }

            &--light {
                background-image: url('../../assets/scheme-switcher/sun.svg');

                &:checked {
                    & ~ .switcher__status::before {
                        left: 2px;
                    }
                }
            }

            &--auto {
                &::before {
                    content: 'A';
                }
            }

            &--dark {
                background-image: url('../../assets/scheme-switcher/moon.svg');

                &:checked {
                    & ~ .switcher__status::before {
                        left: 66px;
                    }
                }
            }
        }

        &__status {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            box-shadow: 0 0 0 2px rgb(0 0 0 / 0.2);
            border-radius: 18px;
            background-color: rgb(255 255 255 / 0.5);

            &::before {
                content: '';
                position: absolute;
                top: 2px;
                left: 34px;
                width: 32px;
                height: 32px;
                border-radius: 16px;
                background-color: #000;
                transition: left 100ms ease-in;
            }
        }
    }
</style>

<template>
    <footer class="contacts">
        <container class="contacts__container">
            <h2 class="contacts__title">А можеш нам написати на пошту:</h2>
<!--            <a :href="`tel:${phone}`" class="contacts__link">{{formattedPhone}}</a>-->
            <a :href="`mailto:${email}`" class="contacts__link">{{email}}</a>
        </container>
    </footer>
</template>

<script lang="ts">
    import {Options, Vue} from 'vue-class-component';
    import {CONTACTS} from '@/config/contacts';
    import {PhoneFormatter} from '@/utils/PhoneFormatter';
    import Container from '@/components/layout/Container.vue';

    @Options({
        components: {
            Container,
        },
    })
    export default class Contacts extends Vue {
        public readonly phone = CONTACTS.PHONE;
        public readonly email = CONTACTS.EMAIL;

        get formattedPhone(): string {
            return PhoneFormatter.format(this.phone);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins";
    @import "../scss/variables";

    .contacts {
        margin-top: 70px;
        padding: 40px 40px 100px;

        &__container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        &__title {
            margin: 0;
            font-size: var(--text-size-xl);
        }

        &__link {
            display: block;
            margin-top: 15px;
            color: var(--link-color);
            font-weight: bold;
            font-size: var(--text-size-l);
            border-bottom: 2px solid var(--background-color);
            word-break: break-all;
            text-decoration: none;

            &:hover {
                border-bottom: 2px solid;
            }
        }

        @include mq($breakpoint-mobile-l) {
            &__title {
                font-size: var(--text-size-l);
            }

            &__link {
                margin-top: 10px;
                font-size: var(--text-size-m);
            }
        }

        @include mq($breakpoint-mobile-s) {
            &__title {
                font-size: var(--text-size-m);
            }

            &__link {
                margin-top: 10px;
                font-size: var(--text-size);
            }
        }
    }
</style>

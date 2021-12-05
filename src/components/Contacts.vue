<template>
    <footer class="contacts">
        <h2 class="contacts__title">А можешь написать письмо или позвонить:</h2>
        <a :href="`tel:${phone}`" class="contacts__link">{{formattedPhone}}</a>
        <a :href="`mailto:${email}`" class="contacts__link">{{email}}</a>
    </footer>
</template>

<script lang="ts">
    import {Vue} from 'vue-class-component';
    import {CONTACTS} from '@/config/contacts';
    import {PhoneFormatter} from '@/utils/PhoneFormatter';

    export default class Contacts extends Vue {
        public readonly phone = CONTACTS.PHONE;
        public readonly email = CONTACTS.EMAIL;

        get formattedPhone(): string {
            return PhoneFormatter.format(this.phone);
        }
    }
</script>

<style lang="scss" scoped>
    .contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 70px;
        padding: 40px 40px 100px;
        text-align: center;

        &__title {
            margin: 0;
            font-size: var(--text-size-l);
        }

        &__link {
            display: block;
            margin-top: 15px;
            color: var(--link-color);
            font-weight: bold;
            font-size: 30px;
            border-bottom: 2px solid var(--background-color);
            word-break: break-all;
            text-decoration: none;

            &:hover {
                border-bottom: 2px solid;
            }
        }
    }
</style>

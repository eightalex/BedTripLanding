<template>
    <div class="bed-trip">
        <div class="bed-trip__logo">
            <logo animated/>
        </div>
        <div class="bed-trip__content">
            <gallery/>
        </div>
        <contacts/>
    </div>
</template>

<script lang="ts">
    import {Options, Vue} from 'vue-class-component';
    import Logo from '@/components/Logo.vue';
    import Gallery from '@/components/Gallery.vue';
    import Contacts from '@/components/Contacts.vue';

    @Options({
        components: {
            Logo,
            Gallery,
            Contacts,
        },
    })
    export default class App extends Vue {}
</script>

<style lang="scss">
    @import "scss/variables";
    @import "scss/global";

    .bed-trip {
        &__logo {
            display: flex;
            justify-content: center;
            margin: 50px 0 70px;
        }

        &__content {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    }
</style>

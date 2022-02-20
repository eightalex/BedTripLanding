<template>
    <div class="bed-trip">
        <div class="bed-trip__logo">
            <logo animated/>
        </div>
        <div class="bed-trip__scheme-switcher">
            <scheme-switcher/>
        </div>
        <gallery/>
        <contacts/>
        <bot-content v-show="isBot"/>
    </div>
</template>

<script lang="ts">
    import {Options, Vue} from 'vue-class-component';
    import Logo from '@/components/Logo.vue';
    import Gallery from '@/components/Gallery.vue';
    import Contacts from '@/components/Contacts.vue';
    import BotContent from '@/components/BotContent.vue';
    import SchemeSwitcher from '@/components/ui/SchemeSwitcher.vue';
    import {UserAgent} from '@/utils/UserAgent';

    @Options({
        components: {
            Logo,
            Gallery,
            Contacts,
            BotContent,
            SchemeSwitcher,
        },
    })
    export default class App extends Vue {
        get isBot(): boolean {
            return UserAgent.checkIsBot();
        }
    }
</script>

<style lang="scss">
    @import "scss/variables";
    @import "scss/global";

    .bed-trip {
        &__logo {
            display: flex;
            justify-content: center;
            margin: 50px 0 50px;
        }

        &__scheme-switcher {
            display: flex;
            justify-content: center;
            margin-bottom: 70px;
        }
    }
</style>

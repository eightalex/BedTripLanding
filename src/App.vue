<template>
    <div class="bed-trip">
        <div class="bed-trip__logo">
            <logo animated/>
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
    import {UserAgent} from '@/utils/UserAgent';

    @Options({
        components: {
            Logo,
            Gallery,
            Contacts,
            BotContent,
        },
    })
    export default class App extends Vue {
        get isBot(): boolean {
            return UserAgent.checkIsBot();
        }

        created(): void {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                const theme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', theme);
            });
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
            margin: 50px 0 70px;
        }
    }
</style>

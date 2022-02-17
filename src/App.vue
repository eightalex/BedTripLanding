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
    import {THEME} from '@/constants/theme';

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
            const query = '(prefers-color-scheme: dark)';
            const attribute = 'data-theme';

            if (window.matchMedia(query).matches) {
                document.documentElement.setAttribute(attribute, THEME.DARK);
            }

            window.matchMedia(query).addEventListener('change', (e) => {
                const theme = e.matches ? THEME.DARK : THEME.LIGHT;
                document.documentElement.setAttribute(attribute, theme);
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

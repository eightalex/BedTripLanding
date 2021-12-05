<template>
    <div class="logo" :class="{glitch: animated}">Bed trip</div>
</template>

<script lang="ts">
    import {Vue} from 'vue-class-component';
    import {Prop} from 'vue-property-decorator';

    export default class Logo extends Vue {
        @Prop({type: Boolean}) animated!: boolean;
    }
</script>

<style lang="scss" scoped>
    .logo {
        position: relative;
        font-family: 'Rock Salt', cursive;
        font-size: 50px;
        color: var(--text-color);

        &.glitch::before,
        &.glitch::after {
            content: "Bed trip";
            position: absolute;
            top: 0;
            overflow: hidden;
            width: 100%;
            height: 100%;
            color: var(--text-color);
            background-color: var(--background-color);
            animation-duration: 2s;
            animation-timing-function: linear;
            animation-delay: 0s;
            animation-iteration-count: infinite;
            animation-direction: alternate-reverse;
        }

        &.glitch::before {
            left: 3px;
            text-shadow: -2px 0 red;
            animation-name: glitch-animation-1;
        }

        &.glitch::after {
            left: -3px;
            text-shadow: -2px 0 blue;
            animation-name: glitch-animation-2;
        }
    }

    @keyframes glitch-animation-1 {
        $steps: 20;

        @for $i from 0 through $steps {
            #{percentage($i*(1/$steps))} {
                clip: rect(random(150)+px, 350px, random(150)+px, 30px);
            }
        }
    }

    @keyframes glitch-animation-2 {
        $steps: 20;

        @for $i from 0 through $steps {
            #{percentage($i*(1/$steps))} {
                clip: rect(random(150)+px, 350px, random(150)+px, 30px);
            }
        }
    };
</style>

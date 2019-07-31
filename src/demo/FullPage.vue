<template>
    <div class="wrap" ref="container">
        <div class="full-page" style="background: red">page1</div>
        <div class="full-page" style="background: green">page2</div>
        <div class="full-page" style="background: blue">page3</div>
        <div class="full-page" style="background: black">page4</div>
        <div class="full-page" style="background: gray">page5</div>
    </div>
</template>
<script>
import { FullPage } from "@/lib/FullScreenPage.js";
export default {
    name: "FullPage",
    mounted() {
        new FullPage({
            container: this.$refs.container,
            class: "full-page",
            change: function(cur) {
                console.log(cur)
            }
        });
    }
}
</script>
<style lang="scss" scoped>
    .wrap {
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
    }
</style>
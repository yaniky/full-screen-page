<template>
    <div class="wrap" ref="container" style="overflow: hidden;position: fixed;width: 100px;height: 200px;color: #fff;">
        <div class="full-page" style="background: red">page1</div>
        <div class="full-page" style="background: green">page2</div>
        <div class="full-page" style="background: blue">page3</div>
        <div class="full-page" style="background: black">page4</div>
        <div class="full-page" style="background: gray">page5</div>
    </div>
</template>
<script>
import { FullPage } from "@/index.js";
export default {
    name: "FullPage",
    mounted() {
        this.initPage();
    },
    methods: {
        initPage() {
            new FullPage({
                container: this.$refs.container,
                class: "full-page",
                change: function(cur) {
                    console.log(cur)
                },
                setPageRatio: true
            });
        }
    }
}
</script>
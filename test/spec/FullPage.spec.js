import Vue from "vue";
import FullPage from "../components/FullPage.vue";
var assert = require("chai").assert;

describe("FullPage", function() {
    it("Should render five page", function(done) {
        const Constructor = Vue.extend(FullPage);
        const vm = new Constructor().$mount();

        Vue.nextTick(() => {
            assert(vm.$el.textContent, "page1 page2 page3 page4 page5");
            done();
        });
    });
});
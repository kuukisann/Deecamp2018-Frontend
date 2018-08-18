<template>
    <div id="app">
        <div class="container">
            <div class="bg-img">
                <canvas class="sketch-canvas" height="512px" width="512px"></canvas>
                <p class="tag-name">鲸鱼</p>
            </div>
            <div class="input-box" @send-text="generate_pic">
                <input-box></input-box>
            </div>
        </div>
    </div>
</template>

<script>
import { MyHeader, MyHeader2 } from "./components/common";
import InputBox from "./components/inputbox/inputbox";
import DisplayBox from "./components/displaybox/displaybox";

export default {
    name: "app",
    components: {
        MyHeader,
        MyHeader2,
        InputBox,
        DisplayBox
    },
    methods: {
        generate_pic(model_name) {
            let rnn = get_model("ant");
            let drawing = gen_drawing();
            draw_pic(drawing, 256, 256);
        }
    },
    head() {
        return {
            script: [
                { src: "./assets/lib/numjs.js" },
                { src: "./assets/lib/sketch_rnn.js" },
                { src: "./assets/lib/get_model_drawing.js" }
            ]
        };
    }
};
</script>

<style>
body {
    overflow: hidden;
    padding: 0;
    margin: 0;
}
header {
    padding: 0 !important;
    margin: 0 !important;
}
.container {
    background-color: #9fe0fe;
    height: 100vh;
}
.bg-img {
    background-image: url(./assets/background.png);
    height: 700px;
    text-align: center;
}
.input-box {
    height: 500px;
    width: 100%;
    /* background-color: rgba(0, 161, 233, 0.2); */
    background-color: #00a1e9;
}
.tag-name {
    margin: 10px;
    font-size: 50px;
    letter-spacing: 20px;
}
.sketch-canvas {
    margin-top: 50px;
}
</style>

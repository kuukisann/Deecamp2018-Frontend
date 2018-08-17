<template>
    <div id="app">
        <div class="container">
            <div class="bg-img">
                <display-box>
                </display-box>
            </div>
            <div class="input-box">
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
}
.input-box {
    height: 500px;
    width: 100%;
    /* background-color: rgba(0, 161, 233, 0.2); */
    background-color: #00a1e9;
}
</style>

<template>
    <div id="app">
        <header>
            <my-header2></my-header2>
        </header>
        <el-container>
            <el-main>
                <input-box></input-box>
                <display-box imgUrl="https://en.wikipedia.org/wiki/File:Google_Chrome_icon_(September_2014).svg"></display-box>
            </el-main>
        </el-container>
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
    padding: 0;
    margin: 0;
}
header {
    padding: 0 !important;
    margin: 0 !important;
}
.el-container {
    text-align: center;
}
</style>

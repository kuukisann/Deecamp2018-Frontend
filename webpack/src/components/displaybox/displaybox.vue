<template>
    <div class="display-box">
        <img class="display-window" height="512px" width="512px" src="../../assets/temp.png">
        <p class="tag-name">鲸鱼</p>
    </div>
</template>
<script>
export default {
    name: "DisplayBox",
    props: ["imgUrl"]
};
</script>

<style scoped>
.display-box {
    text-align: center;
}
.display-window {
    margin-top: 50px;
}
.tag-name{
    margin: 10px;
    font-size: 50px;
    letter-spacing: 20px;
}
</style>

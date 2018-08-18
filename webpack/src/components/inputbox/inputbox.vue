<template>
    <div class="input-line">
        <el-row>
            <el-col :offset="8" :span="6">
                <el-input v-model="input" placeholder="请输入描述"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button class="send-button" type="primary" @click="$emit('send-text',input)">好了</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "InputBox",
    data() {
        return {
            input: ""
        };
    }
};
</script>

<style scoped>
.input-line {
    padding-top: 80px;
}
.send-button {
    width: 100%;
    background-color: #017aaf;
}
</style>

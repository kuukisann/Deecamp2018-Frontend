<template>
    <div>
        <el-row>
            <el-col :offset="8" :span="6">
                <el-input v-model="input" placeholder="请输入描述"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button width="100px">输入好了</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "InputBox",
    data(){
        return {

        }
    }

};
</script>

<style scoped>
</style>

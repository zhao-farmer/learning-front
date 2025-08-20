<template>
    <div class="wraps">
        <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon label-width="auto" class="demo-ruleForm">
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <div style="display: flex">
                    <el-input v-model="ruleForm.code" />
                    <img @click="resetCode" :src="codeUrl" alt="" />
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit()"> 登录 </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const codeUrl = ref<string>("/api/login/code");

const resetCode = () => (codeUrl.value = codeUrl.value + "?" + Math.random());

const ruleForm = reactive({
    username: "",
    password: "",
    code: "",
});

const submit = async () => {
    await fetch("/api/login/create", {
        method: "POST",
        body: JSON.stringify(ruleForm),
        headers: {
            "content-type": "application/json",
        },
    }).then(res => res.json());
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
}

.wraps {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
}

html,
body,
#app {
    height: 100%;
}
</style>

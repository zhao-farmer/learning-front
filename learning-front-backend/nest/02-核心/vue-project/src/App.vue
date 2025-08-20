<template>
    <el-button @click="download">下载</el-button>
</template>

<script setup lang="ts">
const useFetch = async (url: string) => {
    // 返回的信息转成字节流
    const res = await fetch(url).then(res => res.arrayBuffer());
    console.log(res);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
        new Blob([res], {
            // type:"image/png"
        })
    );
    a.download = "image.zip";
    a.click();
};

const download = () => {
    useFetch("http://localhost:3006/upload/stream");
};
</script>

<style></style>

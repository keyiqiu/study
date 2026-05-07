<template>
  <div class="post-header">
    <a href="https://news.wmpvp.com/community-detail.html?id=360686733">
      点击欣赏五杀
    </a>
    <button @click="haha">haha</button>
    <input type="text" v-model="message" />
    <br />
    <span style="height: 300px; width: 300px">{{ answer }}</span>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

// config就是配置对象
// axios.interceptors.request.use((config) => {
//   console.log("我是一个请求拦截器");
//   // 可以在这里修改config中的参数
//   config.params = { a: 100 };

//   return Promise.resolve(config);
// });

// axios.interceptors.response.use((config) => {
//   console.log("我是一个响应拦截器");
//   console.log(config);
//   return config.data;
// });

const hahaAxios = axios.create({
  baseURL: "http://localhost:3000",
});

const message = ref("");
const answer = ref("");
const haha = async () => {
  const res = await axios.post("http://localhost:3000/api/chat", {
    message: message.value,
  });
  answer.value = res.data.data;
  console.log(res.data.data, "123123123123"); // AI 回答内容
};
// const haha = async () => {
//   try {
//     const res = await hahaAxios.get("/posts/1");
//     console.log("我成功请求了数据");
//     console.log(res);
//     console.log(res.data);
//   } catch (err) {
//     console.log("我请求数据失败了");
//   }
// };
</script>

<style scoped>
.post-header {
  text-align: center;
}
</style>

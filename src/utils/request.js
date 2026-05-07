// src/utils/request.js
import axios from "axios";
import { ElMessage } from "element-plus"; // 可选，装element-plus做提示

const request = axios.create({
  baseURL: "", // MSW模拟接口不用填baseURL
  timeout: 5000,
});

// 1. 请求拦截器：添加token
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // 排除公开接口（登录接口不用加token）
    const whiteList = ["/api/login"];
    if (!whiteList.includes(config.url) && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 2. 响应拦截器：处理401
request.interceptors.response.use(
  (res) => res.data, // 简化响应数据
  (error) => {
    if (error.response?.status === 401) {
      // 清空token + 提示 + 跳登录
      localStorage.removeItem("token");
      ElMessage.error("token过期，请重新登录");
      // 模拟跳登录（实际项目用router.push）
      window.location.href = "/#/login";
    }
    return Promise.reject(error);
  }
);

export default request;

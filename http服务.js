const http = import("http");
// 创建服务对象
const server = http.createServer((res, rep) => {
  rep.setHeader("content-type", "text/html;charset=utf-8");
  rep.end("你好");
});
// 监听端口，启动服务
server.listen(9000, () => {
  console.log("服务启动成功");
});

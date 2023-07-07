# Moku 友链管理器
![插件版本](https://img.shields.io/badge/plugin-v1.2.7-blue)
![开源协议](https://img.shields.io/github/license/crrashh1542/moku-linkmanager)  
易于使用，可以定时查询友链及图标，可以按照设定判断并按照设定删除友链或者发送通知。
⚠️ 注意：由于本项目涉及到后台账号系统，可能造成绕过鉴权而直接登录博客后台；所以为了各位隐私安全，本项目**暂无计划开源**。

## 操作逻辑
🚧 说在前面：本插件从来不意在疏远与博友的关系，仅为减小博主们的查询链接有效性的工作量。
* 标准的一套 setter 和 getter 来操作友链列表的数据。
* 前（Vue 3）后（PHP）端可能分离，纯 json 数据交互。
* 数据库在服务端，不会在此独立于 WordPress 框架。

## 前端
![前端版本](https://img.shields.io/badge/version-2.0.2-blue)  
访客端：去掉 Roboto 的定制化 MDUI。
后台：Element Plus。

# Moku 友链管理器
![插件版本](https://img.shields.io/badge/plugin-v2.4.7-blue)
![开源协议](https://img.shields.io/github/license/crrashh1542/moku-linkmanager)  
一个易于使用、界面简约、可定时检查友链及图标可用性、可按设定判断并删除友链或者发送通知的WordPress插件。  
  
⚠️ 注意：由于本项目涉及操作数据库，可能使坏蛋绕过鉴权而直接访问甚至操作数据库！ ~~（呜呜呜我就是那个倒霉蛋）~~ 即使`v2`已经做了较多修复尝试，仍无法保证其100%的安全性。故为各位隐私安全考虑，本项目**短期内暂无计划开源**。

## 插件特性
🚧 说在前面：本插件从来不意在疏远与博友的关系，仅为减小博主们的查询链接有效性的工作量，同时督促各位做一名**合格的站长**。  
* 前（Vue 3）后（PHP）端分离，使用JSON以纯API式进行数据交互。
* 由于数据库在服务端，插件必须依赖于WordPress和MySQL。
* 可自选链接/图片失效的时间，以及直接删除或者邮件通知的违约措施。

## 前端
![前端版本](https://img.shields.io/github/package-json/v/crrashh1542/moku-linkmanager)  
访客端：去掉Roboto和默认字体、字色限制的定制化[MDUI v1](https://mdui.org)。  
后台：[Element Plus](https://element-plus.org)。

## 后端
![后端稳定版本](https://img.shields.io/badge/stable-v2.4.8.240712-blue)
![后端最新版本](https://img.shields.io/badge/latest-v2.4.8.240712-blue)   
由于本人技术水平问题且并不主攻PHP，所以借用了很多网上无License的代码。在此统一表示感谢。  

## 关于
* 版本说明：插件版本与后端版本保持一致，后端的变更升级可能会影响前端版本，前端版本自身（如框架或 UI 优化的变更）不影响后端版本。  
* 框架：无，全部手搓。  
* 依赖：WordPress ？、PHP 7.0+ 以及 MySQL 5.4+。

# WECHATY-PUPPET-PADPLUS

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg)](https://github.com/chatie/wechaty)
[![NPM Version](https://badge.fury.io/js/wechaty-puppet-padplus.svg)](https://www.npmjs.com/package/wechaty-puppet-padplus)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-padplus/next.svg)](https://www.npmjs.com/package/wechaty-puppet-padplus?activeTab=versions)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![Linux/Mac Build Status](https://travis-ci.com/botorange/wechaty-puppet-padplus.svg?branch=master)](https://travis-ci.com/botorange/wechaty-puppet-padplus)

## Notice

1. Wechaty-puppet-padplus is still in very Early Alpha Stage, please make sure you have the necessary engineering technics to deal with the bugs instead of just asking for support.
2. You are welcome to file an issue to reproduce the problem, if it is reproducible, we will fix that as soon as possible.
3. If you need a stable version, please keep waiting until we release the stable one.

## Install

### 1. Init

```js
mkdir padplus

npm init
```

### 2. Install the latest wechaty

```js
npm install wechaty
```

### 3. Install wechaty-puppet-padplus

> Notice: wechaty-puppet-padplus still in alpha test period, so we keep updating the package, you should install the latest packge by using `@latest` until we release the stable package.

```js
npm install wechaty-puppet-padplus@latest
```

### 4. Install other dependency

```js
npm install qrcode-terminal
```

## Example

```js
import { Wechaty       } from 'wechaty'
import { PuppetPadplus } from 'wechaty-puppet-padplus'
import { generate      } from 'qrcode-terminal'

const token = 'your-token'

const puppet = new PuppetPadplus({
  token,
})

const name  = 'your-bot-name'

const bot = new Wechaty({
  puppet,
  name, // generate xxxx.memory-card.json and save login data for the next login
})

bot
  .on('scan', (qrcode) => {
    generate(qrcode, {
      small: true
    })
  })
  .on('message', msg => {
    console.log(`msg : ${msg}`)
  })
  .start()
```

## Puppet Comparision

功能 | padpro | padplus | macpro
---|---|---|---
 **<消息>**|  |  |
 收发文本| ✅ |✅ |✅
 收发个人名片| ✅ |✅ |✅
 收发图文链接| ✅ |✅ |✅
 发送图片、文件| ✅ | ✅（对内容有大小限制，20M以下） |✅
 接收图片、文件| ✅ | ✅（对内容有大小限制，25M以下） |✅
 发送视频| ✅ | ✅（视频以链接形式发送） | ✅
 接收视频| ✅ | ✅ | ✅
 发送小程序| ❌ | ❌ | ✅
 接收动图| ❌ | ✅ | ✅
 发送动图| ❌ | ✅ | ✅
 接收语音消息| ✅ | ✅ | ✅
 发送语音消息| ✅ | ❌ | ❌
 转发文本| ✅ | ✅ | ✅
 转发图片| ✅ | ✅ | ✅
 转发图文链接| ✅ | ✅ | ✅
 转发音频| ✅ | ❌ | ✅
 转发视频| ✅ | ✅ | ✅
 转发文件| ✅ | ✅ | ✅
 转发动图| ❌ | ❌ | ❌
 转发小程序| ❌ | ❌ | ❌
 **<群组>**|  |  |
 创建群聊|✅|✅|✅
 设置群公告|✅|✅|✅
 获取群公告|❌|✅|❌
 群二维码|✅|✅|✅
 拉人进群|✅|✅|✅
 踢人出群|✅|✅|✅
 退出群聊|✅|✅|✅
 改群名称|✅|✅|✅
 入群事件|✅|✅|✅
 离群事件|✅|✅|✅
 群名称变更事件|✅|✅|✅
 @群成员|✅|✅|✅
 群列表|✅|✅|✅
 群成员列表|✅|✅|✅
 群详情|✅|✅|✅
 **<联系人>**|  |  |
 修改备注|✅|✅|✅
 添加好友|✅|✅|✅
 自动通过好友|✅|✅|❌
 添加好友|✅|✅|✅
 好友列表|✅|✅|✅
 好友详情|✅|✅|✅
 **<其他>**|  |  |
 登录微信|✅|✅|✅
 扫码状态|✅|✅|❌
 退出微信|✅|❌|✅
 依赖协议|iPad|iPad|Mac|


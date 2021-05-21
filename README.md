个人收集并适配Github Actions的各类签到大杂烩
## 不要fork了 ⭐️star就行 
# 使用方式
1. [使用教程并自动同步](RepoSync.md)
2. 点击Settings -> Secrets -> 点击绿色按钮 (如无绿色按钮说明已激活。直接到第三步。)
3. 新增 new secret 并设置 Secrets:
4. 双击右上角自己仓库Star触发，如有不使用项目请[禁用部分项目](https://cdn.jsdelivr.net/gh/BlueskyClouds/BlueskyClouds.github.io/2020/10/19/img/2020-10-19.jpg)
6. **必须** - 请随便找个文件(例如`README.md`)，加个空格提交一下，否则可能会出现无法定时执行的问题
7. 由于规则更新,同步后会默认禁用,请手动点击Actions 选择要签到的项目 `enable workflows`激活
8. [定时执行](#定时执行)

# 定时执行
1. 支持手动执行，具体在Actions中选中要执行的Workflows后再在右侧可以看到Run workflow，点击即可运行此workflow。

2. 如果嫌上一步麻烦的，也可以直接点击一下自己的star，你会发现所有的workflow都已执行。

3. 如需修改执行时间自行修改`.github\workflows\`下面的yaml内的` cron:` 执行时间为国际标准时间 [时间转换](http://www.timebie.com/cn/universalbeijing.php) 分钟在前 小时在后 尽量提前几分钟,因为下载安装部署环境需要一定时间

##### Cookie变量设置 Secrets:**

| 名称     | 内容           |   说明  |
| -------- | -------------|   ----- |
| `PAT`                   |   使用Github Actions同步和拉取代码    |利用Github Actions自动同步上游仓库或新建仓库[PAT获取教程](RepoSync.md)|
| `IQIYI_COOKIE`          |   爱奇艺P00001    |P00001的值 详情[文字教程](https://www.bilibili.com/read/cv7437179) [视频教程](https://www.bilibili.com/video/BV1B541157DE) 电脑版有效期三个月|
| `Xiaomi_User`           |   小米运动账号   |小米运动账号,多账号请用#分割 例如：13800138000#13800138001|
| `Xiaomi_Pw`             |   小米运动密码   |小米运动密码,多账号请用#分割 例如：abc123qwe#abcqwe2|
| `Xiaomi_Bs`             |   小米运动步数   |默认为1w-2w之间随机 或自定义随机范围`[18000-25000]`|
| `Cloud_USER`            |   天翼云盘账号   |天翼云盘手机号,多账号请用#分割 例如：13800000000#13800000001|
| `Cloud_PWD`             |   天翼云盘密码   |天翼云盘密码,多账号请用#分割 例如：cxkjntm#jntmcxk|
| `BILI_USER`             |   哔哩哔哩账号   |B站账号|
| `BILI_PASS`             |   哔哩哔哩密码   |B站密码|
| `BILI_COOKIE`           |   哔哩哔哩COOKIE`(非必填)`   |哔哩哔哩COOKIE,如果账号密码无法登陆就用COOKIE,等一段时间再用账号密码即可.|
| `BILI_NUM`              |   哔哩哔哩每日投币数量   |每日投币数量`可不填`默认0 不投币|
| `BILI_TYPE`             |   哔哩哔哩每日投币方式   |投币方式`可不填`默认1,只给关注的人投币 0 则随机投币|
| `BIKA_USER`             |   哔咔漫画用户名   |哔咔漫画用户名|
| `BIKA_PASS`             |   哔咔漫画密码   |哔咔漫画密码|
| `V_REF_URL`             |   腾讯视频Request URL |电脑端搜索auth_refresh复制整段Request url[图片教程](https://cdn.jsdelivr.net/gh/BlueskyClouds/BlueskyClouds.github.io/2020/11/1/img/v_1.jpg)|
| `V_COOKIE`              |   腾讯视频Cookie   |电脑端搜索auth_refresh复制Cookie[图片教程](https://cdn.jsdelivr.net/gh/BlueskyClouds/BlueskyClouds.github.io/2020/11/1/img/v_2.jpg)|
| `TELECOM_MOBILE`        |   中国电信手机号         |只需要手机号 单账号 `多账号将会暴露手机号` 自行考虑,多账号使用`,`分割 部分地区或手机号暂无法签到，自行测试使用|
| `BDUSS`                 |   百度BDUSS         |BDUSS值切勿使用双击复制 (结尾有一个`符号`双击复制可能无法复制完整)|
##### 推送通知环境变量(目前提供`微信server酱`、`pushplus(推送加)`、`iOS Bark APP`、`telegram机器人`、`钉钉机器人`、`企业微信机器人`、`iGot`等通知方式)

| Name                    |   归属   | 属性   | 说明                                                         |
| :---------------------: | :----------: | --------- | ------------------------------------------------------------ |
| `SEND_KEY`              |   推送开关        | 非必须 | 推送开关设置如设置该参数 仅在Cookie失效时推送,不设置则默认全部推送无论是否失败|
| `PUSH_KEY`              |   微信server酱推送   | 非必须 | server酱的微信通知[更新公告](https://sc.ftqq.com/9.version) |
| `BARK_PUSH`             |   [BARK推送](https://apps.apple.com/us/app/bark-customed-notifications/id1403753865)   | 非必须 | IOS用户下载BARK这个APP,填写内容是app提供的`设备码`，例如：https://api.day.app/123 ，那么此处的设备码就是`123`，再不懂看 [这个图](https://github.com/MayoBlueSky/My-Actions/blob/master/icon/bark.jpg)（注：支持自建填完整链接即可） |
| `BARK_SOUND`            |   [BARK推送](https://apps.apple.com/us/app/bark-customed-notifications/id1403753865)   | 非必须 | bark推送声音设置，例如`choo`,具体值请在`bark`-`推送铃声`-`查看所有铃声` |
| `TG_BOT_TOKEN`          |   telegram推送   | 非必须 | tg推送(需设备可连接外网),`TG_BOT_TOKEN`和`TG_USER_ID`两者必需,填写自己申请[@BotFather](https://t.me/BotFather)的Token,如`10xxx4:AAFcqxxxxgER5uw` , [具体教程](https://github.com/MayoBlueSky/My-Actions/blob/master/backUp/TG_PUSH.md) |
| `TG_USER_ID`            |   telegram推送   | 非必须 | tg推送(需设备可连接外网),`TG_BOT_TOKEN`和`TG_USER_ID`两者必需,填写[@getuseridbot](https://t.me/getuseridbot)中获取到的纯数字ID, [具体教程](https://github.com/MayoBlueSky/My-Actions/blob/master/backUp/TG_PUSH.md) |
| `DD_BOT_TOKEN`          |   钉钉推送   | 非必须 | 钉钉推送(`DD_BOT_TOKEN`和`DD_BOT_SECRET`两者必需)[官方文档](https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq) ,只需`https://oapi.dingtalk.com/robot/send?access_token=XXX` 等于`=`符号后面的XXX即可 |
| `DD_BOT_SECRET`         |   钉钉推送   | 非必须 | (`DD_BOT_TOKEN`和`DD_BOT_SECRET`两者必需) ,密钥，机器人安全设置页面，加签一栏下面显示的SEC开头的`SECXXXXXXXXXX`等字符 , 注:钉钉机器人安全设置只需勾选`加签`即可，其他选项不要勾选,再不懂看 [这个图](https://github.com/MayoBlueSky/My-Actions/blob/master/icon/DD_bot.png) |
| `QYWX_KEY`              |   企业微信机器人推送     | 非必须 | 密钥，企业微信推送 webhook 后面的 key [详见官方说明文档](https://work.weixin.qq.com/api/doc/90000/90136/91770) |
| `QYWX_AM`               |   企业微信应用推送      | 非必须 | 依次填入 企业id,secret,@all(或者成员id),AgentID,图片id [详见官方说明文档](https://work.weixin.qq.com/api/doc/90000/90135/90236) [详见获取教程文档](https://note.youdao.com/ynoteshare1/index.html?id=351e08a72378206f9dd64d2281e9b83b) |
| `IGOT_PUSH_KEY`         |   iGot推送   | 非必须 | iGot聚合推送，支持多方式推送，确保消息可达。 [参考文档](https://wahao.github.io/Bark-MP-helper ) |
| `PUSH_PLUS_TOKEN`       |   pushplus推送  | 非必须 | 微信扫码登录后一对一推送或一对多推送下面的token(您的Token) [官方网站](https://www.pushplus.plus/)                     |
| `PUSH_PLUS_USER`        |   pushplus推送  | 非必须 | 一对多推送的“群组编码”（一对多推送下面->您的群组(如无则新建)->群组编码）注:(1、需订阅者扫描二维码 2、如果您是创建群组所属人，也需点击“查看二维码”扫描绑定，否则不能接受群组消息推送)，只填`PUSH_PLUS_TOKEN`默认为一对一推送                    |
| `TG_PROXY_HOST`         |  Telegram 代理的 IP  | 非必须 | 代理类型为 http。例子：http代理 http://127.0.0.1:1080 则填写 127.0.0.1 |
| `TG_PROXY_PORT`         |  Telegram 代理的端口  | 非必须 | 例子：http代理 http://127.0.0.1:1080 则填写 1080 |

### 同步Fork后的代码

#### 手动同步

[手动同步 https://blog.blueskyclouds.com/jsfx/58.html](https://blog.blueskyclouds.com/jsfx/58.html)
#### 自动同步
开启并启用`同步源仓库`即可 每天会定时同步两次
### 访问量

![](http://profile-counter.glitch.me/MayoBlueSky/count.svg)

# iQIYI-DailyBonus

<p align="center">
    <img alt="Version" src="https://img.shields.io/badge/release-0.0.1-blue"/>
    <a href="https://github.com/BlueSkyClouds">
        <img alt="Author" src="https://img.shields.io/badge/author-BlueSkyClouds-blueviolet"/>
    </a>
</p>

# 爱奇艺自动签到
功能：
1. 获取签到最新代码
2. 替换参数值
3. 签到并发送通知

# 使用方式
1. 打开爱奇艺官网 获取你的authcookie  获取方式 B 站[教程](https://www.bilibili.com/read/cv7437179)  authcookie有效期一般三个月
2. 右上角fork本仓库
3. 点击Settings -> Secrets
4. 新增 new secret  参数名IQIYI_COOKIE 值是你刚才获取的authcookie
5. 任意修改仓库内所有文件，即可触发执行。

可使用Star触发，点击自己仓库右上角Star即可激活，如是Unstar状态需要点击两次即可。
# 可选参数

PUSH_KEY 

打开https://sc.ftqq.com/3.version 登录后点击 发送消息获取你的SCKEY  

在Secrets 中添加新的PUSH_KEY = Server酱SCKEY 

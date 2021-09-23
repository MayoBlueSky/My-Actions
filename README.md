
<div align="center">
<h1 align="center">My-Actions</h1>
<img src="https://img.shields.io/github/issues/MayoBlueSky/My-Actions?color=green">
<img src="https://img.shields.io/github/stars/MayoBlueSky/My-Actions?color=yellow">
<img src="https://img.shields.io/github/forks/MayoBlueSky/My-Actions?color=orange">
<img src="https://img.shields.io/github/license/MayoBlueSky/My-Actions?color=ff69b4">
<img src="https://img.shields.io/github/languages/code-size/MayoBlueSky/My-Actions?color=blueviolet">
</div>

个人收集并适配Github Actions的各类签到大杂烩
## 不要fork了 ⭐️star就行 #

[点这里加TG群](https://t.me/joinchat/Os0AUkWMJl43ODBl)
需要什么签到可以去提issues,也欢迎大佬PR

# 使用方式
1. [新建仓库并同步代码](RepoSync.md)
2. 点击Settings -> Secrets -> 点击绿色按钮 (如无绿色按钮说明已激活。直接到下一步。)
3. 新增 new secret 并设置 [Secrets](Secrets.md):
4. 双击右上角自己仓库Star触发，如有不使用项目请[禁用部分项目](https://cdn.jsdelivr.net/gh/BlueskyClouds/Script/img/2020/10/19/img/2020-10-19.jpg)
6. **必须** - 请随便找个文件(例如`README.md`)，加个空格提交一下，否则可能会出现无法定时执行的问题
7. 由于规则更新,同步后会默认禁用,请手动点击Actions 选择要签到的项目 `enable workflows`激活
8. [定时执行](#定时执行) (如修改了执行时间 请关闭同步源仓库  否则同步时会覆盖)

[设置相关Secrets](Secrets.md)

# 定时执行
1. 支持手动执行，具体在Actions中选中要执行的Workflows后再在右侧可以看到Run workflow，点击即可运行此workflow。

2. 如果嫌上一步麻烦的，也可以直接点击一下自己的star，你会发现所有的workflow都已执行。

3. 如需修改执行时间自行修改`.github\workflows\`下面的yaml内的` cron:` 执行时间为国际标准时间 [时间转换](http://www.timebie.com/cn/universalbeijing.php) 分钟在前 小时在后 尽量提前几分钟,因为安装部署环境需要一定时间

### 同步Fork后的代码

#### 手动同步

手动执行一次`同步源仓库`即可
#### 自动同步
开启并启用`同步源仓库`即可 每天会定时同步两次
# 致谢

[@chavyleung](https://github.com/chavyleung/)  
[@Wenmoux](https://github.com/Wenmoux/)  
[@NobyDa](https://github.com/NobyDa/)

# 支持一下

  ![支持一下](https://cdn.jsdelivr.net/gh/BlueskyClouds/Script@master/img/2021/05/25/img/wx.png)
### 访问量

![](http://profile-counter.glitch.me/MayoBlueSky/count.svg)

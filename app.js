// version v0.0.1
// create by BlueSkyClouds
// detail url: https://github.com/BlueskyClouds/iQIYI-DailyBonus

const exec = require('child_process').execSync
const fs = require('fs')
const rp = require('request-promise')
const download = require('download')

const notify = $.isNode() ? require('./sendNotify') : '';
// 公共变量
//const KEY = process.env.iQIYI_COOKIE
const KEY = 'b880m2m1SEJEkgMLyWGgTcrpGim2HJurxgXyObBUPuWFl1bWgm3gkVz63Jfm2hYU4JaAyJ3d1'

async function downFile () {
    const url = 'https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js'
    await download(url, './')
}

async function changeFiele () {
    let content = await fs.readFileSync('./iQIYI.js', 'utf8')
    content = content.replace(/var cookie = ''/, `var cookie = '${KEY}'`)
    await fs.writeFileSync( './iQIYI.js', content, 'utf8')
}

async function deleteFile(path) {
    // 查看文件result.txt是  否存在,如果存在,先删除
    const fileExists = await fs.existsSync(path);
    // console.log('fileExists', fileExists);
    if (fileExists) {
        const unlinkRes = await fs.unlinkSync(path);
        // console.log('unlinkRes', unlinkRes)
    }
}

//url将时间/转换成-
function url_encode(url){
    url = encodeURIComponent(url);
    url = url.replace(/\%2F/g, "-");
    return url;
}


async function start() {
    if (!KEY) {
        console.log('请填写 key 后在继续')
        return
    }
    // 下载最新代码
    await downFile();
    console.log('下载代码完毕')
    // 替换变量
    await changeFiele();
    console.log('替换变量完毕')
    // 执行
    await exec("node iQIYI.js >> result.txt");
    console.log('执行完毕')
    const path = "./result.txt";
    let content = "";
    if (fs.existsSync(path)) {
        content = fs.readFileSync(path, "utf8");
    }
    await notify.sendNotify("爱奇艺签到-" + new Date().toLocaleDateString(), content);

    //运行完成后，删除下载的文件
    console.log('运行完成后，删除下载的文件\n')
    await deleteFile(path);

}

start()

// version v0.0.1
// create by BlueSkyClouds
// detail url: https://github.com/BlueskyClouds/iQIYI-DailyBonus

const exec = require('child_process').execSync
const fs = require('fs')
const rp = require('request-promise')
const download = require('download')

// 公共变量
const KEY = process.env.iQIYI_COOKIE
const serverJ = process.env.PUSH_KEY
let Bark = process.env.BARK_PUSH

async function downFile () {
    const url = 'https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js'
    await download(url, './')
}

async function changeFiele () {
    let content = await fs.readFileSync('./iQIYI.js', 'utf8')
    content = content.replace(/var cookie = ''/, `var cookie = '${KEY}'`)
    await fs.writeFileSync( './iQIYI.js', content, 'utf8')
}

async function sendNotify (text,desp) {
    const options ={
        uri:  `https://sc.ftqq.com/${serverJ}.send`,
        form: { text, desp },
        json: true,
        method: 'POST'
    }
    await rp.post(options).then(res=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

async function Barksend (text,desp) {
    const options ={
        uri:  `https://api.day.app/${Bark}/${text}/${desp}`,
        json: true,
        method: 'GET'
    }
    await rp.get(options).then(res=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
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

    if (serverJ) {
        const path = "./result.txt";
        let content = "";
        if (fs.existsSync(path)) {
            content = fs.readFileSync(path, "utf8");
        }
        await sendNotify("爱奇艺签到-" + new Date().toLocaleDateString(), content);
        console.log("爱奇艺签到-" + content)
        console.log('发送结果完毕')
    }

    if (Bark) {

        if (process.env.BARK_PUSH) {
            if(process.env.BARK_PUSH.indexOf('https') > -1 || process.env.BARK_PUSH.indexOf('http') > -1) {
                //兼容BARK自建用户
                Bark = process.env.BARK_PUSH
            } else {
                Bark = `https://api.day.app/${process.env.BARK_PUSH}`
            }
        } else {
            if(Bark && Bark.indexOf('https') === -1 && Bark.indexOf('http') === -1) {
                //兼容BARK本地用户只填写设备码的情况
                Bark = `https://api.day.app/${Bark}`
            }
        }
        console.log(Bark)
        const path = "./result.txt";
        let content = "";
        if (fs.existsSync(path)) {
            content = fs.readFileSync(path, "utf8");
        }
        await Barksend(encodeURI("爱奇艺签到-" + url_encode(new Date().toLocaleDateString())), encodeURI(content));

        console.log("爱奇艺签到-" + content)
        console.log('发送结果完毕')
    }
    //运行完成后，删除下载的文件
    console.log('运行完成后，删除下载的文件\n')
    const path = "./result.txt";
    await deleteFile(path);

}

start()
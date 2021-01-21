import requests
import os
import json

invite_userid = ''
if os.environ['WPS_KEY'] != "":
    invite_userid = os.environ['WPS_KEY']
else:
    print("未填写WPS ID,取消运行")
    exit(0)

sids = [
    "V02StVuaNcoKrZ3BuvJQ1FcFS_xnG2k00af250d4002664c02f",
    "V02SWIvKWYijG6Rggo4m0xvDKj1m7ew00a8e26d3002508b828",
    "V02Sr3nJ9IicoHWfeyQLiXgvrRpje6E00a240b890023270f97",
    "V02SBsNOf4sJZNFo4jOHdgHg7-2Tn1s00a338776000b669579",
    "V02SwV15KQ_8n6brU98_2kLnnFUDUOw00adf3fda0026934a7f",
    "V02S2oI49T-Jp0_zJKZ5U38dIUSIl8Q00aa679530026780e96",
    "V02ShotJqqiWyubCX0VWTlcbgcHqtSQ00a45564e002678124c",
    "V02SFiqdXRGnH5oAV2FmDDulZyGDL3M00a61660c0026781be1",
    "V02S7tldy5ltYcikCzJ8PJQDSy_ElEs00a327c3c0026782526",
    "V02SPoOluAnWda0dTBYTXpdetS97tyI00a16135e002684bb5c"

]

side2 = [
    "V02Sb8gxW2inr6IDYrdHK_ywJnayd6s00ab7472b0026849b17",
    "V02SC1mOHS0RiUBxeoA8NTliH2h2NGc00a803c35002693584d",
    "V02S2UBSfNlvEprMOn70qP3jHPDqiZU00a7ef4a800341c7c3b",
    "V02SfEpW1yy4wUUh_eEnEHpiJJuoDnE00ae12710000179aa7f"
]

invite_url = 'http://zt.wps.cn/2018/clock_in/api/invite'

for i in sids:
    response = requests.post(invite_url, headers={'sid': i}, data={'invite_userid': invite_userid})
    print(response.text)

# 二次发送
for i in side2:
    response = requests.post(invite_url, headers={'sid': i}, data={'invite_userid': invite_userid})
    print(response.text)
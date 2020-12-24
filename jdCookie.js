/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_pin=jd_491a2ed4c3b12;pt_key=AAJfzXtrADCO7ER9xJEGpfPeVFrZo2C4uuljk82WEE6s6Fp5f70rMT_sg5ueOwVZuT3fT9Xzad4;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_pin=jd_4497d33394f55;pt_key=AAJf5AMqADCbiTi2VTG9Bum_Hvfxusuvx9IzDtljJlFE5yCXN4MRLOLcYP0ELw1Gajd57wl0Kqk;',
  'pt_pin=jd_cWaeJzYlOSyu;pt_key=AAJf4pcsADC7zHWq6RQvTZcwRN_-lmgMjFOY0n6NL7ep7fjU3QBYLYJr46XI3fNOzHPu0L-6k-Q;'//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else if (process.env.JD_COOKIE.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    CookieJDs = process.env.JD_COOKIE.split('\\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
  CookieJDs = [...new Set(CookieJDs)]
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}

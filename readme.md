# easy-tencent-captcha
专门针对腾讯防水墙做了一些简单的封装,理论上react和vue都可以用.
## 使用方式
```bash
npm i easy-tencent-captcha --save
```
```javascript
import Captcha from 'easy-tencent-captcha'
const captcha = new Captcha({
  appId: 'xxxxx'
})
// 方法 1
captcha.showCaptcha({
  success (res) {
    console.log(res) // {bizState: xxx, appid: "xxx", ret: 0, ticket: "xxx", randstr: "xxx"}
  }
 })
 // 方法 2
 try {
   const res = await captcha.showCaptcha()
   console.log(res) // {bizState: xxx, appid: "xxx", ret: 0, ticket: "xxx", randstr: "xxx"}
 } catch (err) {
   console.log(err)
 }
 
```

## API
### .showCaptcha(options)
调起验证框
|option|params| 备注 |
|--- | ---| --- |
|success| res | 用户验证成功回调 |
|error| err | 一般是用户关闭窗口回调 |

### .closeCaptcha()
关闭验证框

### .getTicket()
获取验证码验证成功后的ticket
```JavaScript
const res = await captcha.getTicket()
console.log(res) // {"appid":"","ticket":""}
```
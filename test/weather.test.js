const expect = require('chai').expect;
describe('天气接口测试',function(){
  it('石家庄的天气',function(){
    const http = require('http');
    http.get('http://v.juhe.cn/weather/index?cityname=石家庄&key=f4de9e662b38edb1a376be17145f680f',(res)=>{
      var reault = '';
      res.on('data',(chunk)=>{
        result+=chunk;
      });
      res.on('end',()=>{
        console.log(JSON.parse(result));
      })

    })
  })
})


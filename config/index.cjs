/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // USE_PASSAGE: 'push-deer',
  // 使用微信测试号：公众号APP_ID
  // APP_ID: 'wx73fef6e7bb190b62',
  // 使用微信测试号：公众号APP_SECRET
  // APP_SECRET: '3646343336d975f2e760c9657cbce1b1',

  PROVINCE: '上海',
  CITY: '上海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // id: 'PDU24956TAKGmmoLfPlZsxwjyzoJiS6G5u8UFeELB',
      // id: 'o6SZ16pPKflJFXtO-kAHWqk6IOJU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'PQiYQ9hmV9p9IK9xwqVK1jTly-UOujeeXGwuUN6tAOM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-12',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝宝', year: '1996', date: '02-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝宝', year: '1994', date: '01-12',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2021', date: '11-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-01-12' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-10-05' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6SZ16s0365Jg_3yHu8TM4bcofNM',
    }
  ],

}

module.exports = USER_CONFIG


/*
 * @Author: lwHao
 * @Date: 2020-07-02 13:58:32
 * @LastEditors: lwHao
 * @LastEditTime: 2020-07-02 14:23:16
 */ 
const Generator = require('yeoman-generator')
module.exports = class extends Generator{
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your Project name',
        default: this.appname,
      },
    ]).then(answers => {
      this.answers = answers
    })
  }
  writting () {
    //把每一个文件都通过模板转换到目标路径
    const templates = [
      'public/favicon.ico',
      'public/index.html',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/App.vue',
      'src/main.js',
      '.gitignore',
      'babel.config.js',
      'package.json',
      'README.md',
    ]
    templates.forEach(template => {
      this.fs.copyTpl(
        this.templatePath(template),
        this.destinationPath(template),
        this.answers
      )
    })
  }
}
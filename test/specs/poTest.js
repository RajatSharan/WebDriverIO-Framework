const loginPage=require('../pageObjects/loginPage')
const Shop=require('../pageObjects/shopPage')
const reviewPage=require('../pageObjects/reviewPage')
const ConfirmPage= require('../pageObjects/confirmPage')
const expectchai=require("chai").expect
const fs=require('fs')
let cridentails =JSON.parse(fs.readFileSync('test/testData/loginTest.json'))
let e2ecridentails=  JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))
describe("Ecommerce Application",async()=>{

    cridentails.forEach(({username,password})  =>{

  

xit("Login Fail page",async ()=>{

//Webdriverio

await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
console.log(await browser.getTitle());
await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
//Css Selector,Xpath

await loginPage.Login(username,password)
//await browser.pause(3000)
await console.log(await loginPage.alert.getText())
await browser.waitUntil(async()=>await loginPage.signIn.getAttribute('value') === 'Sign In',
{

    timeout : 5000,
    timeoutMsg: 'Error message is not showing up'


})
await console.log(await loginPage.alert.getText())
await expect(loginPage.textInfo.toHaveTitleContaining("username is rahulshettyacademy and Password is learning"))

})

})

e2ecridentails.forEach(({products})  =>{
it("End to End Test",async ()=>
{

   // const products=['iphone X','Blackberry']
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await loginPage.Login("rahulshettyacademy","learning")
    await Shop.checkout.waitForExist()//Link text
    await Shop.addProductToCart(products)
    await Shop.checkout.click()
    sumOfProducts=await reviewPage.sumOfProducts()
    totalIntvalue= await reviewPage.totalFormatedPrice()
    await expectchai(sumOfProducts).to.equal(totalIntvalue)
    await ConfirmPage.successButton
    await ConfirmPage.country
    await $(".lds-ellipsis").waitForExist({reverse:true})
    await $("=India").click()
    await ConfirmPage.submitButton
    await expect($(".alert-success")).toHaveTextContaining("Success")



})

})

})
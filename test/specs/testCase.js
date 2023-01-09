describe("Ecommerce Application",async()=>{
it("Login Fail page",async ()=>{

//Webdriverio

await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
console.log(await browser.getTitle());
await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
//Css Selector,Xpath

await $("input[id='username']").setValue("eretert")
const password=await $("//input[@name='password']")
await password.setValue("dasdad")
await $("#signInBtn").click()
//await browser.pause(3000)
await console.log(await $(".alert-danger").getText())
await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') === 'Sign In',
{

    timeout : 5000,
    timeoutMsg: 'Error message is not showing up'


})
await console.log(await $(".alert-danger").getText())
await expect($("p").toHaveTextContaining("username is rahulshettyacademy and Password is learning"))

})

it("Login Success page",async()=>{
    

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await $("input[id='username']").setValue("rahulshettyacademy")
    const password=await $("//input[@name='password']")
    await password.setValue("learning")
    await $("#signInBtn").click()
    //Wait 
    await $(".btn-primary").waitForExist()
    await expect(browser).toHaveUrlContaining("shop")
    await expect(browser).toHaveTitle("ProtoCommerce")

})
})
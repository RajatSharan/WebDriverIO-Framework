const expectchai=require("chai").expect
describe("Ecommerce Application",async()=>
{
    it("End to End Test",async ()=>
    {

        const products=['iphone X','Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("input[id='username']").setValue("rahulshettyacademy")
        const password=await $("//input[@name='password']")
        await password.setValue("learning")
        await $("#signInBtn").click()
        const link= await $("*=Checkout")
        await link.waitForExist()//Link text
        const cards=await $$("div[class='card h-100']") 
        for(let i=0;i<await cards.length;i++)
        {
           const title=await cards[i].$("div h4 a")
           if(products.includes(await title.getText()))
           {

               await cards[i].$(".card-footer button").click()

           }
        }
        await link.click()
        const productprices=await $$("tr td:nth-child(4) strong")
        //Streams async mode
        const sumOfProducts= (await Promise.all(await productprices.map(async (productprices)=>parseInt((await productprices.getText()).split(".")[1].trim()))))
        .reduce((acc, price)=>acc+price,0)
        console.log(sumOfProducts)
        const totalValue=await $("h3 strong").getText()
        const totalIntvalue= parseInt(totalValue.split(".")[1].trim())
        await expectchai(sumOfProducts).to.equal(totalIntvalue)
        await $(".btn-success").click()
        await $("#country").setValue("ind")
        await $(".lds-ellipsis").waitForExist({reverse:true})
        await $("=India").click()
        await $("input[type='submit']").click()
        await expect($(".alert-success")).toHaveTextContaining("Success")

    
    
    })

})

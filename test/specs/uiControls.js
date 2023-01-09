const expectchai= require('chai').expect

describe("UI Controls Test Suit",async()=>{
    xit("UI Controls",async ()=>{
    
    //Webdriverio
    
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
    //Css Selector,Xpath
    await $("input[id='username']").setValue("eretert")
    const password=await $("//input[@name='password']")
    await password.setValue("dasdad")

    //Multiple Elements
    const radiobutton = await $$(".radiotextsty")
    let userdropdown=radiobutton[1]
    userdropdown.click()
    await browser.pause(3000)
    //await $("#signInBtn").click()
   const model =await $(".modal-body")
   await model.waitForDisplayed()
   await $("#cancelBtn").click()
   console.log(await $$(".customradio")[0].$("span").isSelected())
   await model.waitForDisplayed()
   await $("#okayBtn").click()
   await $$(".customradio")[0].$("span").click()
   await expect(model).not.toBeSelected()
   const dropdown = await $("select.form-control")
   dropdown.selectByAttribute('value','teach')
   await browser.pause(3000)
   await dropdown.selectByVisibleText("Consultant")
   await browser.pause(3000)
   console.log(await dropdown.getValue())
   //Chai assertion
        expect(await dropdown.getValue()).toBe.equal("stud")

    })

    xit("Dynamic Dropdown Controls",async ()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#autocomplete").setValue("ind")
        await browser.pause(3000)
        let items= await $$("[class='ui-menu-item'] div")
       for(var i=0 ;i< await items.length;i++)
       {
            if(await items[i].getText()=== "India"){

                await items[i].click()
                await browser.pause()

            }

       }



    })
    it("Handling CheckBox Controls",async ()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const elements= await $$("input[type='checkbox']")
        await  elements[1].click()
        await console.log(elements[1].isSelected) 
       //Take screenshot
       await browser.saveScreenshot("Screenshot.png")

    })

})
describe("Windows and Frames Misce",async()=>{

    xit("Parent and Child windows switch",async ()=>{

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $(".blinkingText").click()
        await browser.pause(2000)
        const handles= await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        console.log(await $("h1").getText())
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())

        //Open in new browser
        await browser.newWindow("https://google.com/")
        console.log(await browser.getTitle())
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")
        await $('#username').setValue("helloswitchback")

    })

    it("Parent and Child windows switch",async ()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#mousehover").scrollIntoView()
        console.log(await $$("a").length)
        await browser.switchToFrame(await $("[id='courses-iframe']"))
        console.log(await $("=Courses").getTagName())
        console.log(await $$("a").length)

    })
})
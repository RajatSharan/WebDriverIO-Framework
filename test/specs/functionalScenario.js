const expectchai=require("chai").expect
describe("Functional Testing on Application",async()=>
{
    xit("Scrolling and Mouse hover",async ()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#mousehover").scrollIntoView()
        await browser.pause(3000)
        await $("#mousehover").moveTo()
        await browser.pause(3000)
    

    })

    xit("Handling JavaScript related Alerts",async ()=>{

        await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")
        await $("button").doubleClick()
        console.log(await browser.isAlertOpen())
        expectchai(await browser.isAlertOpen()).to.be.true
        expectchai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        await browser.acceptAlert()
        await browser.pause(3000)
    })

    xit("Apply Sort the Web tables using WebDriverIO",async ()=>{

        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("tr th:nth-child(1)").click()
        //Retrive the list of names into array
        //sort this array A->Array B
        //Compair Array A and Array B
        const veggiesLocators=await $$("tr td:nth-child(1)")
        const veggiesName=await veggiesLocators.map(async veggie=>await veggie.getText())
        await console.log(veggiesName)
        veggies = veggiesName.slice()
        //Array are pass by  reference 
        sortedVeggies= await veggiesName.sort()
        console.log(sortedVeggies)
        await expectchai(veggiesName).to.equal(sortedVeggies)
    })

    it("Automate Search Table functionality with JavaScript Stream",async ()=>{

        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("input[type='search']").setValue("Tomato")
        const veggiesLocators=await $$("tr td:nth-child(1)")
        await expect(veggiesLocators).toBeElementsArrayOfSize({eq:1})
        console.log(await(veggiesLocators[0]).getText())
        await expect(await veggiesLocators[0]).toHaveTextContaining("Tomato")
    })

})

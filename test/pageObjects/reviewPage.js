class ReviewPage
{

get  productPrice()
{
    
 return $$("tr td:nth-child(4) strong")

}

get totalPrice ()
{
    return $("h3 strong")
}

    async sumOfProducts()
{

    const sumOfProducts= (await Promise.all(await this.productPrice.map(async (productprices)=>parseInt((await productprices.getText()).split(".")[1].trim()))))
    .reduce((acc, price)=>acc+price,0)
    console.log(sumOfProducts)

}

async totalFormatedPrice(){

    const totalValue= await this.totalPrice.getText()
    const totalIntvalue= parseInt(totalValue.split(".")[1].trim())
}


}

module.exports=new ReviewPage()
class ConfirmPage
{

get successButton()
{
    
    $(".btn-success").click()

}

get country ()
{
    return $("#country").setValue("ind")
}

get submitButton(){

    return $("input[type='submit']").click()
}

    


}


module.exports=new ConfirmPage()
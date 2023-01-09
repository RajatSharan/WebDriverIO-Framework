class LoginPage
{

get username()
{
    
 return $("input[id='username']")

}

get password ()
{
    return $("//input[@name='password']")
}

get alert()
{

      return $(".alert-danger")
}

get signIn(){

        return $("#signInBtn")

}

get textInfo(){

        return $("p")

}

async Login(username,password)
{
   await this.username.setValue(username)
   await this.password.setValue(password)
   await this.signIn.click()

}


}

module.exports=new LoginPage()
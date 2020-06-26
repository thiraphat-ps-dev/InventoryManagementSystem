*** Settings ***
Library           Selenium2Library
Suite Teardown    Close All Browsers

*** Variables ***


*** Keywords ***
OpenLoginPage
    OpenBrowser                 http://localhost:3000/login          chrome
    # OpenBrowser      http://localhost:3000/login    headlesschrome
    Title Should Be             Login Page

ClickButtonSignin
    Click Element               id:btn-signin

*** Test Case ***
TestLoginPage
    OpenLoginPage

TestLoginFaild IfNotInputUsernameAndPassword
    OpenLoginPage
    ClickButtonSignin
    Wait Until Page Contains          Please input username or password

TestLoginFaild IfNotInputUsername
    OpenLoginPage
    Input Text                  id:inputPassword                     1234
    ClickButtonSignin
    Wait Until Page Contains          Please input username or password

TestLoginFaild IfNotInputPassword
    OpenLoginPage
    Input Text                  id:inputUsername                     admin
    ClickButtonSignin
    Wait Until Page Contains          Please input username or password

TestLoginFaild IfUsernameOrPasswordIsCorrect
    OpenLoginPage
    Input Text                  id:inputUsername                     username
    Input Text                  id:inputPassword                     password
    ClickButtonSignin
    Wait Until Page Contains              Username or password is correct

TestLoginSuccess
    OpenLoginPage
    Input Text                  id:inputUsername                     admin
    Input Text                  id:inputPassword                     1234
    ClickButtonSignin
    Sleep               2
    Title Should Be                 InventoryManagementSystem
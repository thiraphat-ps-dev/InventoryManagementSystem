*** Settings ***
Library           Selenium2Library
Suite Teardown    Close All Browsers

*** Variables ***


*** Keywords ***
OpenLoginPage
    # OpenBrowser                 http://localhost:3000/login          chrome
    OpenBrowser      http://localhost:3000/login    headlesschrome
    Title Should Be             Login Page
    

LoginSuccess
    OpenLoginPage
    Input Text                  id:inputUsername                     admin
    Input Text                  id:inputPassword                     1234
    Click Element               id:btn-signin
    Wait Until Page Contains Element                        id:statusCard
    Wait Until Page Contains Element                        id:statisticsBorrow
    Wait Until Page Contains Element                        id:itemList
    Wait Until Page Contains Element                        id:avaliableItem
    Wait Until Page Contains Element                        id:lastAdd
    Wait Until Page Contains Element                        id:lastRequest
    Title Should Be                 InventoryManagementSystem

*** Test Case ***
TestHomePage
    OpenLoginPage
    LoginSuccess
    
TestItemPage
    OpenLoginPage
    LoginSuccess
    Click Element               id:menuItem
    Sleep                   2
    Title Should Be                 ItemList

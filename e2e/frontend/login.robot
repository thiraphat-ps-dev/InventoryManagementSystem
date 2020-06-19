*** Settings ***
Library    Selenium2Library


*** Test Case ***
Open Headless Browser
    OpenBrowser      https://www.google.com    headlesschrome
    Close Browser
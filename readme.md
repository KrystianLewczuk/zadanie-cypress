Hello,

Since cypress is kinda straight forward here is how to run tests:

To install all, simply download the repo and run "npm install" within the project folder

then use commands to run the tests:

npm run test -> open cypress in the "open" mode with UI where we can select the desired browser and run the feature file
npm run full -> open cypress in the "run" (headless) mode, where the test will execute and the result will be shown in terminal

screenshots and videos are recorded only on fails, so simply break any test to observe it.

Links used: 
https://docs.cypress.io - official documentation
https://filiphric.com/cucumber-in-cypress-a-step-by-step-guide - navigated from official documentation on how to get all the packages working with cypress (TS) + gherkin
Google + stackoverflow on how to pass the "inifinite page load event after redirect", however was not able to find working solution (it is as a bug for file download since 3 years), have found workaround on my own

I am simply not setting the framework too often :)

Took me more time than I expected, simply because of the "page load issue" 

To sum up:
Additional Work:
1. done a single one
2. as per above
3. done
4. hope it is ok
5. Will try to get time to add allure reports tomorrow, but cant promise. Capturing videos and screenshots is an auto function on cypress, also the reports from cypress are usually suficent to track down the issue
6. Would be nice to speak about it during the call, we can always track the response times and the times between actions on page (which indicate the page is loaded). Security and accesibility tests can be done partially, not everything can be 
done within cypress framework (for example page reading for people that are visually impaired).

P.S. The localization on google maps forced the results to be in polish (by ip), this can be mittigated by vpn, or logging in with a user that has english as a main language (from what I remmeber), if your IP is not from Poland, please update 
the values in feature file from Polish to English ones (fourth line for positive test cases)

P.S.2 I used the gherkin with page object simply because I really enjoy working with this setup, however it is not always there for me, on current project we do not have the page objects 
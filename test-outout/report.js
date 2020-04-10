$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Selenium Class/BDDCucumber/src/main/java/feature/login.feature");
formatter.feature({
  "line": 2,
  "name": "crmLogin",
  "description": "\n\nI want to reguster new/duplicate users on myomni cell website",
  "id": "crmlogin",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "validate the login",
  "description": "",
  "id": "crmlogin;validate-the-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of home page is crm",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters the \"9890594702\" and \"Ashwin@18\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is loggedin",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 33872051594,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_home_page_is_crm()"
});
formatter.result({
  "duration": 26788762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9890594702",
      "offset": 17
    },
    {
      "val": "Ashwin@18",
      "offset": 34
    }
  ],
  "location": "loginStepDefinition.user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 18301915175,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 50207706041,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027errorSectionHeader\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.163)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.225.46\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56757}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 94918dc1a51957bb15566f92474ebe72\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027errorSectionHeader\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinitions.loginStepDefinition.user_clicks_on_login_button(loginStepDefinition.java:56)\r\n\tat ✽.Then user clicks on login button(D:/Selenium Class/BDDCucumber/src/main/java/feature/login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_loggedin()"
});
formatter.result({
  "status": "skipped"
});
});
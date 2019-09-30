$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Hudl Login Feature",
  "description": "",
  "id": "hudl-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 6,
  "name": "Hudl Login Test Scenario(valid username and valid password)",
  "description": "",
  "id": "hudl-login-feature;hudl-login-test-scenario(valid-username-and-valid-password)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "title of login page is Log In",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "hudl-login-feature;hudl-login-test-scenario(valid-username-and-valid-password);",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "hudl-login-feature;hudl-login-test-scenario(valid-username-and-valid-password);;1"
    },
    {
      "cells": [
        "vrushali3june@gmail.com",
        "Vrush@123"
      ],
      "line": 16,
      "id": "hudl-login-feature;hudl-login-test-scenario(valid-username-and-valid-password);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6320201500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Hudl Login Test Scenario(valid username and valid password)",
  "description": "",
  "id": "hudl-login-feature;hudl-login-test-scenario(valid-username-and-valid-password);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 5,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "title of login page is Log In",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"vrushali3june@gmail.com\" and \"Vrush@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Log_In()"
});
formatter.result({
  "duration": 165435300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vrushali3june@gmail.com",
      "offset": 13
    },
    {
      "val": "Vrush@123",
      "offset": 43
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 118041400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d77.0.3865.90)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027CPX-NZHCILVH6ZV\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.126 (d80a294506b4c9d18015e755cee48f953ddc3f2f-refs/branch-heads/3809@{#1024}), userDataDir\u003dC:\\Users\\m.bansod\\AppData\\Local\\Temp\\scoped_dir22356_715705005}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54940}, acceptInsecureCerts\u003dfalse, browserVersion\u003d77.0.3865.90, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: d070ed63ebb1fc95c0be36f003d4106e\n*** Element info: {Using\u003dname, value\u003dpassword}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat com.application.pages.LoginPage.enterPassword(LoginPage.java:25)\r\n\tat com.application.stepdefinations.LoginStepDefination.user_enters_and(LoginStepDefination.java:43)\r\n\tat ✽.Then user enters \"vrushali3june@gmail.com\" and \"Vrush@123\"(login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2022057200,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d77.0.3865.90)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027CPX-NZHCILVH6ZV\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.126 (d80a294506b4c9d18015e755cee48f953ddc3f2f-refs/branch-heads/3809@{#1024}), userDataDir\u003dC:\\Users\\m.bansod\\AppData\\Local\\Temp\\scoped_dir22356_715705005}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54940}, acceptInsecureCerts\u003dfalse, browserVersion\u003d77.0.3865.90, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: d070ed63ebb1fc95c0be36f003d4106e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:532)\r\n\tat com.application.pages.LoginPage.close(LoginPage.java:37)\r\n\tat com.application.stepdefinations.LoginStepDefination.close_the_browser(LoginStepDefination.java:63)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Hudl Login Test Scenario(invalid username and valid password)",
  "description": "",
  "id": "hudl-login-feature;hudl-login-test-scenario(invalid-username-and-valid-password)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "title of login page is Log In",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user gets validation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "hudl-login-feature;hudl-login-test-scenario(invalid-username-and-valid-password);",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 28,
      "id": "hudl-login-feature;hudl-login-test-scenario(invalid-username-and-valid-password);;1"
    },
    {
      "cells": [
        "vrushali3jun@gmail.com",
        "Vrush@123"
      ],
      "line": 29,
      "id": "hudl-login-feature;hudl-login-test-scenario(invalid-username-and-valid-password);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20579668300,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d77.0.3865.90)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027CPX-NZHCILVH6ZV\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.126 (d80a294506b4c9d18015e755cee48f953ddc3f2f-refs/branch-heads/3809@{#1024}), userDataDir\u003dC:\\Users\\m.bansod\\AppData\\Local\\Temp\\scoped_dir24732_37136161}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54990}, acceptInsecureCerts\u003dfalse, browserVersion\u003d77.0.3865.90, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 0f40064d4a4793b0cd1409e71b9dc196\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat com.application.pages.LoginPage.goToLoginPage(LoginPage.java:17)\r\n\tat com.application.stepdefinations.LoginStepDefination.user_is_already_on_Login_Page(LoginStepDefination.java:30)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "Hudl Login Test Scenario(invalid username and valid password)",
  "description": "",
  "id": "hudl-login-feature;hudl-login-test-scenario(invalid-username-and-valid-password);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 18,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "title of login page is Log In",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters \"vrushali3jun@gmail.com\" and \"Vrush@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user gets validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Log_In()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "vrushali3jun@gmail.com",
      "offset": 13
    },
    {
      "val": "Vrush@123",
      "offset": 42
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_gets_validation_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 239011400,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d77.0.3865.90)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027CPX-NZHCILVH6ZV\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.126 (d80a294506b4c9d18015e755cee48f953ddc3f2f-refs/branch-heads/3809@{#1024}), userDataDir\u003dC:\\Users\\m.bansod\\AppData\\Local\\Temp\\scoped_dir24732_37136161}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54990}, acceptInsecureCerts\u003dfalse, browserVersion\u003d77.0.3865.90, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 0f40064d4a4793b0cd1409e71b9dc196\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:532)\r\n\tat com.application.pages.LoginPage.close(LoginPage.java:37)\r\n\tat com.application.stepdefinations.LoginStepDefination.close_the_browser(LoginStepDefination.java:63)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Hudl Login Test Scenario(valid username and invalid password)",
  "description": "",
  "id": "hudl-login-feature;hudl-login-test-scenario(valid-username-and-invalid-password)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "title of login page is Log In",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user gets validation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "hudl-login-feature;hudl-login-test-scenario(valid-username-and-invalid-password);",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 40,
      "id": "hudl-login-feature;hudl-login-test-scenario(valid-username-and-invalid-password);;1"
    },
    {
      "cells": [
        "vrushali3june@gmail.com",
        "Vrush@12"
      ],
      "line": 41,
      "id": "hudl-login-feature;hudl-login-test-scenario(valid-username-and-invalid-password);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5855234500,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Hudl Login Test Scenario(valid username and invalid password)",
  "description": "",
  "id": "hudl-login-feature;hudl-login-test-scenario(valid-username-and-invalid-password);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 31,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "title of login page is Log In",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user enters \"vrushali3june@gmail.com\" and \"Vrush@12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user gets validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Log_In()"
});
formatter.result({
  "duration": 10476100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vrushali3june@gmail.com",
      "offset": 13
    },
    {
      "val": "Vrush@12",
      "offset": 43
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 215759000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 81180600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_gets_validation_message()"
});
formatter.result({
  "duration": 5031938900,
  "status": "passed"
});
formatter.after({
  "duration": 2318085100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Hudl Logout Test Scenario",
  "description": "",
  "id": "hudl-login-feature;hudl-logout-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "title of login page is Log In",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user clicks on logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user is on main page",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "hudl-login-feature;hudl-logout-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 55,
      "id": "hudl-login-feature;hudl-logout-test-scenario;;1"
    },
    {
      "cells": [
        "vrushali3june@gmail.com",
        "Vrush@123"
      ],
      "line": 56,
      "id": "hudl-login-feature;hudl-logout-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5666667100,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Hudl Logout Test Scenario",
  "description": "",
  "id": "hudl-login-feature;hudl-logout-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 43,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "title of login page is Log In",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user enters \"vrushali3june@gmail.com\" and \"Vrush@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user clicks on logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user is on main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Log_In()"
});
formatter.result({
  "duration": 10165700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vrushali3june@gmail.com",
      "offset": 13
    },
    {
      "val": "Vrush@123",
      "offset": 43
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 216062100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 72017900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 5013075800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_logout_button()"
});
formatter.result({
  "duration": 8331525600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_main_page()"
});
formatter.result({
  "duration": 5019865300,
  "status": "passed"
});
formatter.after({
  "duration": 114588400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "password field displayed masked",
  "description": "",
  "id": "hudl-login-feature;password-field-displayed-masked",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "title of login page is Log In",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "password entered is asterisk",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "hudl-login-feature;password-field-displayed-masked;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 66,
      "id": "hudl-login-feature;password-field-displayed-masked;;1"
    },
    {
      "cells": [
        "vrushali3june@gmail.com",
        "Vrush@123"
      ],
      "line": 67,
      "id": "hudl-login-feature;password-field-displayed-masked;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5954711100,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "password field displayed masked",
  "description": "",
  "id": "hudl-login-feature;password-field-displayed-masked;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 58,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "title of login page is Log In",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user enters \"vrushali3june@gmail.com\" and \"Vrush@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "password entered is asterisk",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Log_In()"
});
formatter.result({
  "duration": 11099600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vrushali3june@gmail.com",
      "offset": 13
    },
    {
      "val": "Vrush@123",
      "offset": 43
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 213359100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.password_entered_is_asterisk()"
});
formatter.result({
  "duration": 5027329900,
  "status": "passed"
});
formatter.after({
  "duration": 2092962700,
  "status": "passed"
});
});
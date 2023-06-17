Feature('OrangeHRMAndTheInternetChecbox');

Scenario('1.amOnPage-Test',  ({I}) => {
 I.amOnPage('/'); // -> siteurl configure in config file
 I.wait(1);
 I.amOnPage('/doodles'); // -> siteurl configured in config file + /page
 I.wait(1);
 I.amOnPage('https://opensource-demo.orangehrmlive.com/'); // -> siteurl 
 I.wait(1);
 I.amOnPage('https://the-internet.herokuapp.com/dynamic_loading'); // -> siteurl/page
 I.wait(1);
});

Scenario('2. Testcase2-test', ({I}) => {
    I.amOnPage('https://opensource-demo.orangehrmlive.com/'); 
    I.wait(2);
    I.waitForText("Login");
    I.see("Login");
    I.fillField("//input[@placeholder='Username']", "Admin");
    I.fillField("//input[@placeholder='Password']", "admin123");
    I.click("//button[@type='submit']");
    I.waitForText("Dashboard",4);
    I.see("Dashboard");
    I.dontSee("Login");
});


Scenario('3.GrabText-Test', async ({I}) => {
    I.amOnPage('https://the-internet.herokuapp.com/checkboxes');
    let a = await I.grabTextFrom('#checkboxes');
    console.log(a);

});

Scenario('4.SelectOption-Test', ({I}) => {
    I.amOnPage('https://the-internet.herokuapp.com/dropdown');
    I.selectOption('#dropdown','Option 1');
    I.wait(1);
});

Scenario('5.Wait-Test', ({I}) => {
    I.amOnPage('https://the-internet.herokuapp.com/dynamic_loading/1');
    I.click("//button[contains(text(),'Start')]");
    I.waitForText('Hello World!', 10);
});


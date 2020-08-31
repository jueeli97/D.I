/// <reference path = "../D.I/parent.js"/>
/// <reference path = "../D.I/child.js"/>


function onClickButton() {
    
    // Create instance of child class
    let childObj =  new child();
    
    // Create instance of parent class
    let parentObj = new parent(childObj);

    childObj.fullName = "Jueeli Sawant";

    parentObj.parentDemo1();
    console.log(childObj.fullName);
    parentObj.parentDemo2();
    parentObj.parentDemo3();

    parentObj = null;

}

onClickButton();
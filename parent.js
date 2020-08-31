function parent(childObj) {
    
    // GLOBAL VARIABLE
    let _childObj = childObj; // memory sharing

    this.parentDemo1 = function(){

        // Bad Practise to define instance of a class
        // Death Realation is formed 
        //  let childObj = new child();
        //  childObj.childDemo();
        
       _childObj.childDemo();
       console.log(_childObj.fullName);
        _childObj.fullName = "Riya";
    }


    this.parentDemo2 = ()=>{
        _childObj.childDemo();
        console.log(_childObj.fullName);
    }


    this.parentDemo3 = ()=>_childObj.childDemo();
    
    }
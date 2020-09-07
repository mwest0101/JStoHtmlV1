class divTableCreatorExtend extends divTableCreator{
    static countEndDiv;
    constructor(){
        console.log("---constructor extend()--");
        super();
        this.countEndDiv = 1;
        this.newTable();
        
    };
    incCountDiv(){
        this.setCountEndDiv(this.getCountEndDiv()+1);
    }
    decCountDiv(){
        this.setCountEndDiv(this.getCountEndDiv()-1);
    }

    newTable(){
        //console.log("a1-[ this.getCountEndDiv()= ]"+this.getCountEndDiv());
        console.log("---newTable Extend()---");
        this.incCountDiv();	
        console.log("a2-[ this.getCountEndDiv()= ]"+this.getCountEndDiv());
    }

    newTableDiv(){
        console.log("---newTableDiv Extend(()---");
        //console.log("a1-[ this.getCountEndDiv()= ]"+this.getCountEndDiv());
        super.newTableDiv();	
        //console.log("New Table Div");
        this.incCountDiv();	
        //console.log("a2-[ this.getCountEndDiv()= ]"+this.getCountEndDiv());
    }
    
    getCountEndDiv(){
        console.log("---getCountEndDiv Extend(()-- "+this.countEndDiv);
        return this.countEndDiv;
    }

    setCountEndDiv(value){
       // console.log("---setCountEndDiv Extend(("+value+")--"+this.countEndDiv);
        console.log("[ "+value+ " ]");
        this.countEndDiv=value;
        console.log("---setCountEndDiv Extend(("+value+")--"+this.countEndDiv);
    }

    endTableDiv(){
        super.endTableDiv();	
        this.decCountDiv();
    }

    insertTableDivRow(){
        console.log("---insertTableDivRow Extend(()--");
        //console.log("b1-[ this.getCountEndDiv()= ]"+this.getCountEndDiv());
        if (this.getCountEndDiv()>1){
            this.endTableDiv();
        }
        //console.log("b2-[ this.getCountEndDiv()= ]"+this.getCountEndDiv());
        super.insertTableDivRow();
        this.incCountDiv();	
        console.log("b3-[ this.getCountEndDiv Extend(()= ]"+this.getCountEndDiv());
    }

 
    getHtmlResult(){
        console.log("---getHtmlResult Extend()--");
        while(this.getCountEndDiv()>0){
            this.endTableDiv();
        }
        
        return super.getReturnStr();
    }

    createMultiHeader(text){
        //this.setCountEndDiv(0);
        var mySplitResult=text.split(",");
        this.insertTableDivRow();
        for(var i = 0; i < mySplitResult.length; i++){
            super.insertTableDivTitle(mySplitResult[i]);
            //super.endTableDiv();
        }
        //this.endTableDiv();
    }

}
class divTableCreatorExtend extends divTableCreator{
    static countEndDiv;
    constructor(isVisible){
        console.log("---constructor extend()--");
        super(isVisible);
        this.countEndDiv = 0;
        this.newTable();
        
    };

    incCountDiv(){
        this.setCountEndDiv(this.getCountEndDiv()+1);
    }

    decCountDiv(){
        this.setCountEndDiv(this.getCountEndDiv()-1);
    }

    newTable(){           
        this.incCountDiv();	        
    }

    newTableDiv(){        
        super.newTableDiv();	       
        this.incCountDiv();	        
    }
    
    getCountEndDiv(){        
        return this.countEndDiv;
    }

    setCountEndDiv(value){       
            this.countEndDiv=value;    
    }

    endTableDiv(){
        super.endTableDiv();	
        this.decCountDiv();
    }

    insertTableDivRow(){        
        if (this.getCountEndDiv()>1){
            this.endTableDiv();
        }
        super.insertTableDivRow();
        this.incCountDiv();	        
    }

    getEndTable(){
        while(this.getCountEndDiv()>0){
            this.endTableDiv();
        }
    }

    getHtmlResult(){        
        this.getEndTable();     
        return super.getReturnStr();
    }

    gr(){
        return this.getHtmlResult();
    }

    createMultiHeadByStr(text){
        var mySplitResult=text.split(",");
        this.insertTableDivRow();
        this.createMultiHeader(mySplitResult);
        
    }

    createMultiColByStr(text){        
        var mySplitResult=text.split(",");
        this.insertTableDivRow();
        this.createMultiHeader(mySplitResult);        
    }

    createMultiHead(mySplitResult){
        
        this.insertTableDivRow();
        for(var i = 0; i < mySplitResult.length; i++){
            super.insertTableDivTitle(mySplitResult[i]);        
        }
        
    }

    createMultiCol(mySplitResult){        
        
        this.insertTableDivRow();
        for(var i = 0; i < mySplitResult.length; i++){
            super.insertTableDivCol(mySplitResult[i]);
        
        }
        
    }
}
class divTableCreator {
    
    

    constructor(isVisible){
        console.log("---constructor()--");
        this.returnStr = "";
        this.endln="\n";
        this.isHide="visible";
        this.setIsTableHide(isVisible);
        this.newTableDiv();
    };

    newTableDiv(){          
        if (this.getIsTableHide()=="hide"){
            this.setReturnStr("<div class=\"rHideTable\">"+this.endln);	
            
        }else{
            this.setReturnStr("<div class=\"rTable\">"+this.endln);	
            
        }
    }

    setIsTableHide(value){    
        this.isHide=value;        
    }
    getIsTableHide(){    
        return this.isHide;        
    }
    setReturnStr(text){
        console.log("---setReturnStr()---");
        this.returnStr=text;
    }
    
    getReturnStr(){
        return this.returnStr;
    }

    addStrToTable(text){
        console.log("---addStrToTable()---");
        this.setReturnStr(this.getReturnStr()+text);
    }


    insertTableDivRow(){
        console.log("---insertTableDivRow()---");
        this.addStrToTable("<div class=\"rTable Row\">"+this.endln);	
    }

    insertTableDivTitle(text){
        console.log("---insertTableDivTitle()---");
        this.addStrToTable("<div class=\"rTable Head\"><strong>"+text+"</strong></div>"+this.endln);			
    }


    insertTableDivCol(text){
        console.log("---insertTableDivCol()---");
        this.addStrToTable("<div class=\"rTable Cell\">"+text+"</div>"+this.endln);	
    }

    endTableDiv(){
        console.log("---endTableDiv()---");
        this.addStrToTable("</div>"+this.endln);	
    }

    getReturnStr(){
        return this.returnStr;
    }


}
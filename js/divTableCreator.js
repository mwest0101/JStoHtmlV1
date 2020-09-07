class divTableCreator {
    
    

    constructor(){
        console.log("---constructor()--");
        this.returnStr = "";
        this.endln="\n";
        this.newTableDiv();
    };

    newTableDiv(){
        console.log("---newTableDiv()---");
        this.setReturnStr("<div class=\"rTable\">"+this.endln);	
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
        this.addStrToTable("<div class=\"rTableRow\">"+this.endln);	
    }

    insertTableDivTitle(text){
        console.log("---insertTableDivTitle()---");
        this.addStrToTable("<div class=\"rTableHead\"><strong>"+text+"</strong></div>"+this.endln);			
    }


    insertTableDivCol(text){
        console.log("---insertTableDivCol()---");
        this.addStrToTable("<div class=\"rTableCell\">"+text+"</div>"+this.endln);	
    }

    endTableDiv(){
        console.log("---endTableDiv()---");
        this.addStrToTable("</div>"+this.endln);	
    }

    getReturnStr(){
        return this.returnStr;
    }


}
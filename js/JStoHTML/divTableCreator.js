class divTableCreator {
    
    

    constructor(isVisible){
        
        this.returnStr = "";
        this.endln="\n";
        this.isHide="visible";
        this.tableClass="table";
        this.linkClass="";
        this.tableClass=CONST_DEF_TABLE_CLASS;
		this.linkClass=CONST_DEF_LINK_CLASS;	
        this.setIsTableHide(isVisible);       
        
    };

    newTable(){          
        if (this.getIsTableHide()=="hide"){
            this.setReturnStr('<table class="'+this.tableClass+'">'+this.endln);	
            
        }else{
            this.setReturnStr('<table class="'+this.tableClass+'">'+this.endln);	
            
        }
    }

    setTableClass(className){
        this.tableClass=className;
    }
    setLinkClass(className){
        this.linkClass=className;
    }

    setIsTableHide(value){    
        this.isHide=value;        
    }
    getIsTableHide(){    
        return this.isHide;        
    }
    setReturnStr(text){
        
        this.returnStr=text;
    }
    
    getReturnStr(){
        return this.returnStr;
    }

    addStrToTable(text){       
        this.setReturnStr(this.getReturnStr()+text);
    }

    iTableColHead(){
        this.addStrToTable("<thead>"+this.endln+"<tr>"+this.endln);
    }

    iEndTableColHead(){
        this.addStrToTable("</tr>"+this.endln+"</thead>"+this.endln+"<tbody>"+this.endln);
    }
    
    iTableRow(){        
        this.addStrToTable("<tr>"+this.endln);	
    }

    iEndTableRow(){        
        this.addStrToTable("</tr>"+this.endln);	
    }

    iTableTitle(text){        
        this.addStrToTable('<th scope="col">'+text+'</th>'+this.endln);			
    }
    iTableTitleSize(text,size){        
        this.addStrToTable('<th class="col-sm-'+size+'" >'+text+'</th>'+this.endln);			
        
    }

    iTableCol(text){        
        this.addStrToTable("<td>"+text+"</td>"+this.endln);	
    }

    iTableRowHed(text){        
        this.addStrToTable('<th scope="row">'+text+'</th>'+this.endln);	
    }

    iEndTable(){        
        this.addStrToTable("</tbody>"+this.endln+"</table>"+this.endln);	
    }
      

    iLink(text,target){
        return '<a href="'+target+'" class="'+this.linkClass+'">'+text+'</a>';
    }

    getReturnStr(){
        return this.returnStr;
    }


}
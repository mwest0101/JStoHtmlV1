class divTableCreatorExtend extends divTableCreator{
    static countEndDiv;
    constructor(isVisible){        
        super(isVisible);
        this.countEndDiv = 0;               
    };

    incCountDiv(){
        this.setCountEndDiv(this.getCountEndDiv()+1);
    }

    decCountDiv(){
        this.setCountEndDiv(this.getCountEndDiv()-1);
    }

    newTable(){           
        super.newTable();
        this.incCountDiv();	        
    }

    newTableDiv(){        
        super.newTable();	       
        this.incCountDiv();	        
    }
    
    getCountEndDiv(){        
        return this.countEndDiv;
    }

    setCountEndDiv(value){       
            this.countEndDiv=value;    
    }

    endTableDiv(){
        super.iEndTableRow();	
        this.decCountDiv();
    }

    insertTableDivRow(){        
        if (this.getCountEndDiv()>1){
            this.endTableDiv();
        }
        super.iTableRow();
        this.incCountDiv();	        
    }

    getEndTable(){        
        while(this.getCountEndDiv()>0){
            this.endTableDiv();
        }                
        super.iEndTable()
        // console.log("----------------------------");
        // console.log(super.getReturnStr());
    }

    getHtmlResult(){        
        this.getEndTable();     
        return super.getReturnStr();
    }

    gr(){
        return this.getHtmlResult();
    }

    getParam(strResult,separator){
        let found = strResult.indexOf(separator);
        let result="";
        let aReturn=[];
        aReturn.push(found); 
        if (found!=-1){
            result=strResult.split(separator);    
            for(var i = 0; i < result.length; i++){
                aReturn.push(result[i]);           
            }
        }else{
            
            aReturn.push(strResult);
        }        
        return aReturn;
    }

    createMultiHeadStr(text){
        var mySplitResult=text.split(",");        
        this.createMultiHeader(mySplitResult);        
    }

    createMultiColStr(text){        
        var mySplitResult=text.split(",");        
        this.createMultiHeader(mySplitResult);        
    }

    createMultiHead(mySplitResult){
        
        super.iTableColHead();
        for(var i = 0; i < mySplitResult.length; i++){
            let result=this.getParam(mySplitResult[i],"|");   
            if ((result[0]!=(-1)) && (result[1]=="s")){    
                let strToPass = mySplitResult[i].substr((result[0]+1));                 
                let result2=this.getParam(strToPass,"|");   
                let strToPass2 = strToPass.substr((result2[0]+1));  
                super.iTableTitleSize(this.getStrRes(strToPass2),result[2]);
            }else{
                super.iTableTitle(this.getStrRes(mySplitResult[i]));        
            }
        }
        super.iEndTableColHead();
    }


    createMultiCol(mySplitResult){                
        super.iTableRow();
        for(var i = 0; i < mySplitResult.length; i++){
            let result=this.getParam(mySplitResult[i],"|");            
            if ((result[0]!=(-1)) && (result[1]=="h")){    
                let strToPass = mySplitResult[i].substr((result[0]+1));                
                super.iTableRowHed(this.getStrRes(strToPass));
            }else{
                super.iTableCol(this.getStrRes(mySplitResult[i]));        
            }
        }
        super.iEndTableRow();
    }

 
    getStrRes(resStr){
        let resultStr=resStr

        let result=this.getParam(resStr,"|");            
        if (result[0]!=(-1)){
            if (result[1]=="a"){                                        
                resultStr=super.iLink(result[2],result[3]);
            }else if (result[1]=="h"){                                        
                resultStr=result[2];
            }else{
                resultStr=[1];
            }            
        }
        return resultStr;
    }   
}
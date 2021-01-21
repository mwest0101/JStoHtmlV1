		var right = new divTableCreatorExtend();	
		right.setTableClass(getTableClass(7));	
		right.newTable();			
		right.createMultiHead(["Sitios Local"]);
		right.createMultiHead(["URL"]);
		right.createMultiCol(["a|test|http://localhost/tet1"]);
		right.createMultiCol(["a|test2|http://localhost/test2"]);
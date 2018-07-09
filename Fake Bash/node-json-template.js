//Todo Arrays of arrays break the code it starts indexing
// Adding to the beggining of an array concat or push/pop
//Rewirte the [] to {} and back
	const fs = require('fs');
	const filePath = process.argv[2];
	var parent = ""

	function traverse_it(obj){
	    for(var prop in obj){
	        if(typeof obj[prop]=='object'){

								 if (Array.isArray(obj[prop])){
									 tarray(obj[prop])
									 parent = ""

									//  handleArray(temp);



								 }else{
									 	parent += prop
										parent += "."
									 traverse_it(obj[prop]);
									 parent = ""


								 }
 	        }else{
						obj[prop] = parent + prop

	}}

			fs.writeFile('output.json', JSON.stringify(obj,null,2), () => {})
	}

	function tarray(obj){

	    for(var prop in obj){
	        if(typeof obj[prop]=='object'){

								 if (Array.isArray(obj[prop])){//Nested Arrays
 								 				tarray(obj[prop]);

								}else{ //It is an object

									 tarray(obj[prop]);

								 }
 	        }else{
						obj[prop] = prop
	}
}

	}


	fs.readFile(filePath, (error, contents) => {
	  if (error) throw error;

	  let data = JSON.parse(contents);

				traverse_it(data);

	});


	console.log("Success!");

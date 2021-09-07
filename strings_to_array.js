
// Group of string to array separate string to array elements
// Note call the function string_to_array("Inside here the long string with comma ata last,")


function string_to_array(string) {
    var string_to_array=[];
    var items_in_array="";
    for (i in string){
        if(string[i]==","){
            string_to_array.push(items_in_array);
            // console.log(items_in_array)
            items_in_array="";
        }
        else{
            items_in_array+=string[i];
        }
    }
    return(string_to_array);

}
// var Mystring="Complex number, Equality of complex numbers,\
// Graphical representation of complex number(Argand’s Diagram),\
// Polar form of complex numbers, Polar form of x+iy for different signs\
// of x,y, Exponential form of complex numbers, Mathematical\
// operation with complex numbers and their representation on Argand’s\
// Diagram, Circular functions of complex angles, Definition of\
// hyperbolic function, Relations between circular and hyperbolic\
// functions, Inverse hyperbolic functions, Differentiation and\
// Integration, Graphs of the hyperbolic functions, Logarithms of\
// complex quality, j(=i)as an operator(Electrical circuits),";

// string_to_array(Mystring);
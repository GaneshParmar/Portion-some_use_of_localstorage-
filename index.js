var foo=1;
// var chp_name_matrices=document.getElementById("topic");
// var chp_name_complex_numbers=document.getElementById("topic2");




class TOPIC{
    constructor(topic_id,Chapter_sub_topics,topic_no,object,localstorage_item_name,classname_topic) {  
        this.object=object;
        this.selected_topic=document.getElementById(topic_id);
        // this.Chapter_name=Chapter_name;
        this.sub_topics=Chapter_sub_topics;
        this.foo=1;
        this.topic_no=topic_no;
        this.localstorage_item_name=localstorage_item_name;
        this.classname_topic=classname_topic;
        this.Add_Topics();
    }

    Add_Topics() {
        var all_topics=" ";
        // for (var each_chapter in All_Chapters){
        for (var each_topic in this.sub_topics){
            var i=each_topic;
            // console.log(All_sub_topics[i]);
            var sr_no=parseInt(i)+1;
            var no_of_item=parseInt(i)+this.topic_no;
            all_topics += `<li class=${this.classname_topic} onclick='${this.object}.highlight(this,${no_of_item})'>`+sr_no+"."+this.sub_topics[i]+"</li><hr>";
        }
        // chp_name_matrices.innerHTML=all_topics;
        this.selected_topic.innerHTML=all_topics;
    }

    position(){
        // console.log("Ok in position");
        var temp=1;
        if (this.foo==1){
            this.selected_topic.style.transform="translateY(0%)";
            this.selected_topic.style.position="relative";
            // foo=0;
        }
        else{
            this.selected_topic.style.transform="translateY(-101%)";
            this.selected_topic.style.position="absolute";
            // foo=1;
        } 
        this.foo=temp-this.foo;
    }
    highlight(topic_done,list_no){
        console.log(list_no);
        // var topic_srno=list_no+1;
        var topic_states=JSON.parse(localStorage.getItem(this.localstorage_item_name));
        // console.log(topic_srno);
        // console.log(topic_done);
        if((topic_states[list_no])=="normal"){
            topic_done.style.background="#319832";
            topic_states[list_no]="done";
        }
        else{
            // console.log("Ok")
            topic_done.style.background="#ff512f";
            topic_states[list_no]="normal";
        }
        // console.log(topic_states);
        localStorage.setItem(`${this.localstorage_item_name}`,JSON.stringify(topic_states));
    }
};

// Function gives color to list
// function 



// 
//              Topics Here (List)
// 

// var matrices_topic_state=localStorage.setItem(tasks)


var matrices=["Inverse of a matrix", "Properties of matrices", "Elementary Transformation", "Rank of Matrix",  "Echelon or Normal Matrix", "Inverse of matrix",
                    "Linear equations", "Linear dependence and linear independence of vectors", "Linear transformation", "Characteristics roots and characteristics vectors", "Properties of characteristic vectors",
                     "CaleyHamilton Theorem", "Similarity of matrices","Reduction of matrix to a diagonal matrix which has elements as characteristics values"];

var comples_topics=": Complex number, Equality of complex numbers,\
Graphical representation of complex number(Argand’s Diagram),\
Polar form of complex numbers, Polar form of x+iy for different signs\
of x y, Exponential form of complex numbers, Mathematical\
operation with complex numbers and their representation on Argand’s\
Diagram, Circular functions of complex angles, Definition of\
hyperbolic function, Relations between circular and hyperbolic\
functions, Inverse hyperbolic functions, Differentiation and\
Integration, Graphs of the hyperbolic functions, Logarithms of\
complex quality, j(=i)as an operator(Electrical circuits) ,";               
var complex=new string_to_array(comples_topics);

// var All_sub_topics=[matrices,complex];

// Dbms chapter

var db_introduction_topics="What is database system, purpose of database system, view of data,\
relationaldatabases, database architecture, transaction management,\
"; 

var db_datamodal="The importance of data models, Basic building blocks, Business rules,\
The evolutionof data models, Degrees of data abstraction,";

var db_design="Database design and ER Model:overview, ERModel, Constraints,\
ERDiagrams, ERDIssues, weak entity sets, Codd’s rules, Relational\
Schemas, Introduction to UML,";

        //DBMS TOPIC TO ARRAY
var db_introduction_1=new string_to_array(db_introduction_topics);         
var db_datamodal_2=new string_to_array(db_datamodal);
var db_design_3=new string_to_array(db_design);




// Local storage

class Local_Storage_{
    constructor(item_name,topic_list,classname_topic,no_of_topics){
        this.item_name=item_name;
        this.topic_list=topic_list;
        this.classname_topic=classname_topic;
        this.no_of_topics=no_of_topics;
        this.set_localstorage();
    }
    total_all_topics_(list_of_topics) {
        var no_all_topics=0;
        for (var i in list_of_topics){
            var total_topic_in_each_chp=list_of_topics[i].length;
            no_all_topics=no_all_topics+total_topic_in_each_chp;
        }    
        return no_all_topics;
    }
    
    on_load_highlight(){
        var _topics_states=JSON.parse(localStorage.getItem(`${this.item_name}`));
        var _topics=document.getElementsByClassName(this.classname_topic);
        var total_no_topics=_topics.length;
        for(var ele in _topics_states){

            if(_topics_states[ele]=="normal"){
                _topics[ele].style.background="#ff512f";
            }
            else{
                _topics[ele].style.background="#319832";
            }
        }
    }

    set_localstorage(){
        if(localStorage.getItem(`${this.item_name}`)==null){
            var current_states=[];
            // var temp=0;
            var total_topics=this.total_all_topics_(this.topic_list);
            // console.log(top);
            for(var i=0;i<(this.no_of_topics);i++){
                current_states.push("normal");
                // temp+=1;
                // console.log(temp);
            }
            localStorage.setItem(`${this.item_name}`,JSON.stringify(current_states));
        }
        else{
            console.log("Ganesh");
            this.on_load_highlight();
        }
    }
}




// For creating the current state




// Add_Topics();



// Maths
var topic=new TOPIC("topic",matrices,0,"topic","maths_topics_state","maths_topics");
var topic_2=new TOPIC("topic2",complex,14,"topic_2","maths_topics_state","maths_topics");

// DBMS db_topic_1_ -> id of the li 
var db_topic_1=new TOPIC("db_topic_1_",db_introduction_1,0,"db_topic_1","dbms_topics_state","dbms_topics");
var db_topic_2=new TOPIC("db_topic_2_",db_datamodal_2,6,"db_topic_2","dbms_topics_state","dbms_topics");
var db_topic_3=new TOPIC("db_topic_3",db_design_3,11,"db_topic_3","dbms_topics_state","dbms_topics")
//Local storage for each Sub

var maths_localstorage=new Local_Storage_("maths_topics_state",[matrices,complex],"maths_topics",29);
var dbms_localstorage=new Local_Storage_("dbms_topics_state",[db_introduction_1,db_datamodal_2,db_design_3],"dbms_topics",20);
// var li_element_count=document.getElementsByTagName("li").length;

// var on_load_dbms=new on_load_highlight("dbms_topics_state","dbms_topics");
// var on_load_maths=new on_load_highlight("maths_topics_state","maths_topics");

var foo=1;
// var chp_name_matrices=document.getElementById("topic");
// var chp_name_complex_numbers=document.getElementById("topic2");




class TOPIC{
    constructor(topic_id,Chapter_sub_topics,topic_no,object) {  
        this.object=object;
        this.selected_topic=document.getElementById(topic_id);
        // this.Chapter_name=Chapter_name;
        this.sub_topics=Chapter_sub_topics;
        this.foo=1;
        this.topic_no=topic_no;
        this.Add_Topics();
    }

    Add_Topics() {
        var all_topics=" ";
        // for (var each_chapter in All_Chapters){
        for (var each_topic in this.sub_topics){
            var i=each_topic;
            // console.log(All_sub_topics[i]);
            var sr_no=parseInt(i)+1;
            all_topics += `<li onclick='${this.object}.highlight(this,${i})'>`+sr_no+"."+this.sub_topics[i]+"</li><hr>";
        }
        // chp_name_matrices.innerHTML=all_topics;
        this.selected_topic.innerHTML=all_topics;
    }

    position(){
        console.log("Ok in position");
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
        var topic_srno=list_no+this.topic_no+1;
        var topic_states=JSON.parse(localStorage.getItem("topic_state"));
        // console.log(topic_srno);
        // console.log(topic_done);
        if((topic_states[(topic_srno-1)])=="normal"){
            topic_done.style.background="#319832";
            topic_states[(topic_srno-1)]="done";
        }
        else{
            // console.log("Ok")
            topic_done.style.background="#ff512f";
            topic_states[topic_srno-1]="normal";
        }
        // console.log(topic_states);
        localStorage.setItem("topic_state",JSON.stringify(topic_states));
    }
};

// Function gives color to list
function on_load_highlight(){
    var topic_states=JSON.parse(localStorage.getItem("topic_state"));
    var topics_list=document.getElementsByTagName("li");
    // console.log("The topic list",topics_list);
    // // var topic_srno=1;

    for(var ele in topics_list){
        // if(ele==12){
        //     topic_srno=14;
        // }

            if((topic_states[(ele)])=="normal"){
                topics_list[ele].style.background="#ff512f";
                // topic_states[ele]="done";
            }
            else{
                topics_list[ele].style.background="#319832";
                topic_states[ele]="normal";
            }
        // topic_srno=topic_srno+1;
        }    
    }



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

var All_sub_topics=[matrices,complex];

// for(each_topic in All_sub_topics[1]){
//     console.log(All_sub_topics[1][each_topic]);
// }


// function Add_Topics() {
//     var all_topics=" ";
//     for (var each_chapter in All_Chapters){
//         for (var each_topic in All_sub_topics[each_chapter]){
//             var i=each_topic;
//             // console.log(All_sub_topics[i]);
//             var sr_no=parseInt(i)+1;
//             all_topics += `<li onclick='topic.highlight(this,${i})'>`+sr_no+"."+All_sub_topics[each_chapter][i]+"</li><hr>";
//         }
//         // chp_name_matrices.innerHTML=all_topics;
//         All_Chapters[each_chapter].innerHTML=all_topics;
//         all_topics="";
// }}


function total_all_topics_(list_of_topics) {
    var no_all_topics=0;
    for (var i in list_of_topics){
        var total_topic_in_each_chp=list_of_topics[i].length;
        no_all_topics=no_all_topics+total_topic_in_each_chp;
    }    
    return no_all_topics;
}


// Local storage

if(localStorage.getItem("topic_state")==null){
    var current_states=[];
    var total_topics=total_all_topics_([matrices,complex]);
    for(i in new Range(0,total_topics)){
        current_states.push("normal");
    }
    localStorage.setItem("topic_state",JSON.stringify(current_states));
}

// For creating the current state




// Add_Topics();
var topic=new TOPIC("topic",matrices,0,"topic");
var topic_2=new TOPIC("topic2",complex,14,"topic_2");

on_load_highlight();
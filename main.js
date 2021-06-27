    student_name=[];
    function submit(){
        var n1=document.getElementById("s1").value;
        var n2=document.getElementById("s2").value;
        var n3=document.getElementById("s3").value;
        var n4=document.getElementById("s4").value;
        student_name.push(n1);
        student_name.push(n2);
        student_name.push(n3);
        student_name.push(n4);
        console.log(student_name);
        document.getElementById("display_name").innerHTML=student_name;
        document.getElementById("submit_button").style.display="none";
        document.getElementById("sort_button").style.display="inline-block"
    }
    function sort(){
student_name.sort();
console.log(student_name);
document.getElementById("display_name").innerHTML=student_name;
    }
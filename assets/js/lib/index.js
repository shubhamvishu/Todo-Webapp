var obj={};
obj['tasks']=[];
if(window.localStorage.getItem("tasklist")!==null){
    obj=JSON.parse(window.localStorage.getItem("tasklist"));
    console.log(obj);
    for(var i=0;i<obj['tasks'].length;i++){
        $("<li><span><i id='delbutton' class='material-icons'>delete</i></span>"+obj['tasks'][i]+"</li>").appendTo("#todolist");
        if($("#change-theme").text()==="Light Theme"){
            console.log("1");
            $("#todolist li").last().addClass("todo-list");
            //$("#todolist li").last().addClass("toggle-mode-li");
        }
        else{
            console.log($("#todolist li").last());
            $("#todolist li").last().addClass("toggle-mode-li");
        }
    }
}

$('ul').on("click","li",function(){
    $(this).toggleClass('completed');
});
$('ul').on("click","span",function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
});
$("input[type='text']").keypress(function(e){
    if(e.which===13){
        console.log("yo");
        var addtodoText=$("input[type='text']").val();
        $("<li><span><i id='delbutton' class='material-icons'>delete</i></span>"+addtodoText+"</li>").appendTo("#todolist");
        if($("#change-theme").text()==="Light Theme"){
            console.log("1");
            $("#todolist li").last().addClass("todo-list");
        }
        else{
            console.log($("#todolist li").last());
            $("#todolist li").last().addClass("toggle-mode-li");
        }
        $(this).val("");
        obj['tasks'].push(addtodoText);
        var str=JSON.stringify(obj);
        window.localStorage.setItem("tasklist",str);
    }
});
$("#editbutton").click(function(){
    $("input[type='text']").fadeToggle(500);
});

$("#change-theme").on("click",function(){
    console.log("yayy");
    $("html").toggleClass("toggle-mode");
    if($(this).text()==="Light Theme"){
        $(this).text("Dark Theme");
        $("#todolist li").removeClass("todo-list");
        $("#todolist li").addClass("toggle-mode-li");
        $("#addtodoinput").removeClass("todo-add-text");
        $("#addtodoinput").addClass("toggle-todo-add-text");
    } 
    else {
        $(this).text("Light Theme");
        $("#todolist li").addClass("todo-list");
        $("#todolist li").removeClass("toggle-mode-li");
        $("#addtodoinput").addClass("todo-add-text");
        $("#addtodoinput").removeClass("toggle-todo-add-text");
    }
    
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'top',
        hoverEnabled: true
      });
  });



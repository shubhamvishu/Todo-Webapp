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
        $(this).val("");
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
        $("#todolist li").toggleClass("toggle-mode-li");
        $("#addtodoinput").removeClass("todo-add-text");
        $("#addtodoinput").toggleClass("toggle-todo-add-text");
    } 
    else {
        $(this).text("Light Theme");
        $("#todolist li").addClass("todo-list");
        $("#todolist li").toggleClass("toggle-mode-li");
        $("#addtodoinput").addClass("todo-add-text");
        $("#addtodoinput").toggleClass("toggle-todo-add-text");
    }
    
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'top',
        hoverEnabled: true
      });
  });


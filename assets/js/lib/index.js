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
        $("<li><span><i class='fa fa-trash'></i></span>"+addtodoText+"</li>").appendTo("#todolist");
        $(this).val("");
    }
});
$("#editbutton").click(function(){
    $("input[type='text']").fadeToggle(500);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'top',
        hoverEnabled: true
      });
  });


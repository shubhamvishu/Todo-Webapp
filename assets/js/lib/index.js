$('ul').on("click","li",function(){
    $(this).toggleClass('completed');
});
$('ul').on("click","span",function(e){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    e.stopPropagation();
});
$("input[type='text']").keypress(function(e){
    if(e.which===13){
        console.log("yo");
        var addtodoText=$("input[type='text']").val();
        $("<li><span>X</span>"+addtodoText+"</li>").appendTo("#todolist");
        $(this).val("");
    }
});
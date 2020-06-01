// check off Specific ToDos By Clicking

$("li").click(function(){
$(this).toggleClass("completed");
});


$("span").click(function(event){
    $(this).toggleClass("deleted");
    $(this).parent().fadeOut(500, function(){
        $this.remove();
    });
    event.stopPropagation();
});
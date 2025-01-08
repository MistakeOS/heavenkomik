
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });
    $(document).ready(function(){
        $("#login").click(function()
    {
    var uid = $("#uid").val();
    var  password = $("#password").val();
if(   uid =='' ||  password =='' )
{
$('input[type="text"],input[type="password"]').css("border","2px solid blue");
$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px blue");
alert("please   fill  all   fields..!!!!"); 
}
else
{
    if (password.length < 8) {
       $('input[type="password"]').css("border","2px solid blue");
       $('input[type="password"]').css("box-sahdow","0 0 3px blue");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    alert('password must be of minimum 8 characters');
        $('#password').val('');
} 
else
{
	if (window.confirm('welcome back '+uid)) 
{
window.location.href="aft_login/pre_comic.jsp";
}
}
}    });    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }
        
    });


})(jQuery);
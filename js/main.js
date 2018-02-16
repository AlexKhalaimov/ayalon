$(function () {
    if ($('.stageForm').length != 0) {
        $('input:checkbox').on('change', function(){
           if ($(this).prop('checked')) {
               $(this).parent().addClass('_checked');
           }
           else {
                $(this).parent().removeClass('_checked');
           }
        });
        $('input:radio').on('change', function(){
			$(this).parent().parent().children().removeClass('_checked');
            $(this).parent().addClass('_checked');
        });
    }
    if ($('.step1aPopup').length !=0) {
        $('#stage1cModalTrigger').click(function (event) {
            event.preventDefault();
            $('#stage1cModal').modal();
        })
    }
    
})

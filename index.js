counter=0;
        $('document').ready(function(){
            refresh();
            refreshButton();
        });
        function refreshButton()
        {
            $('div.new').click(function(){
                var $newItem=$("<div><div class='checkbox material-icons'></div><span class='list_text' contenteditable='true'></span><div class='close material-icons'>close</div></div>");
                $newItem.insertBefore($(this));
                $newItem.find('span').focus();
                refresh();
            });
        }
        $('#newList').keyup(function(e){
            if(e.which==13)
                {
                    
                    $newItem=$("<li><div class='title' contenteditable='true'>"+$(this).val().trim()+"</div><div class='list'><div class='new'><div class='checkbox'></div><span>+ List Item</span></div></div></li>");
                    $('#page>.wrapper>div').eq(counter%3).prepend($newItem);
                    $newItem.find('.list_text').focus();
                    counter++;
                    $(this).val('');
                    refreshButton();
                    refresh();
                }
        });
        function refresh()
        {
            $('.checkbox').click(function(){
                $(this).parent().toggleClass('active');
                if($(this).parent().hasClass('active'))
                    {
                        $(this).html('check');
                        $(this).parent().find('.list_text').attr('contenteditable','false');
                    }
                else 
                    {
                        $(this).html('');
                        $(this).parent().find('.list_text').attr('contenteditable','true');
                    }
            });
            $('.list_text').keyup(function(e){
                if(e.which==13){
                    $newItem=$("<div><div class='checkbox material-icons'></div><span class='list_text' contenteditable='true'></span><div class='close material-icons'>close</div></div>");
                    $newItem.insertAfter($(this).parent());
                    $(this).blur();
                    $newItem.find('.list_text').focus();
                    $(this).find('div').remove();
                    $newItem.find('.list_text').html('');
                    refresh();
                }
            });
            $('.list>div').mouseover(function(){
                $(this).find('.close').addClass('active');
            });
            $('.list>div').mouseout(function(){
                $(this).find('.close').removeClass('active');
            });
            $('.list>div>.close').click(function(){
                $(this).parent().remove();
            });
        }
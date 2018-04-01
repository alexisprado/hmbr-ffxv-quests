

$( function(){

    function hunt(){
        var self = this;

        self.container = null;
        self.init = function(){
            self.container.find(".hunt-enemy-container a").on("click", function(e){
                e.preventDefault();

                element = $(this);
                if (element.hasClass("disabled")) return;
                element.addClass("disabled");

                self.container.find(".new-quest-accepted").toggleClass("active");

                setTimeout( function(){
                    element.removeClass("disabled");
                }, 1000);
            });
        };
        
        return {
            init: function(){
                self.container = $(".new-quest-container");
                self.init();
            }
        }
    };

    window.hmbr.ffxvnewquest.hunt = hunt;

    $(document).ready( function(){
        var hunt = window.hmbr.ffxvnewquest.hunt();
        hunt.init();
    });
});
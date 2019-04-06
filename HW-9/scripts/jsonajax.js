 $(document).ready(function () {
            $("button").click(function () {
                $("#earthquakeInfo").load("data/earthquake.json", function(responseText){
                    var earthquake = JSON.parse(responseText);

                });
            });
        });

       

 $(document).ready(function () {
            $("button").click(function () {
                $("#earthquakeInfo").load("data/earthquakeInfo.txt", fadeText);
            });
        });

        function fadeText()
        {
            $("#earthquakeInfo").fadeOut("slow").fadeIn("slow");
        }

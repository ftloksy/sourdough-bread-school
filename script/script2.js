$(document).ready(function() {

	/* 
	 * follow the Html <tag> to load every pages. 
	 * Fist load the page. show the infomation about the sourdough school.
	 */
	$("me").show();
	$("info").hide();

	$("header").load("./includeHtml/header.html", function() {
		$("myName").load("./includeHtml/myName.html");
		$("navbar").load("./includeHtml/navigationBar.html", function() {


			/* Click the link at navigator bar */
			$("nav#aboutme").on("click", function() {
				$("info").hide();
				$("me").show();
			});

			$("nav#detail").on("click", function() {
				$("me").hide();
				$("info").show();
			});

		});
	});



	$("yest").load("./includeHtml/yest.html");

	$("baker").load("./includeHtml/baker.html",
		/* user can input his email at here. */
		function() {
			$("subscribe").load("./includeHtml/email_input.html");
		}
	);

	$("bread").load("./includeHtml/bread.html");

	$("noodle").load("./includeHtml/noodle.html");

	$("gi").load("./includeHtml/gi.html");

	$("faq").load("./includeHtml/faq.html",
	                function() {
                        $("subscribe").load("./includeHtml/email_input.html");

			/* hide all faq-answer at load page.  when user click it. it will show again. */
                        $("div.faq-answer").hide();
                        $("button.faq-question").on("click", function(){
                                let clickThis = $(this).next("div.faq-answer");
                                let clickButton = $(this);
                                $("div.faq-answer").each(function(){
                                        /* find the click button question's answer. */
                                        if ($(this).text() == clickThis.text()) {

                                                /* If under clicked button's answer is showing then hide it. */
                                                if ($(this).css("display") != "none") {
                                                        $(this).hide();

                                                        /* and rotate the svg icon to "x" **/
                                                        $(this).prev("button").children("svg").css("transform", `rotate(0deg)`);
                                                } else {

                                                        /* If under clicked button's answer is hide, show it and rotate the svg icon to "+" */
                                                        $(this).show();
                                                        $(this).prev("button").children("svg").css("transform", `rotate(45deg)`);
                                                }
                                        } else {
                                                /* Change all unclicked button's svg icon to "x" */
                                                $(this).prev("button").children("svg").css("transform", `rotate(0deg)`);

                                                /* and If the unclicked button's answer is show, hide it. */
                                                if ($(this).css("display") != "none") {
                                                        $(this).hide();
                                                }
                                        }
                                });
                        });
                });

	$("footer").load("./includeHtml/footer.html");

});

$(document).ready(function () {

	window.setInterval(function(){
		if (navigator.onLine) {
			$('.menu__item--apps').show();
			console.log('online');
		} else {
			$('.menu__item--apps').hide();
			console.log('offline');
		}
	}, 5000);

	$('.clear').click(function () {

        var rly = confirm("Точно удаляем все заявки?");

        if (rly) {
            localStorage.removeItem('AllApplications');
            updateList();
        }

	})

	$('.header__action').click(function () {

		if ( $(this).hasClass('menu__item--active') ) {
			return false;
		}

		$('.menu__item').removeClass('menu__item--active');
		$(this).addClass('menu__item--active');
		$('.popup').removeClass('popup--active');
		$('.application').toggleClass('popup--active');
		$('.leaflet-control-layers').addClass('leaflet-control-layers--hide');
		$('.close').addClass('close--active');
	});

	$('.menu__item--forgame').click(function () {

		if ($(this).hasClass('menu__item--active')) {
			return false;
		}

		$('.menu__item').removeClass('menu__item--active');
		$(this).addClass('menu__item--active');
		$('.popup').removeClass('popup--active');
		$('.forgame').toggleClass('popup--active');
		$('.leaflet-control-layers').addClass('leaflet-control-layers--hide');
		$('.close').addClass('close--active');
	});

	$('.menu__item--apps').click(function () {

		if ($(this).hasClass('menu__item--active')) {
			return false;
		}

		$('.menu__item').removeClass('menu__item--active');
		$(this).addClass('menu__item--active');
		$('.popup').removeClass('popup--active');
		$('.apps').toggleClass('popup--active');
		$('.leaflet-control-layers').addClass('leaflet-control-layers--hide');
		$('.close').addClass('close--active');

	});

	$('.menu__item--office').click(function () {

		if ($(this).hasClass('menu__item--active')) {
			return false;
		}

		$('.menu__item').removeClass('menu__item--active');
		$(this).addClass('menu__item--active');
		$('.popup').removeClass('popup--active');
		$('.leaflet-control-layers').removeClass('leaflet-control-layers--hide');
		$('.close').removeClass('close--active');
	});

	$('.close').click(function () {
		$('.menu__item').removeClass('menu__item--active');
		$('.popup').removeClass('popup--active');
		$('.leaflet-control-layers').removeClass('leaflet-control-layers--hide');
		$(this).removeClass('close--active');
		$('.menu__item--office').addClass('menu__item--active')
	})

	$('.form__field-input--name, .form__field-input--phone').click(function () {
		$(this).removeClass('form__field-input--error');
	})

	$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
        return o;
    };

    $('.send-apps').click(function () {

        $('.message').addClass('message--active');
        setTimeout(function(){
          $('.message').removeClass('message--active');
        }, 3000);

	    var applicationsToSend = JSON.parse(localStorage.getItem('AllApplications')) || [];

        $.ajax({
            url:'sendmail.php',
            type:'POST',
            data:{'data': applicationsToSend}
        });
    });

	function updateList() {
		$( ".applications__tr" ).remove();

		applicationList = JSON.parse(localStorage.getItem('AllApplications')) || [];
		console.log(applicationList)

		var tbody = $('#applications'),
			props = ["name", "education", "year", "phone", "mail"];
		$.each(applicationList, function(i, app) {
			var lol = JSON.parse(app);
			var tr = $('<div class="applications__tr">');
			$.each(props, function(i, prop) {
				$('<p>').html(lol[prop]).appendTo(tr);
			});
		  tbody.append(tr);
		});

		// var tbody = $('table tbody'),
		// 	props = ["name", "education", "year", "about"];
		// $.each(applicationList, function(i, app) {
		// 	var lol = JSON.parse(app);
		// 	var tr = $('<tr class="applications__tr">');
		// 	$.each(props, function(i, prop) {
		// 		$('<td>').html(lol[prop]).appendTo(tr);
		// 	});
		//   tbody.append(tr);
		// });
	}

	$('.menu__item--apps').click(function () {
		updateList()
	});

    $('.application__content').submit(function(e) {

		e.preventDefault();

		var applicationList = JSON.parse(localStorage.getItem('AllApplications')) || [];
		var application = {};


		if ( $('.form__field-input--name').val().length < 1 ) {
			$('.form__field-input--name').addClass("form__field-input--error");
		} else if ( $('.form__field-input--phone').val().length < 1) {
			$('.form__field-input--phone').addClass("form__field-input--error");
		} else {
			application = JSON.stringify($('.application__content').serializeObject());
			applicationList.push(application);
			localStorage.setItem('AllApplications', JSON.stringify(applicationList));
			$('.form__field-input, .form__field-radio').val('').removeAttr('checked');
			$('.menu__item').removeClass('menu__item--active');
			$('.popup').removeClass('popup--active');
			$('.close').removeClass('close--active');
			$('.leaflet-control-layers').toggleClass('leaflet-control-layers--hide');
			$('.menu__item--office').addClass('menu__item--active')
			$('.success').addClass('success--active');
            setTimeout(function(){
              $('.success').removeClass('success--active');
            }, 3000);
            return false;
		}

		return false;

    });
});

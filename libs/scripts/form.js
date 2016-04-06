$(document).ready(function () {

	$('.clear').click(function () {
		localStorage.removeItem('AllApplications');
	})

	$('.header__action').click(function () {

		if ( $(this).hasClass('menu__item--active') ) {
			return false;
		}

		$('.menu__item').removeClass('menu__item--active');
		$(this).addClass('menu__item--active');
		$('.popup').removeClass('popup--active');
		$('.application').toggleClass('popup--active');
		$('.leaflet-control-layers').toggleClass('leaflet-control-layers--hide');
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
		$('.leaflet-control-layers').toggleClass('leaflet-control-layers--hide');
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
		$('.leaflet-control-layers').toggleClass('leaflet-control-layers--hide');
		$('.close').addClass('close--active');
	});

	$('.menu__item--office').click(function () {

		if ($(this).hasClass('menu__item--active')) {
			return false;
		}

		$('.menu__item').removeClass('menu__item--active');
		$(this).addClass('menu__item--active');
		$('.popup').removeClass('popup--active');
		$('.leaflet-control-layers').toggleClass('leaflet-control-layers--hide');
		$('.close').removeClass('close--active');
	});

	$('.close').click(function () {
		$('.menu__item').removeClass('menu__item--active');
		$('.popup').removeClass('popup--active');
		$('.leaflet-control-layers').toggleClass('leaflet-control-layers--hide');
		$(this).removeClass('close--active');
		$('.menu__item--office').addClass('menu__item--active')
	})

	$('.form__field-input--name, .form__field-input--phone').click(function () {
		$(this).removeClass('form__field-input--error');
	})

	$.fn.serializeObject = function()
{
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

$(function() {
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

			applicationList = JSON.parse(localStorage.getItem('AllApplications')) || [];

			var tbody = $('table tbody'),
				props = ["name", "education", "year", "about"];
			$.each(applicationList, function(i, app) {
				var lol = JSON.parse(app);
				console.log(lol);
				var tr = $('<tr>');
				$.each(props, function(i, prop) {
					console.log(lol[prop]);
					$('<td>').html(lol[prop]).appendTo(tr);
				});
			  tbody.append(tr);
			});
			
			return false;
		}

		return false;

    });
});

});

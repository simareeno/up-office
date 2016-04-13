<!DOCTYPE html>
<html lang="en" manifest="cache.manifest">
<head>
	<meta charset="UTF-8">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content="Innova map" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<link rel="stylesheet" href="css/leaflet.css">
	<link rel="stylesheet" href="css/form.css">
	<link rel="stylesheet" href="css/global.css">
	<link rel="stylesheet" href="css/map.css">
	<script src="scripts/jquery-2.2.2.min.js" charset="utf-8"></script>
	<script src="scripts/leaflet.js" charset="utf-8"></script>
	<title>Innova office interactive map</title>
	<link rel="apple-touch-icon" sizes="57x57" href="img/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png" />
</head>
<body>

	<div class="wrapper">
		<div class="header">
			<div class="header__menu menu">
				<div class="menu__item menu__item--forgame">О Фогейме</div>
				<div class="menu__item menu__item--office menu__item--active">Наш офис</div>
				<div class="menu__item menu__item--apps"><a href="/apps.html"></a>Заявки</div>
			</div>
			<div class="header__action menu__item">
				<div class="button button--main">Подать заявку</div>
			</div>
		</div>
		<div class="map" id="map"></div>
		<div class="close"></div>
		<div class="success">заявка отправлена</div>
		<div class="application popup">
			<div class="application__content">
				<div class="application__content-header">Заявка на&nbsp;участие в&nbsp;программе развития молодых специалистов</div>
				<form class="application__content form" id="application" action="" method="post">
					<div class="form__field">
						<div class="form__field-title">Имя и фамилия</div>
						<input class="form__field-input form__field-input--name" placeholder="Как тебя зовут?" name="name" form="application" type="text" class="form__field-input">
					</div>
					<div class="form__field">
						<div class="form__field-title">Вуз и специальность</div>
						<input class="form__field-input" name="education" placeholder="БАУМАНКА, ИНЖЕНЕР-ГИДРОАКУСТИК" form="application" type="text" class="form__field-input">
					</div>
					<div class="form__field">
						<div class="form__field-title">Год выпуска</div>
						<div class="form__field-radio-block">
							<input id="2015" class="form__field-radio" type="radio" name="year" value="2015">
							<label class="form__field-radio-label" for="2015">2015</label>
						</div>
						<div class="form__field-radio-block">
							<input id="2016" class="form__field-radio" type="radio" name="year" value="2016">
							<label class="form__field-radio-label" for="2016">2016</label>
						</div>
						<div class="form__field-radio-block">
							<input id="2017" class="form__field-radio" type="radio" name="year" value="2017">
							<label class="form__field-radio-label" for="2017">2017</label>
						</div>
						<div class="form__field-radio-block">
							<input id="2018" class="form__field-radio" type="radio" name="year" value="2018">
							<label class="form__field-radio-label" for="2018">2018</label>
						</div>
						<div class="form__field-radio-block">
							<input id="2019" class="form__field-radio" type="radio" name="year" value="2019">
							<label class="form__field-radio-label" for="2019">2019</label>
						</div>
						<div class="form__field-radio-block">
							<input id="2020" class="form__field-radio" type="radio" name="year" value="2020">
							<label class="form__field-radio-label" for="2020">2020</label>
						</div>
						<div class="form__field-radio-block">
							<input id="2021" class="form__field-radio" type="radio" name="year" value="2021">
							<label class="form__field-radio-label" for="2021">2021</label>
						</div>
					</div>
					<div class="form__field">
						<div class="form__field-title">Контактный телефон</div>
						<input class="form__field-input form__field-input--phone" name="phone" placeholder="+7 ХХХ ХХХ ХХ ХХ" form="application" type="text" class="form__field-input">
					</div>
					<div class="form__field">
						<div class="form__field-title">E-mail</div>
						<input class="form__field-input form__field-input--mail" name="mail" placeholder="go@freeman.ru" form="application" type="text" class="form__field-input">
					</div>
					<div class="form__field">
						<input class="form__field-submit button button--main" value="подать заявку" form="application" type="submit">
					</div>
				</form>
			</div>
		</div>

		<div class="forgame popup">
			<div class="application__content">
				<div class="application__content-header">Фогейм — один из проектов IT-компании Иннова</div>

				<div class="forgame__left">
					<div class="forgame__text">
						Мы&nbsp;занимаемся изданием игр на&nbsp;территории России, СНГ и&nbsp;Европы. В&nbsp;Фогейме зареги-стрировано 20&nbsp;000&nbsp;000&nbsp;аккаунтов, каждый день играет до&nbsp;500&nbsp;000&nbsp;человек. Сегодня на&nbsp;игровой платформе &laquo;Фогейм&raquo; есть 10&nbsp;популярных MMO-проектов,
					</div>
					<div class="forgame__text">
						среди которых легендарная Lineage&nbsp;2, ведущий киберспортивный шутер Point Blank, красивая ролевая игра Aion, нашумевший экшен Blade &amp;&nbsp;Soul. С&nbsp;недавних пор в&nbsp;Фогейме есть не&nbsp;только ММО-проекты, но&nbsp;и&nbsp;мобильные игры.
					</div>
					<div class="forgame__right">
						<div class="forgame__text forgame__text--small">
							<img src="img/innova.png" alt="">&mdash;&nbsp;российская IT-компания, которая занимается изданием компьютерных и&nbsp;мобильных игр, поддержкой онлайн-кинотеатра &laquo;Аййо&raquo;, созданием и&nbsp;развитием развлекательно-образовательных сервисов.
						</div>
					</div>
					<div class="forgame__partners">
						<div class="forgame__partners-partner">
							<div class="forgame__partners-partner-logo"><img src="img/microsoft.png" alt=""></div>
							<div class="forgame__partners-partner-name">Halo Online</div>
						</div>
						<div class="forgame__partners-partner">
							<div class="forgame__partners-partner-logo"><img src="img/NCsoft.png" alt=""></div>
							<div class="forgame__partners-partner-name">Lineage 2,<br /> Blade &amp; Soul</div>
						</div>
						<div class="forgame__partners-partner">
							<div class="forgame__partners-partner-logo"><img src="img/valhalla.png" alt=""></div>
							<div class="forgame__partners-partner-name">Devil’s Third<br /> Online</div>
						</div>
						<div class="forgame__partners-partner">
							<div class="forgame__partners-partner-logo"><img src="img/nexon.png" alt=""></div>
							<div class="forgame__partners-partner-name">Atlantica Online</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="apps popup">
			<div class="application__content">
				<div class="wrap">

					<div class="button button--main send-apps" id="copy-all" style="display:inline-block; margin-right: 20px;">Отправить на почту</div>
					<div class="button button--black clear" style="display:inline-block">Удалить</div>
					<div class="message">Заявки улетели на up@inn.ru</div>	
					<div class="applications" id="applications" contenteditable="true"></div>

				</div>
			</div>
		</div>
	</div>

	<div id="placeholder">
		<div id="progress"></div>
		<div id="appstatus"></div>
		<div class="button button--close" style="width: 120px;margin-top:30px;">Закрыть</div>
	</div>


	<script>
		var cacheStatusValues = [];
		cacheStatusValues[0] = 'uncached';
		cacheStatusValues[1] = 'idle';
		cacheStatusValues[2] = 'checking';
		cacheStatusValues[3] = 'downloading';
		cacheStatusValues[4] = 'updateready';
		cacheStatusValues[5] = 'obsolete';

		var cache = window.applicationCache;
		cache.addEventListener('checking',logEvent,false);
		cache.addEventListener('noupdate',logEvent,false);
		cache.addEventListener('downloading',logEvent,false);
		cache.addEventListener('cached',logEvent,false);
		cache.addEventListener('updateready',logEvent,false);
		cache.addEventListener('obsolete',logEvent,false);
		cache.addEventListener('error',logEvent,false);
		cache.addEventListener('onchecking',logEvent,false);
		cache.addEventListener('ondownloading',logEvent,false);
		cache.addEventListener('oncached',logEvent,false);
		cache.addEventListener('onerror',logEvent,false);

		var appstatus = document.querySelector('#appstatus');
		var progress = document.querySelector('#progress');

		window.applicationCache.onprogress = function (e) {
			var message = 'Скачал..';

			if (e.lengthComputable) {
				var myMessage = message + Math.round(e.loaded / e.total * 100) + '%';
				progress.innerHTML = myMessage;
			} else {
				console.log(message);
			};
		};

		function logEvent(e) {
			var online, status, type, message, myMessage;
			online = (navigator.onLine) ? 'да' : 'нет';
			status = cacheStatusValues[cache.status];
			type = e.type;
			message = 'online: ' + online;
			message+= ', event: ' + type;
			message+= ', status: ' + status;
			if (type == 'error' && navigator.onLine) {
				message+= ' (ошибка в коде)';
			}
			appstatus.innerHTML = message;
		}
	</script>

	<script src="scripts/form.js" charset="utf-8"></script>
	<script src="scripts/map.js" charset="utf-8"></script>

</body>
</html>

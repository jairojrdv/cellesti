/**
 * Jquery language selector plugin.
 *
 * @author   Muhammad Umer Farooq <lablnet01@gmail.com>
 * @author-profile https://www.facebook.com/Muhammadumerfarooq01/
 *
 * For the full copyright and license information, please view the LICENSE
 *  file that was distributed with this source code.
 *
 * @license MIT
 */

class LanguageSelector {
	setLang(lang)
	{
		var l;
		l = lang.toLowerCase();
		localStorage.setItem('lang', l);

		return true;
	}
	getLang()
	{
		var lang = localStorage.getItem('lang');
		
		if (lang != null) {
			return lang;
		} else {
			var navigatorLang = navigator.language.slice(0, 2);
			var supportedLangs = ['en', 'pt', 'fr', 'de', 'es'];
			
			if (supportedLangs.includes(navigatorLang)) {
				return navigatorLang;
			} else {
				return 'en';
			}
		}
	}
	
	removeLang()
	{
		localStorage.removeItem('lang');

		return true;
	}
	loadLang()
	{
		var l = this.getLang();
		var strs = lang[l];

		return strs;
	}
	parse()
	{
		var rtl = ['ar', 'ur', 'fa', 'he', 'arc', 'az', 'dv', 'arabic', 'aramaic', 'azeri', 'maldivian', 'dhivehi', 'hebrew', 'kurdish', 'persian', 'urdu'
		];
		var lang = this.loadLang();
		var len = lang.length - 1;
		var keys = Object.keys(lang);
		var values = Object.values(lang);

		for (var i = 0; i <= keys.length - 1; i++) {
			$("body").children().each(function () {
		    	$(this).html( $(this).html().replace(keys[i],values[i]) );
			});
		}
		document.querySelector('.flag-language img').src = document.querySelector('.flag-language img').src.replace(':choose', lang[':choose'])
		document.querySelector('title').innerHTML = document.querySelector('title').innerHTML.replace(':title', lang[':title'])
  
		setTimeout(() => {
			document.querySelector('.face').style.display = 'none'
			document.querySelector('#hubspot-messages-iframe-container').style.opacity = '1'
		}, 2000)
		if (rtl.includes(this.getLang())) {
			document.body.style.direction = 'rtl';
		}
	}
}

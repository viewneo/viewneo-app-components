 class ThemeService {

 	constructor() {
 		this.theme = {};
 	}

    setTheme(themeObj) {
        console.log('theme:', themeObj);
        this.theme = themeObj;
    }

    getTheme() {
    	return(this.theme);
    }

}

module.exports = new ThemeService();
 class ThemeService {

 	constructor() {
 		this.theme = {};
 	}

    setTheme(themeObj) {
        this.theme = themeObj;
    }

    getTheme() {
    	return(this.theme);
    }

}

module.exports = new ThemeService();
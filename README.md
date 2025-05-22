# Postcss-rtl in angular-19

# ⭐ תנו כוכב! / Give a Star!
אם הפרויקט הזה עזר לכם, נשמח אם תסמנו כוכב ⭐ על הריפו!
זה עוזר לנו לדעת שהמידע שימושי, ומעודד אותנו להמשיך ולשפר.
אם נתקלתם בבעיה או שיש לכם רעיון לשיפור – אתם מוזמנים לפתוח issue או pull request.

If you found this project helpful, please consider giving it a ⭐!
It lets us know the project is useful and motivates further improvements.
Feel free to open an issue or a pull request if you have feedback or suggestions.

## עברית
חיפשתי איך אמורים לבצע **PostCSS - RTL** לאתרים בשפות **עברית** ו**ערבית** –  
ולא מצאתי מידע מסודר בנושא הזה בשום מקום.

בעזרת **GPT** ניסוי וטעיה, הנה התוצאה לפניכם –  
השתמשתי בתוסף `postcss-rtl` ובניה מותאמת של אנגולר `webpack`.

### הוראות
התקן את התלויות:
```
npm install --save-dev postcss postcss-rtl postcss-loader @angular-builders/custom-webpack
```
צור קובץ בשם `webpack.config.js` בתיקיית השורש של הפרויקט שלך, והדבק את התוכן הבא:
```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-rtl')
                                ]
                            }
                        }
                    },
                ]
            }
        ],
    }
};
```
עדכן את הקובץ `angular.json` כך שהבנייה תתבצע עם Webpack מותאם אישית:
```json
"architect": {
  "build": {
    "builder": "@angular-builders/custom-webpack:browser",
    "options": {
      "customWebpackConfig": {
        "path": "webpack.config.js"
      },
      ...
    }
  },
  "serve": {
    "builder": "@angular-builders/custom-webpack:dev-server",
    ...
  }
}
```


## English
After searching extensively for a proper way to implement **PostCSS RTL** support for **Hebrew** and **Arabic** websites in Angular,
I couldn't find any clear or official documentation.

With the help of GPT and some trial and error,
I managed to make it work using the postcss-rtl plugin and a custom Angular Webpack configuration.

### How to define
Install the required development dependencies:
```
 npm install --save-dev postcss postcss-rtl postcss-loader @angular-builders/custom-webpack
```

Create a file named `webpack.config.js` in the root of your project with the following content:
```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-rtl')
                                ]
                            }
                        }
                    },
                ]
            }
        ],
    }
};
```

Update your `angular.json` to use a custom Webpack configuration:
```json
"architect": {
  "build": {
    "builder": "@angular-builders/custom-webpack:browser",
    "options": {
      "customWebpackConfig": {
        "path": "webpack.config.js"
      },
      ...
    }
  },
  "serve": {
    "builder": "@angular-builders/custom-webpack:dev-server",
    ...
  }
}
```






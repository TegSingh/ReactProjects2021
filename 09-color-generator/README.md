#### Values JS

[values.js](https://github.com/noeldelgado/values.js)

Following are the features of this code
1. **Values.js:** This is an external library that we have to install. It can be found at the link above\
This library can be installed using 
```bash
npm install values.js --save
```
Then the file is added to the package.json\
The all() method generates shades and tints and creates variations as per the argument. If argument is 10, the tints and shades are divided by 10%
2. **React.Fragment** used when there are 2 child DOM components in the returned JSX
3. Good programming practice to use seperate file (here called utils.js) for utility type methods
4. Manipulate Styling using classnames and states as in Input for the color form
5. Inline style and similar applications of **template string**
6. **Navigator Object** for copy to clipboard functionality
7. **SetTimeout** method and its use\
**NOTE:** Whenever used in useEffect setTimeout and setInterval need to return a function which clears the interval/timeout callback
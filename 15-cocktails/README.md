# Important: Cocktails

Following are the important features of this project
1. The project uses React Router functionality. This works with the *npm install react-router-dom* 
2. The project gives an example of adding the components in a seperate directory called components
3. Includes the **exact** prop in Route tags. This prop signifies that the url should exactly contain the path and not anything over that. For instance, if the exact path is "/", then the path "\Hello\World" will not be a match
4. The pages that are part of the Routing functionality are accessed by important the **Link** component from the *react-router-dom*
5. **NOTE:** Link needs to be enclosed in BrowserRouter to avoid some errors
6. Fetching data from online **API**. This does not require a key. Name of the API is TheCocktailDB
**IMPORTANT:** The project uses template string to fetch/search for data from API
7. **useRef** for uncontrolled input
8. **UseParams** is used in conjunction with the React Router where it can access the parameter value from the url. The parameter value in the url is generally preceeded by colon

#### React Router Fix
(Fix)[https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc]

#### CRA Fix
```
"build": "CI= react-scripts build",
```

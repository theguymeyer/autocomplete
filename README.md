# Documentation Guy Meyer

## Backend

The backend server is running Node in Unix environment so useful functions like `grep` will be leveraged. This function will capture the essence of the word search function in few lines. Credits to [this Medium article](https://medium.com/stackfame/how-to-run-shell-script-file-or-command-using-nodejs-b9f2455cb6b7) for explaining this process.

# Frontend

In the frontend, a new component was created, AutoComp, which extends a React component. The purpose for this is to molarize the code so that modifications are clear and easy. In addition, a reference designator (created using `React.creatRef`) was used to locate the correct input element on the page. Credits to [this page in the React Docs](https://reactjs.org/docs/refs-and-the-dom.html) for explaining references in React.

To understand how to handle **AJAX requests** with React follow their docs [here](https://reactjs.org/docs/faq-ajax.html).

When developing the dropdown menu it was unclear how React would handle the iterative method of the `datalist` tag. This [stackoverflow post](https://stackoverflow.com/questions/45167565/does-react-js-support-html5-datalist) was useful to understand how it all comes together and whether datalist is supported in React.

# Errors and how to overcome them

## TypeError: Cannot read property 'inputRef' of undefined

```
handleChange
src/App.js:28
  25 | }
  26 | 
  27 | handleChange(event) {
> 28 |   console.log(this.inputRef.current.value);
     | ^  29 | }
  30 | 
  31 | render() {
```

The error here was due to the fact that I did nto bind the even handler `handleChange` to `this`. By adding `.bind(this)` to line 36 (onChange in input tag). The error went away. Credits to [this post](https://stackoverflow.com/questions/34298521/cannot-read-property-refs-of-null-react-error-react-js).


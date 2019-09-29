# React-redux simple integration, then and now.

## :computer: Motivation

I wanted to compare two approaches to use `react-redux`, first using the `"new"` [Hooks API](https://reactjs.org/docs/hooks-intro.html) and the `connect` [Higher Order Component(HOC)](https://reactjs.org/docs/higher-order-components.html)

## Structure

This repo will have `two` branches:

    1. master branch will contain `react-redux` with the new `useSelector` and `useDispatch` hooks.
    2. hoc branch will container `react-redux` with the `connect` HOC.

## Expected results

First of, `Redux` is a great tool that has been around the JS ecosystem for a while, it's battle tested and it help to solve some common problems but, always remember that `Redux` may not be the right tool for the job in some cases or you might not need `Redux` at all [Dan Abramov's article](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367).

Second, we should be able to learn the `patterns` not the libraries that implement those `patterns`, why?, you may as. The reason is simple, maybe it's not the same with `redux` but libraries tend to be replaced as new `patterns` or `ways of doing things` are discovered or re-discovered, so, in a nutshell, learn what are the `concepts` and then learn how `redux` applies those concepts.

Third and last, I'll be more specific and I'll put the `concepts` that are more important to me:

- State of the application
- Store
- Reducers
- Actions
- Action creators

## :bookmark: License

This project is [MIT](LICENSE) licensed.

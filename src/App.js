import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import store from "./store.js";
import PureReduxCounter from "./component/sample/pureRedux/PureReduxCounter";
import CounterComponent from "./component/sample/React-redux/CounterComponent";
import UserListComponent from "./component/sample/Async-Redux/UserListComponent.jsx";

// redux的作用: 全局容器: 提供属性 方法=>清晰, 避免多级传参
// redux的特性: 单数据源: 单页应用=> 应用的入口引入store
//                       多页应用=> html引入store
// store: state: 存数据
//        reducer: 方法, 改数据
//        提供机制: dispatch(action) => reducer => store.state => UI component subscribe => UI变化
// action: 对外的接口, 提供数据给store, 纯函数

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>PureReduxCounter</h3>
        <PureReduxCounter />
        <h3>ReactReduxCounter</h3>
        <CounterComponent />
        <h3>Async Redux</h3>
        <UserListComponent />
      </div>
    </Provider>
  );
}

export default App;

var React = require('react');
var ReactDOM = require('react-dom');
var {Route , Router , IndexRoute, hashHistory} = require('react-router');
var Main = require('../public/components/Main');
var Weather = require('../public/components/Weather');
var About = require('../public/components/About');
var Examples = require('../public/components/Examples');




ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='about' component={About}></Route>
            <Route path='examples' component={Examples}></Route>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);




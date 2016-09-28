var React = require('react');
var {Link,IndexLink} =require('react-router');
// var Nav= React.createClass({
//     render(){
//         return(
//             <div>
//                 <h1>Main Nav</h1>
//                 <IndexLink activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/'>Weather App</IndexLink> |
//                 <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link> |
//                 <Link to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>examples</Link>
//             </div>
//         );
//     }
// });

var Nav = (props)=>{
    return(
      <div>
          <h1>Main Nav</h1>
          <IndexLink activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/'>Weather App</IndexLink> |
          <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link> |
          <Link to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>examples</Link>
      </div>
    )
};

module.exports=Nav;

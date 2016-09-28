var React = require('react');
// var WeatherMessage = React.createClass({
//     render(){
//       var {location,temp} = this.props;
//         return(
//             <h3>the temp in {location} is {temp}</h3>
//         );
//     }
// });

var WeatherMessage = ({location,temp}) =>{
  // es6 no nede to define vars
  // var {location,temp} = props;
  return(
    <h3>the temp in {location} is {temp}</h3>
  )
};

module.exports =WeatherMessage;

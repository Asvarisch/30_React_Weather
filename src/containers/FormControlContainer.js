import {connect} from "react-redux";
import FormControl from "../components/FormControl";
import {getWeatherAction} from "../actions/WeatherActions";

function mapDispatchToProps(dispatch) {
    
    return {
        getWeather: city => dispatch(getWeatherAction(city))
    }
}

export default connect(null, mapDispatchToProps)(FormControl);
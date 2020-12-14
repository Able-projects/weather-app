import React,{useEffect} from 'react'
import connect from 'react-redux/es/connect/connect'
import {getWeather} from '../store/actions/weatherActions'
function Main(props){
    useEffect(()=>{
        props.getWeather(524901)
    },[])
    return(
        <div>
            <h1 className='h1'>WEATHER APP</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    weatherReducer:state.weatherReducer
});

export default connect(mapStateToProps, {getWeather})(Main);

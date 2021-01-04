import React,{useState} from 'react'
import connect from 'react-redux/es/connect/connect'
import {getWeather,getWeatherForecast} from '../store/actions/weatherActions'
function Main(props){
    
    const {cityInfo,forecastInfo} = props.weatherReducer
    const [request,setRequest] = useState('')
    let send = () => {
        props.getWeather(request);
        props.getWeatherForecast(request);
    }
    return(
        <div>
            <h1 className='h1'>Поиск</h1>
            <div className='row2'>
                <input type='text' value={request} onChange={(e)=>setRequest(e.target.value)} placeholder='название города' className='search-input'></input>
                <div className='search-btn' onClick={()=> send()}><img src='/search.png' alt='search'></img></div>
            </div>
            
            <h1 className='h1'>ПРОГНОЗ ПОГОДЫ - {cityInfo.name}</h1>
            <div className='row'>
            
                <div className='column item'>
                    <h1>ОТЧЕТ О МЕСТНОЙ ПОГОДЕ</h1>
                    <hr/>
                    <div className='row'>
                        <div className='column'>
                            
                            {cityInfo.weather && cityInfo.weather[0] && cityInfo.weather[0].main === 'Snow'?
                            <img src='/sun_clouds.svg' alt='clouds'/>:
                            cityInfo.weather && cityInfo.weather[0] && cityInfo.weather[0].main === 'Clouds' ?
                            <img src='/clouds.svg' alt='clouds'/>:
                            <img src='/sun.svg' alt='clouds'/>}
                            <p>{cityInfo && cityInfo.wind ? cityInfo.wind.speed: '12'} км/час</p>
                        </div>
                        <div className='column'>
                            <h1>CЕГОДНЯ</h1>
                            <h2>{cityInfo.weather && cityInfo.weather[0] ? cityInfo.weather[0].description : 'text'}</h2>
                            <h2>{cityInfo && cityInfo.main ? parseInt(cityInfo.main.temp) - 273 : 0} C</h2>
                            <h2>{cityInfo && cityInfo.main ? parseInt((cityInfo.main.temp - 273.15) * 9/5 + 32 ) : 0} F</h2>
                        </div>
                    </div>
                </div>
                <div className='column item'>
                    <h1>МОРСКОЙ ПРОГНОЗ</h1>
                    <hr/>
                    <p>СКОРОСТЬ ВЕТРА . . . . . . {cityInfo && cityInfo.wind ? cityInfo.wind.speed: '0'} км/час</p>
                    <p>НАПРАВЛЕНИЕ ВЕТРА . . . . . . {cityInfo && cityInfo.wind ? cityInfo.wind.deg: '12'} градуса</p>
                    <p>АТМОСФЕРНОЕ ДАВЛЕНИЕ . . . . . . {cityInfo && cityInfo.main ? cityInfo.main.pressure: '0'} </p>
                    <p>MAX - ТЕМПЕРАТУРА . . . . . . {cityInfo && cityInfo.main ? parseInt(cityInfo.main.temp_max) - 273 : 0} C</p>
                    <p>MIN - ТЕМПЕРАТУРА . . . . . . {cityInfo && cityInfo.main ? parseInt(cityInfo.main.temp_min) - 273 : 0} C</p>
                    <p>ВЛАЖНОСТЬ . . . . . . {cityInfo && cityInfo.main ? cityInfo.main.humidity: '0'}</p>
                </div>
            </div>
            <h1 className='h1'>ПРОГНОЗ ПОГОДЫ НА 4 ДНЯ - {cityInfo.name}</h1>
            <div className='row-forecast'>
                {forecastInfo?.list?.map(
                    item => (
                        item.dt_txt.split(' ')[1] == '09:00:00' ?
                        <div>
                            <p>{item.dt_txt.split(' ')[0]}</p>
                            {item.weather && item.weather[0] && item.weather[0].main === 'Snow'?
                            <img src='/sun_clouds.svg' alt='clouds'/>:
                            item.weather && item.weather[0] && item.weather[0].main === 'Clouds' ?
                            <img src='/clouds.svg' alt='clouds'/>:
                            <img src='/sun.svg' alt='clouds'/>}
                            <h1>{parseInt(item.main?.temp) - 273 } C</h1>
                            <h3>{item.weather[0]?.description}</h3>
                        </div>
                        :
                        ''
                    )
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    weatherReducer:state.weatherReducer
});

export default connect(mapStateToProps, {getWeather,getWeatherForecast})(Main);

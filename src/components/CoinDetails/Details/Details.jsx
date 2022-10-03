import addDots from '../../../utils/addDots.util'
import './Details.css'

const Details = ({details, detailsMD}) => {
console.log(details);
//    details?.marketCapUsd && console.log('MSRKET TSNK', addDots(details?.marketCapUsd))
  return (
    details &&
    <div> 
        <h1>{addDots(details.market_cap_rank)}</h1>
        <h1>{details.sentiment_votes_up_percentage}%</h1>
        <h1>{details.sentiment_votes_down_percentage}%</h1>
        <h1>{addDots(details.marketCapUsd)}$</h1>
        <h1>{addDots(details.volumeUsd)}$</h1>
        <h1 style={details.price_change_24h > 0 ?{color: "#8dc647" } 
        : details.price_change_24h === 0?{color: "gray"}
        :{color: "#e15241"}}>{addDots(details.price_change_24h.toFixed(2))}$</h1>
        <h1 style={details.price_change_percentage_24h > 0 ?{color: "#8dc647" } 
        : details.price_change_percentage_24h === 0?{color: "gray"}
        :{color: "#e15241"}}>{ details.price_change_percentage_24h &&  addDots(details.price_change_percentage_24h)}%</h1>
        <h1>{addDots(details.max_supply)}</h1>
        <h1>{addDots(details.circulating_supply)}</h1>
        <h1>{addDots(details.currentPriceUsd)}</h1>
        <img src={details.thumb} alt=""/>
         <h1>{detailsMD.name}</h1>
        <h1 className="text-uppercase">{detailsMD.symbol}</h1>
        <h1>{detailsMD.coment}</h1>
        <h1 className="description" dangerouslySetInnerHTML={{__html: details.en}}></h1>
        
    </div>
  )
}

export default Details

        
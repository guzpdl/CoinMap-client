import InitAxios from "./initAxios";

class DetailsAxios extends InitAxios {
    constructor(){
        super('/details')
    }

    async coinData(id){
        return this.axios.get(`/coins/${id}`)
    }

    async coinDataMD(id){
        return this.axios.get(`/${id}`)
    }

    async historicalChart(id){
        return this.axios.get(`/chat/${id}`)
    }
}

export default DetailsAxios


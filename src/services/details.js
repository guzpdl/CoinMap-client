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
}

export default DetailsAxios


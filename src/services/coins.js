import InitAxios from "./initAxios";

class CoinsAxios extends InitAxios {
    constructor(){
        super('/coins')
    }

    getCoinList(body){
        return this.axios.get(`/home`, body).then((response) => response.data)
    }
}

export default CoinsAxios


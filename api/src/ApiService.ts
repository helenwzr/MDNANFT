import axios from 'axios';

export class ApiService{

    jsonRPCVersion:String;
    avalancheNodeUrl:String;
    id:number;
    port:string;

    constructor(avalancheNodeUrl:string,
                jsonRPCVersion:string) {
        this.jsonRPCVersion = jsonRPCVersion;
        this.avalancheNodeUrl = avalancheNodeUrl;
        this.id = 1;
        this.port = "9650"
    }

    getData(endPoint:string,method:string,params:any){

        let url = 'http://' +
            this.avalancheNodeUrl + ':' +
            this.port + endPoint;

        return axios.post(url,
            {
                "jsonrpc": this.jsonRPCVersion,
                "method": method,
                "params": params,
                "id": this.id});
    }

}

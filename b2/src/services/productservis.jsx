import axios from "axios"
export default class Productservis{
    getproducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }
}
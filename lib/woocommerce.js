import axios from 'axios'
import OAuth  from 'oauth-1.0a'
import CryptoJS from 'crypto-js'

const ck = process.env.WOOCOMMERCE_CK
const cs = process.env.WOOCOMMERCE_CS
const baseUrl = process.env.WOOCOMMERCE_URL

const oauth = OAuth({
    consumer: {
        key: ck,
        secret: cs
    },
    signature_method: 'HMAC-SHA1',
    hash_function: function(base_string, key) {
        return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
    }
});

export default class Api {
    get(endpoint) {
        return axios.get(baseUrl + endpoint, { params: oauth.authorize({ url: baseUrl + endpoint,  method: 'GET' }) })
    }
}
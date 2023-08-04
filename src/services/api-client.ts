import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9a8623000a804f6997a859e73e606c2d'
    },
});
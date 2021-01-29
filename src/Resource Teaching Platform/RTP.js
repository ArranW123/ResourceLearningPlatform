import { extendObservable} from 'mobx';

class RTP {
    constructor(){
        extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            username: ''

        })
    }
}

export default new RTP();
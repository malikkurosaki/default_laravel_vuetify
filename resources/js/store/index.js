export default {
    state: {
        nama: 'yaumiddin'
    },
    actions: {
        lihatGoogle(){
            axios.get('http://google.com').then((result) => {
                console.log(result.data)
            }).catch((err) => {
                console.log('error')
            });
        }
    }
}

const index = async () => {
 
    const uri = 'https://api.sauveur.xyz'
    const posts = await fetch(`${uri}/db/get?col=port&index=byReferrer`,{
        method: 'POST',
        headers: {
            "accept": "application/json",
            "authorization": Deno.env.get('BACKPACK_KEY'),
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            referrer: "https://ubuntu.report/"
        })
    })


    const res = await posts.json()

    if(res.status === 200){
        return {status:200, msg: 'OK', body: res.body}
    }
    
    return {status:200, msg: 'BAD'}
}

export default {"/posts":index }
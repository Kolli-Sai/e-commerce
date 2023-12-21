
export const getNextAuthSecrets = ()=>{
    let githubClientId = process.env.GITHUB_CLIENT_ID
    let githubClientSecret = process.env.GITHUB_CLIENT_SECRET
    let secret = process.env.SECRET

    if(!githubClientId){
        throw new Error('Missing GITHUB_CLIENT_ID env var')
    }

    if(!githubClientSecret){
        throw new Error('Missing GITHUB_CLIENT_SECRET env var')
    }

    if(!secret){
        throw new Error('Missing SECRET env var')
    }

    return {
        githubClientId,
        githubClientSecret,
        secret
    }
}
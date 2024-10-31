export default async function getUserprofile(token:string) {
    const response = await fetch("https://a09-swdevprac2-pn-backend-1.vercel.app:443/api/v1/auth/me", {
        method: "GET",
        headers: {
            authorization:`Bearer ${token}`,
        }
    })
    if (!response.ok){
        throw new Error("Cannot get user profile") 
    }
    return await response.json()
}
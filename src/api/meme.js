export const fetchMemes = async () => {
    try 
    {
        const response = await fetch('https://api.imgflip.com/get_memes');
        return await response.json();
    } 
    catch(error) 
    {
        return error.message;
    }
}
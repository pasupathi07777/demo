
let updateserver=async (url="",met=null,errmess=null)=>{
    try{
        
        let link= await fetch(url,met)
        if(!link.ok) throw Error("please relode")
    }catch(err){
        errmess= err.Message
    }finally{
        return errmess
    }

    




}
// Updateserver()
export default updateserver 
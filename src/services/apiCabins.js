import supabase from "./supabase"
async function getCabins(){
    let { data, error } = await supabase.from('cabins').select('id')
    if(error) console.error('Cabins could not be loaded')
    return data
}

export default getCabins
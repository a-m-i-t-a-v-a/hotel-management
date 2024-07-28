import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(){
    let { data: cabins, error } = await supabase.from('cabins').select('*')

    if(error){
        console.error(error)
        throw new Error('Cabins could not be loaded')
    }
    return cabins
}

export async function createCabin(newCabin) {
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');
    const imagePath = `${supabase.storageUrl}/object/public/cabin-images/${imageName}`;
  
    try {
      // 1. Create cabin
      const { data, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabin, image: imagePath }])
        .select();
  
      if (error) {
        console.error('Error creating cabin:', error);
        throw new Error('Cabins could not be created');
      }
  
      // 2. Upload image
      const { error: storageError } = await supabase
        .storage
        .from('cabin-images') // Ensure the bucket name is correct
        .upload(imageName, newCabin.image);
  
      if (storageError) {
        console.error('Error uploading image:', storageError);
        // 3. Delete the cabin if there was an error
        const { error: deleteError } = await supabase
          .from('cabins')
          .delete()
          .eq('id', data[0].id);
        
        if (deleteError) {
          console.error('Error deleting cabin after failed image upload:', deleteError);
        }
  
        throw new Error('Cabin image could not be uploaded and the cabin was not created');
      }
  
      return data;
    } catch (err) {
      console.error('Error in createCabin:', err);
      throw err;
    }
}

export async function deleteCabin(id){
    const { error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)
    
    if(error){
        console.error(error)
        throw new Error('Cabins could not be deleted')
    }
}
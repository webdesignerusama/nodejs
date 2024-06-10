const express= require('express')
const router= express.Router()
const MenuItem= require('./../models/MenuItem')

router.get('/', async (req,res)=>{
    try{
        const data = await MenuItem.find()
        console.log('data fetched')
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})
    }
})

router.post('/', async(req,res)=>{
    try{
   const data = req.body
   const newMenu= new MenuItem(data)
   const response = await newMenu.save()
   console.log('data saved')
   res.status(200).json(response)
    } catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})
    }
})
router.get('/:tasteType', async (req,res)=>{
try{
   const tasteType= req.params.tasteType 
   const response= await MenuItem.find({taste: tasteType})
   console.log(response)
   res.status(200).json(response)
}catch(err){
console.log(err)
res.status(500).json({error:'internal server error'})
}
})
router.put('/:id', async(req,res)=>{
    try{
       const itemToUpdate= req.params.id
       const updatedMenu= req.body
       const response= await MenuItem.findByIdAndUpdate(itemToUpdate, updatedMenu,{
        new:true,
        runValidators:true
       } )
       if(!response){
         res.status(404).json({error:'item not found'})
       }
       console.log(response)
       res.status(200).json(response)
    } catch(err){
        conosle.log(err)
        res.status(500).json({error:'internal server error'})
    }
})
router.delete('/:id', async(req,res)=>{
    try{
       const itemToDelete= req.params.id
       const response= await MenuItem.findByIdAndUpdate(itemToDelete)
       if(!response){
         res.status(404).json({error:'item not found'})
       }
       console.log(response)
       res.status(200).json({message:'item deleted sucessfully'})
    } catch(err){
        conosle.log(err)
        res.status(500).json({error:'internal server error'})
    }
})
module.exports=router
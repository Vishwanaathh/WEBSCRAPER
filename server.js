const express=require('express');
const axios=require('axios');
const cors=require('cors');
const cheerio=require('cheerio');
const app=express();
app.use(cors());
app.use(express.json());


app.post('/go',async(req,res)=>{
   let url=req.body.url;
   const {data}=await axios.get(url);
   const $=cheerio.load(data);
   const items=[];
   $('div').each((i,element)=>{
    const title=$(element).text();
    items.push(title);
   })
   res.json(items);
})
app.listen(3001,()=>{
    console.log("LISTENING");
})
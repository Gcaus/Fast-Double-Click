import { Router } from 'express'
import fs from 'fs'

const router = Router();

const FILE = 'records.json'

let records = []

if (fs.existsSync(FILE)) { 
   const fileContents = fs.readFileSync(FILE, 'utf8'); 
   records = JSON.parse(fileContents); 
 } 
  
 router.post('/', (req, res) => { 
   const time = req.body.time; 
  
   const record = { 
     time: time, 
     date: new Date() 
   }; 
  
   records.push(record); 
  
   fs.writeFile(FILE, JSON.stringify(records), () => { 
     try { 
       res.status(201).send('Record successfully saved'); 
     } catch (err) { 
       console.error(err); 
       res.status(500).send('Error saving record'); 
     } 
   }); 
 });
 
 export default home
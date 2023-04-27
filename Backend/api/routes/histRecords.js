import { Router } from 'express'
import fs from 'fs'

const router = Router();

const FILE = 'records.json'


router.get('/', (_req, res) => { 
   fs.readFile(FILE, 'utf8', (err, data) => { 
     try { 
       const records = JSON.parse(data); 
       res.status(200).send(records); 
     } catch (err) { 
       console.error(err); 
       res.status(500).send('Error reading log file'); 
     } 
   }); 
 });
 
 
 router.delete('/', (_req, res) => { 
   fs.readFile(FILE, () => { 
     const newRecord = []; 
  
     fs.writeFile(FILE, JSON.stringify(newRecord), err => { 
       try { 
         res.status(204).send('Records deleted successfully'); 
       } catch (err) { 
         console.error(err); 
         res.status(500).send('Error delete file'); 
       } 
     }); 
   }); 
 });
 
 
 export default histRecords
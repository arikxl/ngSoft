const express = require('express');
const multer = require('multer');
const fs = require('fs');
const PDFParser = require('pdf-parse');
const fileUpload = require('express-fileUpload')


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const PORT = process.env.PORT || 5000;

app.use(fileUpload())

// app.use((err, req, res, next) => {
//     res.status(500).send({message: err.message});
// })

const upload = multer({ dest: 'uploads/' });

// app.post('/upload', upload.single('pdf'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     const pdfPath = req.file.path;
//     const dataBuffer = fs.readFileSync(pdfPath);

//     const pdfData = await PDFParser(dataBuffer);

//     const text = pdfData.text;

//     // Extract name
//     const nameMatch = text.match(/Name:\s*(.+)/i);
//     const name = nameMatch ? nameMatch[1].trim() : null;

//     // Extract email
//     const emailMatch = text.match(/Email:\s*([^\s]+)/i);
//     const email = emailMatch ? emailMatch[1].trim() : null;

//     res.json({ name, email });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

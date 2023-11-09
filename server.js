const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')
const csv = require('csv-parser')

const app = express()

app.use(cors("*"))
app.use(express.json())
app.use(morgan("combined"))

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Welcome to REST API region Indonesia"
    })
})

app.get('/api/provinces', async (req, res) => {
    fs.readFile('./data/provinces.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            // Parse the JSON data from the file
            const parsedData = JSON.parse(data);
            res.json(parsedData); // Send the JSON data as a response
        }
    });
})


app.get('/api/regencies/:provinceId', async (req, res) => {
    fs.readFile('./data/provinces.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            const provinceId = req.params.provinceId
            // Parse the JSON data from the file
            const parsedData = JSON.parse(data);
            res.json(parsedData.filter((regency) => regency.province_id === provinceId)); // Send the JSON data as a response
        }
    })
})

app.get('/api/districts/:regencyId', async (req, res) => {
    try {
        let districts = []
        fs.createReadStream('./data/districts.csv')
            .pipe(csv())
            .on('data', (row) => {
                districts.push(row)
            })
            .on('end', async () => {
                const regencyId = req.params.regencyId
                const data = districts.filter((district) => district.regency_id === regencyId)
                return res.json(data)
            })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.get('/api/villages/:districtId', async (req, res) => {
    try {
        let villages = []
        fs.createReadStream('./data/villages.csv')
            .pipe(csv())
            .on('data', (row) => {
                villages.push(row)
            })
            .on('end', async () => {
                const jsonContent = JSON.stringify(villages, null, 2); // Convert the JavaScript object to a formatted JSON string

                fs.writeFile('villages.json', jsonContent, 'utf8', (err) => {
                    if (err) {
                        console.error('Error writing to file:', err);
                    } else {
                        console.log('File has been written successfully');
                    }
                });
                const districtId = req.params.districtId
                const data = villages.filter((village) => village.district_id === districtId)
                return res.json(data)
            })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

const port = 3000

app.listen(port, () => {
    console.log(`Server running and up at ${port}`)
})

module.exports = app
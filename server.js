const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')
const csv = require('csv-parser')
const path = require('path')

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
    try {
        let provinces = []
        const filename = 'provinces.csv';
        const filePath = path.join(__dirname, 'data', filename);
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                provinces.push(row)
            })
            .on('end', () => {
                return res.json(provinces)
            })
    } catch (e) {
        console.log(e)
    }
})


app.get('/api/regencies/:provinceId', async (req, res) => {
    try {
        let regencies = []
        const filename = 'regencies.csv';
        const filePath = path.join(__dirname, 'data', filename);
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                regencies.push(row)
            })
            .on('end', async () => {
                const provinceId = req.params.provinceId
                const data = regencies.filter((regency) => regency.province_id === provinceId)
                return res.json(data)
            })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.get('/api/districts/:regencyId', async (req, res) => {
    try {
        let districts = []
        const filename = 'districts.csv';
        const filePath = path.join(__dirname, 'data', filename);
        fs.createReadStream(filePath)
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
        const filename = 'villages.csv';
        const filePath = path.join(__dirname, 'data', filename);
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                villages.push(row)
            })
            .on('end', async () => {
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

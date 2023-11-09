API Region Indonesia adalah proyek open-source yang menyediakan data geografis dan informasi region berdasarkan wilayah Indonesia. Proyek ini membantu pengembang dan peneliti untuk mengakses data terstruktur tentang provinsi, kabupaten/kota, Kecamatan, dan desa.

### GET Provinces

https://api-region-indonesia.vercel.app/api/provinces

Example

```
curl --location --request GET 'https://api-region-indonesia.vercel.app/api/provinces'
```

200 OK

Example Response

```
[
  {
    "id": "11",
    "name": "ACEH"
  },
  {
    "id": "12",
    "name": "SUMATERA UTARA"
  },
  {
    "id": "13",
    "name": "SUMATERA BARAT"
  },
  {
    "id": "14",
    "name": "RIAU"
  },
  ...more
 ]
```

### GET Regencies

https://api-region-indonesia.vercel.app/api/regencies/:provinceId

Example

```
curl --location --request GET 'https://api-region-indonesia.vercel.app/api/regencies/13'
```

200 OK

Example Response

```
[
  {
    "id": "1301",
    "province_id": "13",
    "name": "KABUPATEN KEPULAUAN MENTAWAI"
  },
  {
    "id": "1302",
    "province_id": "13",
    "name": "KABUPATEN PESISIR SELATAN"
  },
  {
    "id": "1303",
    "province_id": "13",
    "name": "KABUPATEN SOLOK"
  },
  {
    "id": "1304",
    "province_id": "13",
    "name": "KABUPATEN SIJUNJUNG"
  },
  {
    "id": "1305",
    "province_id": "13",
    "name": "KABUPATEN TANAH DATAR"
  },
  ...more
]
```

### GETDistricts

https://api-region-indonesia.vercel.app/api/districts/:regencieId

Example

```
curl --location --request GET 'https://api-region-indonesia.vercel.app/api/districts/1307'
```

200 OK

Example Response

```
[
  {
    "id": "1307010",
    "regency_id": "1307",
    "name": "TANJUNG MUTIARA"
  },
  {
    "id": "1307020",
    "regency_id": "1307",
    "name": "LUBUK BASUNG"
  },
  {
    "id": "1307021",
    "regency_id": "1307",
    "name": "AMPEK NAGARI"
  },
  ...more
]
```

### GET Villages

https://api-region-indonesia.vercel.app/api/villages/:districtId

Example

```
curl --location --request GET 'https://api-region-indonesia.vercel.app/api/villages/1307080'
```

200 OK

Example Response

```
[
  {
    "id": "1307080001",
    "district_id": "1307080",
    "name": "KOTO TINGGI"
  },
  {
    "id": "1307080002",
    "district_id": "1307080",
    "name": "PADANG TAROK"
  },
  {
    "id": "1307080003",
    "district_id": "1307080",
    "name": "SIMARASOK"
  },
  {
    "id": "1307080004",
    "district_id": "1307080",
    "name": "TABEK PANJANG"
  },
  {
    "id": "1307080005",
    "district_id": "1307080",
    "name": "SALO"
  },
  {
    "id": "1307080006",
    "district_id": "1307080",
    "name": "KOTO BARU"
  }
]
```

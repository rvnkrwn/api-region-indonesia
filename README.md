API Region Indonesia adalah proyek open-source yang menyediakan data geografis dan informasi region berdasarkan wilayah Indonesia. Proyek ini membantu pengembang dan peneliti untuk mengakses data terstruktur tentang provinsi, kabupaten/kota, Kecamatan, dan desa.

### GETProvinces

https://api-region-indonesia.vercel.app/api/provinces

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
  {
    "id": "15",
    "name": "JAMBI"
  },
  {
    "id": "16",
    "name": "SUMATERA SELATAN"
  },
  {
    "id": "17",
    "name": "BENGKULU"
  },
  {
    "id": "18",
    "name": "LAMPUNG"
  },
  {
    "id": "19",
    "name": "KEPULAUAN BANGKA BELITUNG"
  },
  {
    "id": "21",
    "name": "KEPULAUAN RIAU"
  },
  {
    "id": "31",
    "name": "DKI JAKARTA"
  },
  {
    "id": "32",
    "name": "JAWA BARAT"
  },
  {
    "id": "33",
    "name": "JAWA TENGAH"
  },
  {
    "id": "34",
    "name": "DI YOGYAKARTA"
  },
  {
    "id": "35",
    "name": "JAWA TIMUR"
  },
  {
    "id": "36",
    "name": "BANTEN"
  },
  {
    "id": "51",
    "name": "BALI"
  },
  {
    "id": "52",
    "name": "NUSA TENGGARA BARAT"
  },
  {
    "id": "53",
    "name": "NUSA TENGGARA TIMUR"
  },
  {
    "id": "61",
    "name": "KALIMANTAN BARAT"
  },
  {
    "id": "62",
    "name": "KALIMANTAN TENGAH"
  },
  {
    "id": "63",
    "name": "KALIMANTAN SELATAN"
  },
  {
    "id": "64",
    "name": "KALIMANTAN TIMUR"
  },
  {
    "id": "65",
    "name": "KALIMANTAN UTARA"
  },
  {
    "id": "71",
    "name": "SULAWESI UTARA"
  },
  {
    "id": "72",
    "name": "SULAWESI TENGAH"
  },
  {
    "id": "73",
    "name": "SULAWESI SELATAN"
  },
  {
    "id": "74",
    "name": "SULAWESI TENGGARA"
  },
  {
    "id": "75",
    "name": "GORONTALO"
  },
  {
    "id": "76",
    "name": "SULAWESI BARAT"
  },
  {
    "id": "81",
    "name": "MALUKU"
  },
  {
    "id": "82",
    "name": "MALUKU UTARA"
  },
  {
    "id": "91",
    "name": "PAPUA BARAT"
  },
  {
    "id": "94",
    "name": "PAPUA"
  }
]
```

Access-Control-Allow-Origin

Cache-Control

public, max-age=0, must-revalidate

Content-Type

application/json; charset=utf-8

Date

Thu, 09 Nov 2023 03:35:24 GMT

Etag

W/"48d-6C8UALSkkWLGXzsccb2xXtFVQ8g"

Strict-Transport-Security

max-age=63072000; includeSubDomains; preload

X-Vercel-Id

sin1::iad1::f9grz-1699500923976-f76f7ffc152e

### GETRegencies

https://api-region-indonesia.vercel.app/api/regencies/13

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
  {
    "id": "1306",
    "province_id": "13",
    "name": "KABUPATEN PADANG PARIAMAN"
  },
  {
    "id": "1307",
    "province_id": "13",
    "name": "KABUPATEN AGAM"
  },
  {
    "id": "1308",
    "province_id": "13",
    "name": "KABUPATEN LIMA PULUH KOTA"
  },
  {
    "id": "1309",
    "province_id": "13",
    "name": "KABUPATEN PASAMAN"
  },
  {
    "id": "1310",
    "province_id": "13",
    "name": "KABUPATEN SOLOK SELATAN"
  },
  {
    "id": "1311",
    "province_id": "13",
    "name": "KABUPATEN DHARMASRAYA"
  },
  {
    "id": "1312",
    "province_id": "13",
    "name": "KABUPATEN PASAMAN BARAT"
  },
  {
    "id": "1371",
    "province_id": "13",
    "name": "KOTA PADANG"
  },
  {
    "id": "1372",
    "province_id": "13",
    "name": "KOTA SOLOK"
  },
  {
    "id": "1373",
    "province_id": "13",
    "name": "KOTA SAWAH LUNTO"
  },
  {
    "id": "1374",
    "province_id": "13",
    "name": "KOTA PADANG PANJANG"
  },
  {
    "id": "1375",
    "province_id": "13",
    "name": "KOTA BUKITTINGGI"
  },
  {
    "id": "1376",
    "province_id": "13",
    "name": "KOTA PAYAKUMBUH"
  },
  {
    "id": "1377",
    "province_id": "13",
    "name": "KOTA PARIAMAN"
  }
]
```

Access-Control-Allow-Origin

Cache-Control

public, max-age=0, must-revalidate

Content-Type

application/json; charset=utf-8

Date

Thu, 09 Nov 2023 03:35:43 GMT

Etag

W/"496-LTz+YhXCKNP43ootAgQYiEhcgY4"

Strict-Transport-Security

max-age=63072000; includeSubDomains; preload

X-Vercel-Id

sin1::iad1::7x8fr-1699500942980-443ded9cd142

### GETDistricts

https://api-region-indonesia.vercel.app/api/districts/1307

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
  {
    "id": "1307030",
    "regency_id": "1307",
    "name": "TANJUNG RAYA"
  },
  {
    "id": "1307040",
    "regency_id": "1307",
    "name": "MATUR"
  },
  {
    "id": "1307050",
    "regency_id": "1307",
    "name": "IV KOTO"
  },
  {
    "id": "1307051",
    "regency_id": "1307",
    "name": "MALALAK"
  },
  {
    "id": "1307061",
    "regency_id": "1307",
    "name": "BANUHAMPU"
  },
  {
    "id": "1307062",
    "regency_id": "1307",
    "name": "SUNGAI PUA"
  },
  {
    "id": "1307070",
    "regency_id": "1307",
    "name": "AMPEK ANGKEK"
  },
  {
    "id": "1307071",
    "regency_id": "1307",
    "name": "CANDUANG"
  },
  {
    "id": "1307080",
    "regency_id": "1307",
    "name": "BASO"
  },
  {
    "id": "1307090",
    "regency_id": "1307",
    "name": "TILATANG KAMANG"
  },
  {
    "id": "1307091",
    "regency_id": "1307",
    "name": "KAMANG MAGEK"
  },
  {
    "id": "1307100",
    "regency_id": "1307",
    "name": "PALEMBAYAN"
  },
  {
    "id": "1307110",
    "regency_id": "1307",
    "name": "PALUPUH"
  }
]
```

Access-Control-Allow-Origin

Cache-Control

public, max-age=0, must-revalidate

Content-Type

application/json; charset=utf-8

Date

Thu, 09 Nov 2023 03:35:55 GMT

Etag

W/"38e-aKijSfwyJsycXKnX+kSNtssH8k8"

Strict-Transport-Security

max-age=63072000; includeSubDomains; preload

X-Vercel-Id

sin1::iad1::zcmh4-1699500954933-c777de518116

### GETVillages

https://api-region-indonesia.vercel.app/api/villages/1307080

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

Access-Control-Allow-Origin

Cache-Control

public, max-age=0, must-revalidate

Content-Type

application/json; charset=utf-8

Date

Thu, 09 Nov 2023 03:36:03 GMT

Etag

W/"17f-OgXtxnuq0vVgv8XNA0tP16kBJMs"

Strict-Transport-Security

max-age=63072000; includeSubDomains; preload

X-Vercel-Id

sin1::iad1::m7vvq-1699500962646-610e1ddca47a

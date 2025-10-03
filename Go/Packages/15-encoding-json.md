JSON kodlama (marshal) ve çözme (unmarshal) işlemleri için. REST API ve veri serileştirme/de-serialize için standarttır.


| Fonksiyon / Tip               | Açıklama                                                      | Kısa Kod Örneği                              |
| ----------------------------- | ------------------------------------------------------------- | -------------------------------------------- |
| `json.Marshal(v)`             | Go değişkenini (struct/map vs.) JSON’a çevirir.               | `b, _ := json.Marshal(data)`                 |
| `json.MarshalIndent(v, p, i)` | JSON’ı okunabilir, girintili yapar.                           | `b, _ := json.MarshalIndent(data, "", "  ")` |
| `json.Unmarshal(data, &v)`    | JSON’ı Go tipine çözer (struct, map, vs.).                    | `json.Unmarshal(b, &data)`                   |
| `json.NewEncoder(w)`          | JSON’ı doğrudan bir io.Writer’a yazar.                        | `json.NewEncoder(w).Encode(obj)`             |
| `json.NewDecoder(r)`          | JSON’ı doğrudan bir io.Reader’dan okur.                       | `json.NewDecoder(r).Decode(&obj)`            |
| `json.RawMessage`             | JSON’ın bir kısmını ham string olarak saklar.                 |                                              |
| `json.Valid(data)`            | Byte dizisinin geçerli bir JSON olup olmadığını kontrol eder. | `json.Valid(b)`                              |


```go
type Kisi struct {
    Ad    string `json:"ad"`
    Yas   int    `json:"yas"`
}

var k Kisi
b := []byte(`{"ad": "Ali", "yas": 22}`)
json.Unmarshal(b, &k) // JSON -> Go struct
b2, _ := json.Marshal(k) // Go struct -> JSON

```

Notlar:

JSON anahtarı olarak struct alanına json:"alan" etiketi verilir.

API response/request, config dosyası okuma, veri transferi için temel araçtır.
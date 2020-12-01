# JSON İŞLEMLERİ

> import json

### JSON STRİNG İÇERİĞİ > DICT SÖZLÜK TİPİNE ÇEVİRMEK
> sozluk = json.loads(string_json)

### JSON SÖZLÜK DICT İÇERİĞİ > JSON STRİNG TİPİNE ÇEVİRMEK
> json_str = json.dumps(sozluk)

"," ler "." ile ":" işaretleri "=" iledeğişir.
indexnt ile tab lar 4 boşluk olur.
> json.dumps(x, indent=4, separators=(". ", " = "))

**ensure_ascii=False** Ascii uymayan karakterler düzgün görünür.

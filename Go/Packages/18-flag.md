Konsoldan (terminalden) çalıştırılan Go uygulamalarında argüman ve bayrak (flag) okuma işlerini kolaylaştırır. Basit CLI programlar yazmak için süperdir.

| Fonksiyon                      | Açıklama                                    | Kısa Kod Örneği                               |
| ------------------------------ | ------------------------------------------- | --------------------------------------------- |
| `flag.String(name, def, desc)` | String tipinde flag oluşturur               | `isim := flag.String("isim", "ali", "ad")`    |
| `flag.Int(name, def, desc)`    | Int tipinde flag                            | `yas := flag.Int("yas", 18, "yaş")`           |
| `flag.Bool(name, def, desc)`   | Bool tipinde flag                           | `aktif := flag.Bool("aktif", false, "durum")` |
| `flag.Parse()`                 | Komut satırından girilen argümanları okur   | `flag.Parse()`                                |
| `flag.Args()`                  | Pozisyonel argümanları verir (flag olmayan) | `flag.Args()`                                 |
| `flag.NArg()`                  | Pozisyonel argüman sayısı                   |                                               |
| `flag.Lookup(name)`            | Flag bilgisini verir                        |                                               |
| `flag.Visit(func)`             | Sadece set edilen flag’leri işler           |                                               |


```go
var verbose = flag.Bool("v", false, "daha fazla çıktı")
var port = flag.Int("p", 8080, "port numarası")
flag.Parse()
fmt.Println("Verbose:", *verbose, "Port:", *port)

```

Terminalden:
> go run main.go -v -p=9000




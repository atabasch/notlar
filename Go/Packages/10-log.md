Konsola/standart hata çıktısına log yazmak, hata ayıklamak için.

| Fonksiyon / Tip | Açıklama                                            | Kullanım Örneği                |
| --------------- | --------------------------------------------------- | ------------------------------ |
| `log.Print()`   | Log mesajı yazar (satır sonu yok)                   | `log.Print("merhaba")`         |
| `log.Println()` | Log mesajı yazar (satır sonu ekler)                 | `log.Println("merhaba dünya")` |
| `log.Printf()`  | Formatlı log mesajı yazar                           | `log.Printf("Ad: %s", ad)`     |
| `log.Fatal()`   | Log yazar, ardından programı os.Exit(1) ile bitirir | `log.Fatal("Ölümcül hata!")`   |
| `log.Fatalln()` | Aynı, sonuna satır sonu ekler                       | `log.Fatalln("Kritik hata!")`  |
| `log.Fatalf()`  | Formatlı, sonra çıkış                               | `log.Fatalf("Kod: %d", kod)`   |
| `log.Panic()`   | Log yazar, ardından panic() çağırır                 | `log.Panic("Panik hata!")`     |
| `log.Panicln()` | Aynı, satır sonu ile                                | `log.Panicln("Şok hata!")`     |
| `log.Panicf()`  | Formatlı,                                           |                                |

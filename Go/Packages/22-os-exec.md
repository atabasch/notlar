# os/exec


Go uygulamasından dış program/komut çalıştırmak için kullanılır. Shell script, dosya açma, harici araç çağırma gibi işlerde kullanılır.

| Fonksiyon / Tip                 | Açıklama                                 | Kullanım / Kod Örneği             |
| ------------------------------- | ---------------------------------------- | --------------------------------- |
| `exec.Command(name, arg...)`    | Yeni bir komut objesi oluşturur          | `cmd := exec.Command("ls", "-l")` |
| `cmd.Run()`                     | Komutu başlatır ve tamamlanınca bekler   | `err := cmd.Run()`                |
| `cmd.Output()`                  | Komutun çıktısını []byte olarak döner    | `out, _ := cmd.Output()`          |
| `cmd.CombinedOutput()`          | Çıktı + hata çıktısı birlikte döner      |                                   |
| `cmd.Start()`                   | Komutu başlatır (arkaplanda), beklemez   |                                   |
| `cmd.Wait()`                    | Başlatılan komutun bitmesini bekler      |                                   |
| `cmd.Stdin`, `Stdout`, `Stderr` | Komutun giriş/çıkışını yönlendirmek için |                                   |
| `exec.LookPath(file)`           | Program sistemde nerede diye arar        |                                   |


# Örnek – Komut Çalıştırma:
```go
cmd := exec.Command("echo", "Merhaba dünya")
out, err := cmd.Output()
fmt.Println(string(out)) // "Merhaba dünya"
```


# Dosya içeriğini cat ile almak (Unix):
```go
cmd := exec.Command("cat", "dosya.txt")
data, _ := cmd.Output()
fmt.Println(string(data))
```
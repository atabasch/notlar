Dosya yolları ve dizin işlemleri (platformdan bağımsız şekilde). Özellikle Windows/Linux farkını dert etmeden yol işlemleri yapmanı sağlar.

| Fonksiyon                       | Açıklama                                                     | Kısa Kod Örneği                             |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| `filepath.Join(elem...)`        | Parçaları doğru şekilde birleştirir (platforma uygun olarak) | `filepath.Join("a", "b", "c.txt")`          |
| `filepath.Split(path)`          | Son dosyayı yolundan ayırır                                  | `dir, file := filepath.Split("/a/b/c.txt")` |
| `filepath.Base(path)`           | Yolun son parçasını döner                                    | `filepath.Base("/a/b/c.txt") // c.txt`      |
| `filepath.Dir(path)`            | Yolun dizin kısmını döner                                    | `filepath.Dir("/a/b/c.txt") // /a/b`        |
| `filepath.Ext(path)`            | Dosya uzantısını verir                                       | `filepath.Ext("a.jpg") // .jpg`             |
| `filepath.Abs(path)`            | Göreli yolu tam (absolut) yol yapar                          | `filepath.Abs("file.txt")`                  |
| `filepath.Clean(path)`          | Yolu normalize eder (../, ./ vs. çözer)                      | `filepath.Clean("a/../b/./c.txt")`          |
| `filepath.Glob(pattern)`        | Dizin içinde pattern ile eşleşen dosyaları listeler          | `files, _ := filepath.Glob("*.txt")`        |
| `filepath.Match(pattern, name)` | Pattern ile eşleşme kontrolü (sadece ad için)                | `filepath.Match("*.go", "main.go")`         |
| `filepath.Rel(base, targ)`      | Base yol ile target arasındaki rölatif yolu bulur            |                                             |
| `filepath.Walk(root, func)`     | Dizin altındaki tüm dosya/dizinleri dolaşır                  |                                             |
| `filepath.IsAbs(path)`          | Yolu absolut mu diye kontrol eder                            | `filepath.IsAbs("/tmp/a.txt")`              |
| `filepath.Separator`            | Platforma özel yol ayıracı karakter (`/` veya `\`)           |                                             |


```go
files, _ := filepath.Glob("/tmp/*.log")
for _, file := range files {
    fmt.Println(file)
}

```

Notlar:

Dosya/dizin işlemlerinde platform farkını önemsemene gerek kalmaz.

Proje içindeki asset, upload, log gibi dosya yönetimlerinde kritik.
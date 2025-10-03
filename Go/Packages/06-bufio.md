# import "bufio"

Buffer’lı (tamponlu) hızlı okuma ve yazma işlemleri.

| Fonksiyon / Tip    | Açıklama                                       | Kullanım Örneği              |
| ------------------ | ---------------------------------------------- | ---------------------------- |
| `bufio.Reader`     | Buffer’lı okuma                                | `r := bufio.NewReader(f)`    |
| `NewReader()`      | Reader oluşturur                               | `r := bufio.NewReader(f)`    |
| `Read()`           | Buffer’dan okur                                | `r.Read(buf)`                |
| `ReadString('\n')` | Belirli karaktere kadar okur, string döner     | `s, _ := r.ReadString('\n')` |
| `ReadBytes('\n')`  | Belirli karaktere kadar okur, byte slice döner | `b, _ := r.ReadBytes('\n')`  |
| `ReadLine()`       | Satır sonuna kadar okur, []byte döner          |                              |
| `Peek(n)`          | Okumadan n byte gösterir                       | `b, _ := r.Peek(3)`          |
| `Buffered()`       | Buffer’daki mevcut bayt sayısı                 | `n := r.Buffered()`          |
| `Discard(n)`       | n byte atlar                                   | `r.Discard(5)`               |
| `Reset(r)`         | Yeni reader ile buffer’ı sıfırlar              |                              |
| `UnreadByte()`     | Son baytı geri koyar                           |                              |
| `UnreadRune()`     | Son rune’u geri koyar                          |                              |
| `bufio.Writer`     | Buffer’lı yazma                                | `w := bufio.NewWriter(f)`    |
| `NewWriter()`      | Writer oluşturur                               | `w := bufio.NewWriter(f)`    |
| `Write(p)`         | Buffer’a yazar                                 | `w.Write([]byte("abc"))`     |
| `WriteString(s)`   | String yazar                                   | `w.WriteString("merhaba")`   |
| `Flush()`          | Buffer’daki veriyi hemen yazar                 | `w.Flush()`                  |
| `Available()`      | Buffer’daki boş yer                            |                              |
| `Buffered()`       | Buffer’daki veri miktarı                       |                              |
| `bufio.Scanner`    | Kolay satır/sözcük okuma için                  | `s := bufio.NewScanner(f)`   |
| `NewScanner(r)`    | Scanner oluşturur                              | `s := bufio.NewScanner(f)`   |
| `Scan()`           | Sonraki bölümü okur                            | `s.Scan()`                   |
| `Text()`           | Okunan string’i döner                          | `s.Text()`                   |
| `Bytes()`          | Okunan []byte döner                            | `s.Bytes()`                  |
| `Err()`            | Okuma hatası varsa döner                       | `s.Err()`                    |
| `Split()`          | Scanner’ın bölme şeklini değiştirir            | `s.Split(bufio.ScanWords)`   |

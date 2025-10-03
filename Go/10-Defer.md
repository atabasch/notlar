# Defer

- Defer go'da yer alan 25 anahtar kelimeden biridir.
- Önüne yazıldığı kod bloğunu işlemler bittikten çalıştırmak üzere sıraya alır.
- En sonuncu `defer` dan başlayarak ilk yazılana doğru çalışır.

```go
    fmt.Println("1")
	fmt.Println("2")
	fmt.Println("3")
	defer fmt.Println("4")
	defer fmt.Println("5")
	fmt.Println("6")
	fmt.Println("7")
	fmt.Println("8")
	fmt.Println("9")
	defer fmt.Println("10")
	defer fmt.Println("11")
```


```bash
1
2
3
6
7
8
9
# İşlemler bitti şimdi `defer` ile sıraya alınanlar en sondan başlayarak çalışacak
11 # En son defer
10 
5
4 # İlk defer satırı
```
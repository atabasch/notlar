# Koşullar
- Programlama dilinde bir koşula bağlı iş bölmek için kullanılır. Eğer böyle ise şunu yap gibi.

## Operatörler

Koşullu işlemlerde sorgu yapabilmek için bazı operatörler kullanılır bu operatörlere aşağıdaki linkten ulaşabilirsin.

# {if} Koşullu İfadesi 

```go
if condition {
    
}
```


```go
if condition {
    
} else {
    
}
```


```go
if condition {
    
} else if condition { 

} else {
    
}
```


# {Switch-Case}

```go
package main
import ("fmt")

func main() {
    day := 4

    switch day {
        case 1:
            fmt.Println("Monday")
        case 2:
            fmt.Println("Tuesday")
        case 3:
            fmt.Println("Wednesday")
        case 4:
            fmt.Println("Thursday")
        case 5:
            fmt.Println("Friday")
        case 6:
            fmt.Println("Saturday")
        case 7:
            fmt.Println("Sunday")
        default:
            fmt.Println("Not a weekday")
  }
}
```
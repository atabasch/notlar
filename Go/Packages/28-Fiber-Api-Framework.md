### POST İLE GELEN VERİYİ ALMAK
```go
type RegisterPostData struct {
	Name     string `json:"name" validate:"required"`
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required"`
}

postData := RegisterPostData{}
err := ctx.BodyParser(&postData)

if err != nil {
    //
}

```


### Form Hataları - Validation
```go

```

```go

```

```go

```

```go

```

```go

```

```go

```

```go

```

```go

```

```go

```

```go

```

```go

```


# Struct içinde yazılan validasyonları kontrol eder.

### indir ve import et 

> go get github.com/go-playground/validator/v10

> import "github.com/go-playground/validator/v10"

### Benim özel validatör fonksiyonum 

`internal/validator/validator.go`

```go
package validator

import "github.com/go-playground/validator/v10"

func CheckRules(data interface{}, errorMessages map[string]string) map[string]any {
	out := make(map[string]any)

	validate := validator.New()
	err := validate.Struct(data)
	if err == nil {
		return out
	}

	errorList, _ := err.(validator.ValidationErrors)
	if len(errorList) > 0 {

		for index := range errorList {
			e := errorList[index]
			emkey := e.Field() + "." + e.Tag()

			var msg string = e.Error()
			if errorMessages[emkey] != "" {
				msg = errorMessages[emkey]
			}

			out[emkey] = map[string]any{
				"error": msg,
				"tag":   e.Tag(),
				"value": e.Value(),
			}

		} // for

	} // len

	return out
}

```

### Kullanımı

```go
import "packagename/internal/validator"

type RegisterPostData struct {
	Name     string `json:"name" validate:"required,min=2,max=36"`
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=6,max=36"`
}

var RegisterPostRulesMessages map[string]string = map[string]string{
	"Name.required":     "Lütfen adınızı giriniz.",
	"Name.min":          "İsim 2 ile 36 karakter arasında olmalı.",
	"Name.max":          "İsim 2 ile 36 karakter arasında olmalı..",
	"Email.required":    "E-posta adresi giriniz.",
	"Email.email":       "Lütfen geçerli bir e-posta adresi giriniz",
	"Password.required": "Lütfen bir parola giriniz",
	"Password.min":      "Parolanız en az 6 en fazla 36 karakter olmalı.",
	"Password.max":      "Parolanız en az 6 en fazla 36 karakter olmalı.",
}

postData := RegisterPostData{
    Name: "",
    Email: "",
    Password: ""
}

checkedValidate := validator.CheckRules(postData, RegisterPostRulesMessages)

if len(checkedValidate) > 0 {
    fmt.Println( checkedValidate )
}

```
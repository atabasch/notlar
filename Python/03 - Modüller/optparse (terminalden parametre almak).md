# optparse modülü



```python
# kütüphane dahil edilir.
import optparse

# kütüphaneden yeni bir obje oluşturulue.
parsObj = optparse.OptionParser()

# alınacak olan parametre ayarları yapılır.
parsObj.add_option("-k", "--key", dest="varName", help="a text for help")

# gelen tüm parametreleri alan method. (tuple olarak gelir)
dicts = parsObj.parse_args()

(inputs, arguments) = parsObj.parse_args()


# Direkt istenilen parametreyi almak.
print(inputs.varName)

```

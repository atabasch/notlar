# THREAD
Aynı anda birden fazla işlem yapmak için kullanılır.
Örneğim bir download programı yaptığımızda video download edilirken programın bir sonraki işleme geçmesi için indirme işleminin bitmesi gerekir.
Kodlar sırayla çalışır ve tek tek yapılır
Ama aynı anda 3 dosya indirmek isteyebiliriz.
Yada önde bir hesap yaparken arkaplanda aynı anda mail göndermek.
Bunun için Threadlar kullanılır

## THREAD İMPORT ETMEK
> import threading


## FONKSİYONLU KULLANIM
```python
def worker():
    # Çalışacak kodlar


threads = []
for i in range(5):
    t = threading.Thread(target=worker)
    threads.append(t)
    t.start()
```

threads isteğe bağlı bir işlemdir. Sayı tutmak için.


## FONKSİYONLU ve PARAMETRELİ KULLANIM
```python
def worker(par1, par2):
    # Çalışacak kodlar


threads = []
for i in range(5):
    t = threading.Thread(target=worker, args=( val1, val2, ))
    threads.append(t)
    t.start()
```

threads isteğe bağlı bir işlemdir. Sayı tutmak için.


## CLASS SINIF İLE KULLANIM
```python
class KlasName(threading.Thread):
    def __init__(self, parametre):
        threading.Thread.__init__(self)
        self.parametre = parametre
    
    def run(self):
        print("{} için thread başladı Thread: {}".format(self.parametre, threading.current_thread()))
        sleep(2)
        print("{} için thread bitti".format(self.parametre))
 
thread_sc = KlasName("parametre değeri")
thread_sc.start()     
```

## BİLGİ ALMAK
Fonksiyon içinde thread ismi almak için `Thread(name="isim")` ataması yapılır ve target e atanan fonksiyon içinde
> threading.current_thread().getName()

kullanılır.
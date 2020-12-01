# Process
Wİndowstaki görev yöneticisini açtığımızda çalışan görevlere verilen addır.
Bilgisayarda aynı anda çalışabilen her bir işleme process denir.


| Sütun  | Açıklama   |
|---|---|
| USER | Hangi kullanıcı başlatmış |
| PID | Process ID |
| %CPU | NE kadar işlemci kullanıyor. |
| %MEM | Ne kadar ram kullanıyor. |
| STAT | Durumu  |
| START | Hangi tarihte başlatıldı. |
| TIME | Ne kadardır çalışıyor. |
| COMMAND | Çalışan komut |


| STAT | Açıklama  |
|---|---|
| S | Uykuda ancak çalışabilir. |
| Z | Zombi durumunda |
| T | Durdurulmuş |
| R | Çalışıyor. |

### Tüm çalışan processleri görmek
Statik olarak tüm processleri gösterir ve sadece gösterdiği ana ait olanlardır.
> ps aux

Dİnamil olarak gösterir.
> top

### Process ağacını görmek
> pstree

### Processlerde arama yapmak
> ps aux | grep process_name

### Process Durdurmak
> kill -9 <PID>

-9 => 1 den 9 a kadar bir integer numaradır ve processi öldürmenin önemini belirtir.
Mesela 1 processi öldürmeyi dene öldüremezsen boşver.
9 Processi günler sürecek olsa bile öldür.



.

# Scapy

> import scapy.all as scapy


### Scapy de herhangi bir method hakkında bilgi alıp içine verilebilecek parametreleri görmek
scapy.ARP() komutu içine girilebileeck parametrelrei görebilmek için.
> scapy.ls( scapy.ARP() )

### Scapy ile ARP taraması
- 1) ARP isteği gönder (Hangi ip aralıkları taranacak )
- 2) Broadcast ile Yayın isteği oluştur.
- 3) Gelen cevabı al.

```python3
arp_request_packet = scapy.ARP(pdst="192.168.1.1/24")

broadcast_packet = scapy.Ether(dst="ff:ff:ff:ff:ff:ff")

combined_packet = broadcast_packet/arp_request_packet

(online, offline) = scapy.srp(combined_packet, timeout=1)

online_ips = list(online) # Geniş ve karmaşık yazı şekli ile açık cihazlar.
online_ips = online.summary() # Daha basit yazı şekli ile açık cihazlar.



```

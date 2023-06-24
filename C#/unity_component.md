# PENCERELER

## Inspector 
Oyun elemanlarının özellikleri

## Scene 
Sahne görüntüsü

## Game 
Oyun görüntüsü (canlı)

## Hierarchy
Sahne içindeki obje listesi

## Project
Proje dosyaları

## Console
Terminal

## Tile Palette
Ekrana eklenen bir **Tile Map** in ızgaralarını fırça gibi nesnelerle doldurmaya yarar.
Tile Palette **Yeni bir Palet oluştur** sonra o palet içine paletin konusu ile ilgili (örneğin zemin görsellerinin hepsini) görselleri aktar.
Tile Palette penceresinden mouse ile boyama yapmak istediğin görseli seç ve Scene penceresinde oyun ekranını boya.




# Eklenenler

### 2D Object > Tilemap
Ekrana ızgara (grid) ekler bu sayede ekran kullanımı kolaylaşır.


## Transform

## 2. Sprite Renderer

#### 2.1 Sorting Layer
Inspector penceresindeki bu ayardan layerlar oluşturup oyun içindeki elemanları layerlara atayabilirsin. 
Böylece hangi layer üstte ise o layerdaki itemlerin tamamı aynı sıralama ile z ekseninde sıralanır.

# Komponentler

#### Rigidbody - Rigidbody 2d
Objeye yer çekimi ekler obje aşağı doğru düşer.
- karakter
- engel
- ödül

**NOT:** Eğer oyuncu karakteri ileri giderken yuvarlanıyorsa bunu engellemek için **Constrains** altında **Freeze Rotation* Z yi işaretle. 

#### Box Collider 2d
Obje çarpılabilen, dokunulabilen bir nesnedir
- karakter
- mekan - zemin - yer

Komponent kısmında **Box Collider 2d** komponenti altında **edit colleider** a tıklayarak nesnenin dokunulabilir yüzeyini ayarlamayı sağlar.



### 


# Hareket Ettirme & Zıplatma

**NOT:** Eğer oyuncu karakteri ileri giderken yuvarlanıyorsa bunu engellemek için **RigidBody2D** componentinde **Constrains** altında **Freeze Rotation* Z yi işaretle. 



```c#
//...

RigidBody2D rb;
float horizontal;
bool allowJump;

// public verilen değişkenler script eklenen objenin properties kısmında görünür. Oradan değiştirilebilir
public float speed;
public float jumpForce;

void Start(){
    // gameObject = Scriptin atandığı oyun objesi
    // GetComponent ile objeye atanan "RigidBody 2D" componentine erişiyorum. 
    rb = gameObject.GetComponent<RigidBody2D>();
}

// Oyuncu hareketlerinde bu methodu tercih et.
void FixedUpdate(){
    /**
    Klavyeden yatay olarak basılan tuş değerini alır.
    0 - Hareketsiz
    -1 Sol - A
    1 Sağ - D
     */
    horizontal = Input.GetAxis("Horizontal");
    rb.velocity = new Vector2(horizontal * Time.deltaTime * speed, _body.velocity.y);
}

void Update(){
    // Boşluğa basmayı algıla ve allowJump değişkeni true ise
    if(Input.GetKeyDown(KeyCode.Space) && allowJump==true){

        // rigidbody2d eklenmiş olan kod yazılı objeye yukarı doğru güç uygula.
        rb.AddForce(new Vector2(0, jumpForce));
        allowJump = false;
    }
}

/**
İki nesnenin bir birine değip değmediğini algılar
eğer kod yazılan oyun nesnesi "Zemin" tagı verilen bir nesneye çarptıysa
allowJump değerini false yap böylece karakter yeniden zıplama izni alır.
 */
private void OnCollisionEnter2D(Collision2D collision){
    if(collision.gameObject.tag == "Zemin"){
        allowJump = true;
    }
}
```

## TAG EKLEMEK
**Inspector** penceresinde sol üstte **Tag** açılır menüsünden yeni bir etiket ekle ve **Hierarchy** bölümündeki objeye yine aynı açılır listeden **Tag** seçimini yap.


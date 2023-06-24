# Objenin Yönünü Değiştirmek

## 1. Yöntem
```c#

// Propertiesde component kısmında varsayılan bir component 
// split ayarındaki X yönü aktif  olursa nesne arkasını döner
private SpriteRenderer spriteRenderer;
float _moveInputX;

void Start(){
    spriteRenderer = gameObject.GetComponent<SpriteRenderer>();
}

void FixedUpdate(){
    // -1 | 0 | 1
    _moveInputX = Input.getAxis("Horizontal");
    if(_moveInputX < 0){
        spriteRenderer.flipX = true;
    }
    if(_moveInputX > 0){
       spriteRenderer.flipX = false;     
    }   
}


```

## 2. Yöntem
```c#
bool isScaleXRight = true;
float moveX;

void ChangeScaleX(){
    isScaleXRight = !isScaleXRight;
    Vector3 vector = transform.localScale;
    vector.x *= -1;
    transform.localeScale = vector;
}

void FixedUpdate(){
    moveX = Input.GetAxis("Horizontal");
    if(moveX < 0 && isScaleXRight){
        ChangeScaleX();
    }
    if(moveX > 0 && !isScaleXRight){
        ChangeScaleX();
    }
}


```
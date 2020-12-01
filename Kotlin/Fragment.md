# FRAGMENTLER 1 ACTİVİTY İÇİNE EKLENEBİLEN BİRDEN ÇOK EKRAN OLABİLİR.
- MainActivity Oluştur
- Sağ tık > new > fragment > blank fragment diyerek fragment layout ve class ları oluşturabilirsin.
- Ama sonra fragment classları içindeki onCreateView hariç her şeyi temizle ve aşağıdaki gibi temiz yap
- Fragmentler Activity Layout içindeki FrameLayout içine eklenir.

### MainActivity.kt
```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //Fragment yükleme
        changeFragment(FragmentClass())
    }

    fun changeFragment(fragment: Fragment){
        var manager = supportFragmentManager.beginTransaction()
        manager.replace(R.id.main_layout_icindeki_frame_layout, fragment)
        manager.commit()
    }

}
```

### Örnek FragmentClass
```kotlin
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment

class FragmentClass : Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_icin_hazirlanan_layout, container, false)
    }


}
```

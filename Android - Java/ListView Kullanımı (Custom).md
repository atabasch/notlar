## ADIM 1 => Özel List View için tasarım yapmalı

• **res** > **layout** "sağ tık > new > layout resource file" listview_objname.xml oluştur.
• LinearLayout ile birlikte bir tasarım oluştur ve id değerlerini ver.


## ADIM 2 => Bağlantı işlemleri için bir sınıf oluştur.
• ObjeismiClass.java adında bir dosya oluştur.
• ArrayAdaptor sınıfından extends et ve gerekli işlemleri yap.

```java
public class ObjeClass extends ArrayAdapter {

    // Her bir iteme girilecek olan verileri listeler halinde oluşturuyoruz.
    private ArrayList<String> titles;
    private ArrayList<String> descriptions;
    private ArrayList<Bitmap> images;
    private Activity context; // activiteyi bilmek i.in alıyoruz

    // başlatıcı oluşturuyoruz.
    public FeedClass(Activity context, ArrayList<String> titles, ArrayList<String> descriptions, ArrayList<Bitmap> images ){
        super(context, R.layout.listview_objname, titles); // titles yerine herhangi bir arraylist eklenebilir.
        this.context = context;
        this.titles = titles;
        this.descriptions = descriptions;
        this.images = images;
    }

    // List viewi dolduracak olan fonksiyon
    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {

        // LayoutInflater ile listviewi buraya alıyoruz.
        LayoutInflater layoutInflater = context.getLayoutInflater();
        View customView = layoutInflater.inflate(R.layout.listview_objname, null, true);

        // List view içindeki objeleri getiriyoruz.
        TextView tvTitle = customView.findViewById(R.id.tvTitle);
        TextView tvDescription = customView.findViewById(R.id.tvDescription);
        ImageView imageView = customView.findViewById(R.id.imageView);

        // Objelerin içlerini dolduruyoruz
        tvTitle.setText( titles.get(position) );
        tvDescription.setText( descriptions.get(position) );
        imageView.setImageBitmap( images.get(position) );

        return customView;

    }
}
```


## ADIM 3 => Çalışan Activity içinden verileri al ve yukardaki sınıfı kullan
```java
public class MainActivity extends AppCompatActivity {

    ListView listView;
    ArrayList<String> titlesFromParse;
    ArrayList<String> descriptionsFromParse;
    ArrayList<Bitmap> imagesFromParse;
    ObjeClass objeClass;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listView = findViewById(R.id.listView);
        titlesFromParse = new ArrayList<>();
        descriptionsFromParse = new ArrayList<>();
        imagesFromParse = new ArrayList<>();

        objeClass = new ObjeClass(this, titlesFromParse, descriptionsFromParse, imagesFromParse);
        listView.setAdapter(objeClass);

        doldur();

    }

    public void doldur(){
        // Array Listleri doldur
        for(Type items: item){
            // Arrayı doldur.
            objeClass.notifyDataSetChanged(); // Bu komutu hep en dip alana yaz. mesela iç içe parse yapıyorsan en içteki parse alanına
        }
    }
}
```

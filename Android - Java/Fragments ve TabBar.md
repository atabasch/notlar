# TABBAR
TabBarlar uygulama üstünde duran menü elemanlarıdır.
Bastıkça ekran değişir. Ör: Son yazılanlar | Popülerler | Yorumlar vs

# FRAGMENTLER
- Aynı aktivity altında birden çok ekran gibi düşünülebilir.
- Fragmentler başka layout dosyalarıdır: "Layout > new resource file > dosya ad" olarak oluşturulurlar.
- Her Fragmentin kendine ait **Fragment** sınıfından extend edilmiş class dosyaları olmalıdır. Ör: FragmentClassName.java
- Bu dosyaların içinden Fragmentler doldurulur.
- Class dosyasını oluşturunca Override methodlardan onCreateView methodunu oluştur.

### 1. FRAGMENT SINIFLARI DOSYALARI OLUŞTURMAK
```java
public class FragmentClassName extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_resource_file, container, false);

        //Fragmentte çalışacak kodlar.

        return view;
    }
}
```

### 2. FRAGMENTLERİ BAĞLAYAN ADAPTÖR SINIF DOSYASINI OLUŞTURMAK
```java
public class PageAdaptorForFragments extends FragmentPagerAdapter {

    private List<Fragment> mFragmentList = new ArrayList<>();
    private List<String> mFragmentTitleList = new ArrayList<>();

    public void addFragment(Fragment fragment, String title){
        mFragmentList.add(fragment);
        mFragmentTitleList.add(title);
    }

    public PageAdaptorForFragments(@NonNull FragmentManager fm, int behavior) {
        super(fm, behavior);
    }

    @Nullable
    @Override
    public CharSequence getPageTitle(int position) {
        return mFragmentTitleList.get(position);
    }

    @NonNull
    @Override
    public Fragment getItem(int position) {
        return mFragmentList.get(position);
    }

    @Override
    public int getCount() {
        return mFragmentList.size();
    }
}
```

### 3. MAİN AKTİVİTY İÇİNDE SONUÇLARI GÖSTERMEK
```java

```

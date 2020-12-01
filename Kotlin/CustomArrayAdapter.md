# ÖZEL ARRAY ADAPTER OLUŞTURMA

```kotlin
import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import kotlinx.android.synthetic.main.listview_file.view.*


class CustomArrayAdapter(context: Context, val items:ArrayList<CustomObject>)
    : ArrayAdapter<Product>(context, R.layout.listview_file, items){

    override fun getItem(position: Int): CustomObject? {
        return items.get(position)
    }

    override fun getItemId(position: Int): Long {
        return position.toLong()
    }

    override fun getCount(): Int {
        return items.size
    }

    override fun getView(position: Int, convertView: View?, parent: ViewGroup): View {

        val layoutInflater =  LayoutInflater.from(context)
        val rowView = layoutInflater.inflate(R.layout.listview_file, parent, false)

        val currentItem = items.get(position)

        rowView.tvName.text = currentItem.var1
        rowView.tvName2.text = currentItem.var2

        return rowView
    }


    // AUTO COMPLETE TEXT VİEW DE FİLTRELEME İŞLEMLERİ İÇİN
    override fun getFilter(): Filter {
        return productFilter()
    }

    private fun productFilter() : Filter = object : Filter() {
        override fun performFiltering(constraint: CharSequence?): FilterResults {
            var filterResults = FilterResults()
            var suggestions = ArrayList<Product>()

            if(constraint == null || constraint.length == 0){
                suggestions.addAll(items)
            }else{
                var filterPattern = constraint.toString().toLowerCase()
                for(item in items){
                    if(item.barcode.toString().contains(filterPattern) || item.title.toString().contains(filterPattern)){
                        suggestions.add(item)
                    }
                }
            }

            filterResults.values = suggestions
            filterResults.count = suggestions.size
            return filterResults
        }

        override fun publishResults(constraint: CharSequence?, results: FilterResults?) {
            if(results != null){
                clear()
                addAll(results.values as List<Product>)
                notifyDataSetChanged()
            }
        }

        override fun convertResultToString(resultValue: Any?): CharSequence {
            return (resultValue as Product).title.toString()
        }

    }


}
```

## KULLANIMI

```kotlin
var items : ArrayList<Product> = arrayListOf()
items.add( CustomObject(x, y, z) )
var arrayAdapter = CustomArrayAdapter(applicationContext, items)
listViewId.adapter = arrayAdapter
```

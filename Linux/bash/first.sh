#!/bin/bash

secenekler(){
  echo "Bir islem seciniz"
  echo "1) Icerigi Listele"
  echo "2) Dosya Olustur"
  echo "3) Dizin Olustur"
  echo "4) Dosya Sil"
  echo "5) Dizin Sil"
  echo "0) Cikis Yap"
}

clearTitle(){
  clear
  echo "=== $1 ==="
}

deleteContent(){
  rm -r "$1"
}



#####################################
selectedFileOptions(){
    clear
    printf "\"$1\" için yapılacak bir işlem seçin\n========================================\n"
    echo "1) Oku"
    echo "2) Düzenle"
    echo "3) Adını Değiştir"
    echo "4) Kopyala"
    echo "5) Taşı"
    echo "6) Sil"
    echo "0) Vazgeç"
    printf "\n========================================\n"
    read -p "İşlem No: " number
    return $((number))
}

##############
selectedFile(){

  local filename=$1
  local whileLoop=1


  while [ $whileLoop -eq 1 ]; do

    selectedFileOptions $filename
    selectedOption=$?

    case $selectedOption in

      1)
        cat "$filename"
        ;;

      2)
        nano "$filename"
        ;;


      3)
        read -p "Yeni İsim: " newName
        mv "$filename" ./"$newName"
        filename=$newName
        ;;


      4)
        echo "Kopyalanacak"
        ;;


      5)
        echo "Taşınacak"
        ;;


      6)
        echo "Silmek istediğinize emin misiniz? İşlem geri alınamaz!"
        read -p "Evet => e | Hayır => h: " status
        if [[ status -eq "e" ]] || [[ status -eq "E" ]]; then
            deleteContent "$filename"
        fi
        ;;


      0)
        break
        ;;


      *)
        echo "Hatalı seçim"
        ;;

    esac #case

  done #while

}

#####################################
#####################################
#####################################






islem_devam=1
while [ $islem_devam -eq 1 ]; do
  clear
  secenekler
  read -p "Islem Numarasi: " islemNo


  if [ $islemNo -eq 0 ]
  then
    break
  else

    case $islemNo in
        1)
            clear
            files=*
            echo "Islem yapmak istediginiz dosya yada dizini secin."
            echo "=============================================================="
            echo

            PS3=$'\n'"=============================================================="$'\n'"İslem yapılacak dosya numarasını girin: "
            select file in $files; do

              selectedFile "$file"
            done

            ;;

        # DOSYA OLUŞTURULACAK.
        2)
            clearTitle "Yeni Dosya Oluştur"
            read -p "Olusturulacak dosya adini girin: " filename
            touch $filename
            ;;

        # KLASÖR OLUŞTURULACAK
        3)
            clearTitle "Yeni Klasör Oluştur"
            read -p "Olusturulacak dizin adini girin: " directoryname
            mkdir $directoryname
            ;;

        # DOSYA SİL SEÇİLMİŞTİR.
        4)
            clearTitle "Dosya Sil"
            echo "Silmek istediginiz dosyayi secin"

            files=*
            PS3="Silinecek dosya numarasi: "
            select file in $files; do

                echo "!-> Dikkat! " $file " isimli dosya silinecek."
                echo "Bu islem bir daha geri alinamaz."
                echo "Silme islemini onayliyor musunuz. Evet icin [e], Hayir icin [h] yazin."
                read -p "Dosya Silinsin mi? [e/h]: " sonuc
                if [[ sonuc -eq "e" ]] || [[ sonuc -eq "E" ]]; then
                    deleteContent "$file"
                fi
                break
            done
            echo $file " isimli doya silindi."
            ;;

        # DİZİN SİLME İŞLEMLERİ
        5)
            clearTitle "Klasör Sil"
            echo "Silmek istediginiz dizini secin"

            directories=*/

            PS3="Silinecek dizin numarasi: "
            select dir in $directories; do
                echo "!-> Dikkat! " $dir " isimli klasör icindeki tüm veriler ile silinecek.."
                echo "Silme islemini onayliyor musunuz. Evet icin [e], Hayir icin [h] yazin."
                read -p "Dizin Silinsin mi? [e/h]: " sonuc
                if [ $sonuc = "e" ] || [ $sonuc = "E" ]
                then
                    deleteContent "$dir"
                    break
                else
                  break
                fi
            done
           ;;

        # BELİRTİLEN  İŞLEMLERDEN BAŞKA SEÇİM YAPILDI
        *)
            echo "Hatali secim yapildi"
            ;;
    esac #CASE BİTTİ

  fi # İF BİTTİ

done # ANA WHILE BİTTİ


echo "Program Kapatildi.."

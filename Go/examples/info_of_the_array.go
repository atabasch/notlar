package main

import (
	"fmt"
)

// MİNİMUM VE MAKSİMUMU BULMAK
func findMinMax(numbers []int) (min, max int, status bool) {
	if len(numbers) == 0 {
		return 0, 0, false
	}

	var minimum, maximum int = numbers[0], numbers[0]

	for _, value := range numbers {

		if value < minimum {
			minimum = value
		}

		if value > maximum {
			maximum = value
		}

	}

	return minimum, maximum, true

} // findMinMax

// EN ÇOK KULLANILAN SAYIYI BUL
func findModNumber(numbers []int) (number, counter int, nums map[int]int) {
	var counters = make(map[int]int)

	for _, num := range numbers {
		counters[num] += 1
	}

	var vnum, vcount = numbers[0], 0

	for index, value := range counters {

		if value > vcount {
			vnum = index
			vcount = value
		}

	}

	return vnum, vcount, counters

} // findModNumber

func main() {

	var numbers = []int{} // 0

	for i := 1; i <= 10; i++ {
		fmt.Printf("%d. tamsayıyı gir (0-100 arsında): ", (i))
		var x int
		fmt.Scan(&x)

		if x < 0 {
			break
		}

		numbers = append(numbers, x)
	}

	// TOPLAMI BUL
	var total int
	for _, number := range numbers {
		total += int(number)
	}

	var ortalama = (total / len(numbers))

	// MIN, MAX BUL
	var min, max, _ = findMinMax(numbers)

	fmt.Printf("İşlemler Sona Erdi \nGirilen Sayılar: \n")

	for i, v := range numbers {
		fmt.Printf("[%d] => %d \n", (i + 1), v)
	}

	// EN ÇOK GÖRÜLEN SAYIYI BUL
	var mod, modcount, _ = findModNumber(numbers)

	fmt.Printf("Adet:%d \n", len(numbers))
	fmt.Printf("Toplam:%d \n", total)
	fmt.Printf("Ortalama:%d \n", ortalama)
	fmt.Printf("En Küçük Sayı: %d \nEn Büyük Sayı: %d\n", min, max)
	fmt.Printf("En sık görülen sayı: %d \ntam %d kez yazılmış.\n", mod, modcount)

}

// 24 - Ordene um array com QuickSort

function quicksort(array) {
    if (array.length < 2) {
        return array;
    } else {
        const pivot = array[0];

        const menores = array.slice(1).filter(element => element <= pivot);

        const maiores = array.slice(1).filter(element => element > pivot);

        return quicksort(menores).concat(pivot, quicksort(maiores));
    }
}

console.log(quicksort([10, 5, 2, 3]));
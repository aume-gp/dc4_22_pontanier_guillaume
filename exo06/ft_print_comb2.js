function ft_print_comb2() {
    for (let a = 0; a<100; a++) {
        for (let b = a + 1; b<100; b++) {
            console.log(String(a).padStart(2, '0') + ' ' + String(b).padStart(2, '0'));
        }
    }
}

ft_print_comb2();
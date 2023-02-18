function ft_print_comb() {
    let a = 0;
    let b = 1;
    let c = 2;
    while (a<7) {
        while (b<8) {
            while (c<10) {
                console.log(a.toString() + b.toString() + c.toString());
                c++;
            }
            b++;
            c = b + 1;
        }
        a++;
        b = a + 1;
        c = b + 1;
    }
}

ft_print_comb();
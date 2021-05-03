// 5n + 2 => O(5n+2) => O(n)
const addUpToN1 = (n) => {
    let total = 0;

    for (let i = 1; i <= n; i++){
        total += i;
    }

    return total;
}

// 3 => O(3) => std - O(1)
const addUpToN2 = (n) => {
    let total = 0;
    return (n * (n + 1) / 2);
}

// Copy into browser window
// let t1 = performance.now();
// addUpToN1(1000000000);

// let t2 = performance.now();
// addUpToN2(1000000000);

// clock time is based on your kernel (hardware), depends on how much power your kernel is giving to that process (clock time), so not reliable / standardized
// relies on things like your ram, cpu, etc.


// Bubble Sort Algorithm
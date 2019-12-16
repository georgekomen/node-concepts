function longComputation() {
    let sum = 0;
    for(let i=o; i<1e9; i++){
        sum += 1;
    };
    return sum;
};

process.on('message', (msg) => {
    const sum = longComputation();
    process.send(sum);
});
function learnJs(lang, callback){
    console.log(`я учу: ${lang}`);
    callback();
}

learnJs('JS', function(){
    console.log('я прошел этот урок!');
});




function lJs(langs, clb){
    console.log(`учим: ${langs}`);
    clb();
}

lJs('js', function(){
    console.log('ура');
});

// function learnJs(lang, callback){
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// function done(){
//     console.log('я прошел этот урок!');
// }

// learnJs('JS', done)
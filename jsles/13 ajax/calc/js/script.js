

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');


    inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest();

        // request.open(method, url, async, login, pass);
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; chadset=utf-8');
        request.send();

        // request.addEventListener('readystatechange', () => {  //статус готовности нашего запросав текущзий момент
        //     if(request.readyState === 4 && request.status === 200){
        //         console.log(request.response);
        //         const data = JSON.parse(request.response);
        //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        //     } else {
        //         inputUsd.value = 'что-то пошло не так';
        //     }
        // });


        request.addEventListener('load', () => {  //статус готовности нашего запросав текущзий момент
            if(request.status === 200){
                const data = JSON.parse(request.response);
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            } else {
                inputUsd.value = 'что-то пошло не так';
            }
        });

        //status
        //statustext //ok, not found
        //response
        //readyState


    });
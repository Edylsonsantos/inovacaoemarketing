var form = document.querySelector(".form");

    async function handleSubmit(event) {
        event.preventDefault();
        
        var status = document.querySelector(".load");
        var loading = document.querySelector(".loading");
        var submit = document.querySelector(".submit");
        loading.style.display = "block";
        submit.style.display = "none";
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Obrigado pelo envio!";
                loading.style.display = "none";
                submit.style.display = "block";
                form.reset();
            } else {
                response.json().then(data => {
                    if (data.hasOwnProperty('errors')) {
                        status.innerHTML = data.errors.map(error => error.message).join(", ");
                    } else {
                        status.innerHTML = "Ops! Houve um problema ao enviar o formulário.";
                        loading.style.display = "none";
                        submit.style.display = "block";
                    }
                });
            }
        }).catch(error => {
            status.innerHTML = "Ops! Houve um problema ao enviar o formulário.";
            loading.style.display = "none";
            submit.style.display = "block";
        });
    }
    form.addEventListener("submit", handleSubmit);
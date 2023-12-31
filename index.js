function SubmitForm(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const language = document.getElementById('language').value;
    const result = document.getElementById('result');
    result.innerHTML = '';

    if (name && email) {
        result.innerHTML = `
            <p>Usuário cadastrado com sucesso!</p>
            <p>Nome: ${name}</p>
            <p>E-mail: ${email}</p>
            <p>Idioma: ${getLanguageName(language)}</p>
        `;
    } else {
        result.innerHTML = '<p>Preencha todos os campos!</p>';
    }
}

function getLanguageName(languageCode) {
    switch (languageCode) {
        case 'pt-br':
            return 'Português';
        case 'fr':
            return 'Francês';
        case 'it':
            return 'Italiano';
        case 'ja':
            return 'Japonês';
        default:
            return 'Desconhecido';
    }
}
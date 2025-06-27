
document.addEventListener('DOMContentLoaded', function() {
    const filtroBotoes = document.querySelectorAll('.filtros button');
    const jogosCards = document.querySelectorAll('.jogo-card');
    
    if (filtroBotoes.length > 0) {
        filtroBotoes.forEach(botao => {
            botao.addEventListener('click', function() {
               
                filtroBotoes.forEach(btn => btn.classList.remove('ativo'));
                
             
                this.classList.add('ativo');
                
                const categoria = this.getAttribute('data-categoria');
                
              
                jogosCards.forEach(card => {
                    if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
 
    const formContato = document.getElementById('form-contato');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let valido = true;
            
            
            const nome = document.getElementById('nome');
            const erroNome = document.getElementById('erro-nome');
            if (nome.value.trim() === '') {
                erroNome.textContent = 'Por favor, insira seu nome';
                valido = false;
            } else {
                erroNome.textContent = '';
            }
            
         
            const email = document.getElementById('email');
            const erroEmail = document.getElementById('erro-email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email.value.trim() === '') {
                erroEmail.textContent = 'Por favor, insira seu e-mail';
                valido = false;
            } else if (!emailRegex.test(email.value)) {
                erroEmail.textContent = 'Por favor, insira um e-mail válido';
                valido = false;
            } else {
                erroEmail.textContent = '';
            }
            
         
            const assunto = document.getElementById('assunto');
            const erroAssunto = document.getElementById('erro-assunto');
            if (assunto.value === '') {
                erroAssunto.textContent = 'Por favor, selecione um assunto';
                valido = false;
            } else {
                erroAssunto.textContent = '';
            }
            
            
            const mensagem = document.getElementById('mensagem');
            const erroMensagem = document.getElementById('erro-mensagem');
            if (mensagem.value.trim() === '') {
                erroMensagem.textContent = 'Por favor, insira sua mensagem';
                valido = false;
            } else if (mensagem.value.trim().length < 20) {
                erroMensagem.textContent = 'A mensagem deve ter pelo menos 20 caracteres';
                valido = false;
            } else {
                erroMensagem.textContent = '';
            }
            
         
            if (valido) {
                const mensagemSucesso = document.getElementById('mensagem-sucesso');
                formContato.reset();
                mensagemSucesso.style.display = 'block';
                
               
                setTimeout(() => {
                    mensagemSucesso.style.display = 'none';
                }, 5000);
            }
        });
    }
});
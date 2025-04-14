$(document).ready(function() {
    // Verificar se há uma preferência de tema armazenada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        $('html').removeClass('light-mode').addClass('dark-mode');
        $('#theme-toggle').text('☀️');
    }
    
    // Alternar entre modo claro e escuro
    $('#theme-toggle').click(function() {
        if ($('html').hasClass('light-mode')) {
            $('html').removeClass('light-mode').addClass('dark-mode');
            localStorage.setItem('theme', 'dark');
            $(this).text('☀️');
        } else {
            $('html').removeClass('dark-mode').addClass('light-mode');
            localStorage.setItem('theme', 'light');
            $(this).text('🌓');
        }
    });

    // Aplicar filtros
    $('.filter-group button').click(function() {
        const filters = {
            game: $('#game').val(),
            skill: $('#skill').val(),
            time: $('#time').val(),
            region: $('#region').val()
        };
        // Aplicar filtros
    });

    // Menu mobile
    $('.mobile-menu-button').click(function() {
        $('nav ul').toggleClass('active');
    });

    // Modal de criação de post
    const $modalOverlay = $('#createPostModal');
    const $createPostButton = $('.create-post');
    const $closeModal = $('#closeModal');
    const $cancelButton = $('#cancelButton');
    const $imageUpload = $('#imageUpload');
    const $imagePreview = $('#imagePreview');
    const $tagsInput = $('.tags-input');
    const $tagsContainer = $('.tags-input-container');
    const $submitButton = $('#submitButton');
    const $createPostForm = $('#createPostForm');

    // Abrir modal
    $createPostButton.click(function() {
        $modalOverlay.css('display', 'flex');
    });

    // Fechar modal
    $closeModal.add($cancelButton).click(function() {
        $modalOverlay.hide();
    });

    // Clicar fora para fechar
    $modalOverlay.click(function(e) {
        if (e.target === this) {
            $(this).hide();
        }
    });

    // Preview da imagem
    $imageUpload.change(function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                $imagePreview.attr('src', e.target.result).show();
            }
            reader.readAsDataURL(file);
        }
    });

    // Gerenciamento de tags
    $tagsInput.keydown(function(e) {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            
            const tagValue = $(this).val().trim();
            if (tagValue) {
                const $tag = $('<span>')
                    .addClass('tag')
                    .html(`${tagValue} <span class="tag-close">×</span>`);
                
                $tagsContainer.prepend($tag);
                $(this).val('');
                
                // Adicionar evento para remover a tag
                $tag.find('.tag-close').click(function() {
                    $(this).parent().remove();
                });
            }
        }
    });

    // Remover tags existentes
    $('.tag-close').click(function() {
        $(this).parent().remove();
    });

    // Enviar formulário
    $submitButton.click(function() {
        if ($createPostForm[0].checkValidity()) {
            alert('Anúncio criado com sucesso!');
            $modalOverlay.hide();
        } else {
            // Disparar validações nativas do formulário
            $createPostForm.trigger('submit');
        }
    });
});
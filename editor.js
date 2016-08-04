$(function($) {

    $('.buttons button').each(function () {
        e = $(this);

        e.click(function(event) {
            event.preventDefault();
            var button = $(this);


            switch(button.attr('class'))
            {
                case 'undo':
                    document.execCommand('undo');
                    break;

                case 'redo':
                    document.execCommand('redo');
                    break;

                case 'paste':
                    document.execCommand('paste');
                    break;

                case 'bold':
                    document.execCommand('bold');
                    break;

                case 'italic':
                    document.execCommand('italic');
                    break;

                case 'underline':
                    document.execCommand('underline');
                    break;

                case 'insert-table':
                    break;

                case 'align-left':
                    document.execCommand('justifyLeft');
                    break;

                case 'align-center':
                    document.execCommand('justifyCenter');
                    break;

                case 'align-right':
                    document.execCommand('justifyRight');
                    break;

                case 'align-justify':
                    document.execCommand('justifyFull');
                    break;

                case 'insert-link':
                    document.execCommand('createLink');
                    break;

                case 'insert-image':
                    document.execCommand('insertImage');
                    break;

                default:
                    break;
            }
        })
    });

});
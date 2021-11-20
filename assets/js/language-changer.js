var arrLang = {
    'en': {
        'home': 'Home',
        'about': 'About Us',
        'contact': 'Contact Us',
        'desc': 'This is my description'
    },
    'km': {
        'home': 'ទំព័រដើម',
        'about': 'អំពីយើង',
        'contact': 'ទំនាក់ទំនងយើងខ្ញុំ',
        'desc': 'នេះគឺជាអត្ថបទរបស់ខ្ញុំ'
    }
};

// Process translation
$(function() {
    $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});
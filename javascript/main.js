$('.ask').on('click',function (e){
    e.preventDefault();
    $('.ask').not($(this)).removeClass('active')
    $('.answer').not($(this).next()).slideUp(400)
    $(this).toggleClass('active').next().stop().slideToggle(400)
    
})

$('button[data-filter]').click(function () {
    let attr = $(this).attr('data-filter');
    if(attr === 'all'){
        $('div[data-filter').stop().slideDown(400)
    }else{
        $('div[data-filter]').stop().slideUp(400)
    }
    $(`div[data-filter=${attr}]`).stop().slideDown(400)
})

function writing(element) {
    let inner = element.html();
    let fullText = '';
    letterCount = 0,
    interval =  setInterval(() => {
        fullText = fullText + inner[letterCount]
        element.html(fullText)
        letterCount++;
        if (fullText === inner) {
            clearInterval(interval)
        }
    }, 180);
    setTimeout(() => {
        
    }, 3000);
}
writing($('h1'))

const read = document.querySelector('.read-more');
$('.read-more').click(function () {
    $('.text-hidden').toggleClass('hidden')
    if (read.innerHTML == 'Close') {
        read.innerHTML = 'Read More'
    }else{
        read.innerHTML = 'Close'
    }
})
function socialScoreShare() {
    let left = (screen.width / 2) - (250 / 2);
    let top = (screen.height / 2) - (450 / 2);

    caption = 'Flappy Chicken';
    title = chicken.score + ' points!!!';
    description = 'I just scored ' + chicken.score + ' points on Flappy Chicken. Can you beat it?';

    FB.ui({
        method: 'share',
        href: 'https://jerilseb.github.io/flappy-chicken/',
        quote: description,
        hashtag: '#flappychicken'
      }, function(response){});

    //window = window.open('https://www.facebook.com/dialog/share?app_id=1075842552518705&href=https://jerilseb.github.io/flappy-chicken/&picture=https://jerilseb.github.io/flappy-chicken/src/sprites/thumbnail.png&title=' + title + '&caption=' + caption + '&description=' + description + '&hashtag=#flappychicken', '_blank', 'width=250, height=250, top=' + top + ', left=' + left);
}

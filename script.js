// Portfolio interactivity
document.addEventListener('DOMContentLoaded', function() {
    let profileImg = document.querySelector('.profile-img');
    profileImg.addEventListener('mouseenter', function() {
        profileImg.style.borderColor = '#43a047';
    });
    profileImg.addEventListener('mouseleave', function() {
        profileImg.style.borderColor = '#d84315';
    });
});

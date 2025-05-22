let profileButton = document.getElementById('profile_button');
let profileCover = document.getElementById('profile_cover');
let profileContent = document.getElementById('profile_content');

let closeProfileButton = document.getElementById('profile_button_close');

profileButton.onmousedown = function() {
    profileButton.style.backgroundColor = '#EEE7DB';
    profileButton.children[0].style.color = '#D85051';
}

profileButton.onmouseup = function() {
    profileButton.style.backgroundColor = '#D85051';
    profileButton.children[0].style.color = '#EEE7DB';
}

profileButton.onmouseover = function() {
    profileButton.style.cursor = 'pointer';
}

profileButton.onclick = function() {
    profileCover.style.display = 'none';
    profileContent.style.display = 'inline-flex';
}

closeProfileButton.onmousedown = function() {
    closeProfileButton.style.backgroundColor = '#EEE7DB';
    closeProfileButton.children[0].style.color = '#D85051';
}

closeProfileButton.onmouseup = function() {
    closeProfileButton.style.backgroundColor = '#D85051';
    closeProfileButton.children[0].style.color = '#EEE7DB';
}

closeProfileButton.onmouseover = function() {
    closeProfileButton.style.cursor = 'pointer';
}

closeProfileButton.onclick = function() {
    profileCover.style.display = 'block';
    profileContent.style.display = 'none';
}
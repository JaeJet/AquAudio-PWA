function lightmodetoggle() {
    if (lightmode.textContent == 'Turn off light mode') {
        lightmode.textContent = 'Turn on light mode'
    } else {
        lightmode.textContent = 'Turn off light mode'
    }
    lightmode.classList.toggle('lightmodebutton-lightmode');

    sidebara.classList.toggle('sidebar-lightmode');
    bg.classList.toggle('darkblue-bg-lightmode');
    desc.classList.toggle('Description-lightmode');  
    contentbox.classList.toggle('contentBox-lightmode');  
    divide1.classList.toggle('sidebarDivider-lightmode')
    divide2.classList.toggle('sidebarDivider-lightmode')
}

lightmode.onclick = lightmodetoggle;
function lightmodetoggleabout() {
    if (lightmodeabout.textContent == 'Turn off light mode') {
        lightmodeabout.textContent = 'Turn on light mode'
    } else {
        lightmodeabout.textContent = 'Turn off light mode'
    }
    lightmodeabout.classList.toggle('lightmodebutton-lightmode');

    sidebarb.classList.toggle('sidebar-lightmode');
    bg.classList.toggle('darkblue-bg-lightmode');
    descAbout.classList.toggle('Description-lightmode');  
    contentboxAbout.classList.toggle('contentBox-lightmode'); 
    divide1.classList.toggle('sidebarDivider-lightmode')
    divide2.classList.toggle('sidebarDivider-lightmode')   
}

lightmodeabout.onclick = lightmodetoggleabout;
function lightmodetogglecomp() {
    if (lightmodecomp.textContent == 'Turn off light mode') {
        lightmodecomp.textContent = 'Turn on light mode'
    } else {
        lightmodecomp.textContent = 'Turn off light mode'
    }
    lightmodecomp.classList.toggle('lightmodebutton-lightmode');

    sidebarb.classList.toggle('sidebar-lightmode');
    bg.classList.toggle('darkblue-bg-lightmode');
    desc.classList.toggle('Description-lightmode');  
    contentbox.classList.toggle('contentBox-lightmode');  
    song1.classList.toggle('compName-lightmode'); 
    song2.classList.toggle('compName-lightmode'); 
    song3.classList.toggle('compName-lightmode');    
    divide1.classList.toggle('sidebarDivider-lightmode')
    divide2.classList.toggle('sidebarDivider-lightmode')
}

lightmodecomp.onclick = lightmodetogglecomp;
new fullpage( "#fullpage", {
    autoScrolling: true,
    navigation: true,

    onLeave:(origin,destination,direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({delay:0.5});
        tl.fromTo (title,0.5, {y: '50', opacity: 0}, {y:0, opacity:1})
    
        if (destination.index ===1){
            const subheading = document.querySelector('h3');
            const b1_img = document.querySelector('.building1');
            const description = document.querySelector('p');
            const contact = document.querySelector('form');

            tl.fromTo(b1_img, 0.7, {x: '150%'}, {x: '7.5%'})
            .fromTo(description, 0.5, {y: '50', opacity: 0}, {y:0, opacity:1})
            .fromTo(subheading, 0.75, {y: '25', opacity: 0}, {y:0, opacity:1})
            .fromTo(contact, 0.5, {y: '10', opacity: 0}, {y:0, opacity:1})
        }  
    }
});
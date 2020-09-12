let container = document.querySelector('.container');
got.houses.forEach(element => {
    element.people.forEach(people => {
        let div1 = document.createElement('div');
        div1.classList.add('card');
        let div2 = document.createElement('div');
        div2.classList.add('flex');
        let img = document.createElement('img');
        img.src = people.image;
        let h2 = document.createElement('h2');
        h2.innerText = people.name;
        let p = document.createElement('p');
        p.innerText = people.description;
        let a = document.createElement('a');
        a.innerText = 'Learn More'
        div2.append(img, h2);
        div1.append(div2, p, a);
        container.append(div1);
    });
});
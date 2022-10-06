
  
sdk.run("/", async () => {
    const posts = await fetch(`/posts`,{
        method: 'GET',
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
    })

    const res = await posts.json()
    const container = document.createElement('div')
    container.className = 'max-w-sm w-full h-full flex flex-col space-y-4'
    res.body.forEach(element => {
        const {title, image, desc} = element
        console.log(desc)
        const id = title.replaceAll(' ', '-')
        const subContainer = document.createElement('div')
        subContainer.className = 'group flex relative h-80 p-2'
        // subContainer.addEventListener('click', () => {
        //     console.log(id)
        //     if(location.href.includes(`#${id}`)){
        //         location = '#'
        //     }else{
        //         location = `#${id}`
        //     }
        // })
        const imgElement = document.createElement('img')
        imgElement.src = image
        imgElement.className = 'group-hover:opacity-25 group-hover:absolute rounded'
        const titleElement = document.createElement('h1')
        titleElement.innerHTML = title
        const descElement = document.createElement('p')
        descElement.className = 'w-full p-2 py-8 max-w-sm hidden group-hover:flex'
        descElement.id = id
        descElement.innerHTML = desc.replaceAll('\n','<br>')
        subContainer.appendChild(imgElement)
        subContainer.appendChild(descElement)
        container.appendChild(subContainer)
    });

    const loader = document.getElementById('loader');
    loader.classList.toggle('animate-pulse')
    document.getElementById('root').appendChild(container)
});



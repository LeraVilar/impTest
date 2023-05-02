const pins = document.querySelectorAll('g.pin'),
    builds = document.querySelectorAll('.build'),
    desc = document.querySelector('.desc-window'),
    filters = document.querySelectorAll('.filter-ch')

    let filterArr = []

pins.forEach(pin => {
  pin.addEventListener('mouseover', (event) => {
    let curBuild = document.querySelector('.build[data-num=' + event.currentTarget.dataset.num + ']')
    curBuild.setAttribute("fill-opacity","0.65")
  })
  pin.addEventListener('mouseleave', (event) => {
    let curBuild = document.querySelector('.build[data-num=' +event.target.dataset.num + ']')
    curBuild.setAttribute("fill-opacity","0.3")
  })
  pin.addEventListener('click', (event) => {
    openDesc(event.currentTarget.dataset.num)
  })
})

builds.forEach(build => {
    build.addEventListener('click', (event) => {
        openDesc(event.target.dataset.num)
    })
})

function openDesc (num) {
  
    desc.classList.add('__active')
    desc.querySelector('.cont').innerHTML = gigaArr[num]
    desc.querySelector('span').addEventListener('click', function() {
        desc.classList.remove('__active')
    })
}
function closeFilter () {
    document.querySelector('.filter-window').classList.toggle('__hidden')
}

filters.forEach(filter => {
    filter.addEventListener('change', function(event) {
        console.log(event.target.dataset.filter)
        console.log(event)
        
        if(event.target.checked == true) {
            disOther()
            event.target.checked = true
            filterArr = [...event.target.dataset.filter.split(',')]
            console.log(filterArr)
            fFunc(filterArr)

        }else {
            event.target.checked = true
            disOther()
            filterArr = removeItems(filterArr,[...event.target.dataset.filter.split(',')])
            console.log(filterArr)
            fFunc(filterArr)

        }
    })
})


function fFunc (farr) {
    pins.forEach(pin => {pin.classList.remove('__active'); pin.classList.remove('__disabled')})
    builds.forEach(build => {build.classList.remove('__active'); build.classList.remove('__disabled')})

    farr.forEach(el => {
        const filted = document.querySelectorAll('[data-num=' + el + ']')
        console.log(filted)

        filted.forEach(f => {
            f.classList.add('__active')
        })
    })
    // if(farr.length == 0) {
    //     return
    // }else {
    //     dis()
    // }
}


function removeItems (array, itemsToRemove) { 
    return array.filter(v => { 
          return !itemsToRemove.includes(v); 
      });
  } 

function disOther () {
    filters.forEach(filter => {
        filter.checked = false
    })
}
// function dis () {
//     pins.forEach(pin => {
//         if(!pin.classList.contains('__active')){
//             pin.classList.add('__disabled')
//         }
//     })
//     builds.forEach(build => {
//         if(!build.classList.contains('__active')){
//             build.classList.add('__disabled')
//         }
//     })
// }
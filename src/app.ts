let el: HTMLElement | null = document.getElementById('elem')

let out = (elem: HTMLElement): string =>{
    let clname: string = elem.className
    return clname
}

if(el!==null){
    console.log('elem class: ', out(el))
}else{
    console.warn('el is null')
}



interface Tequipmwnt {
    id: number,
    name: string,
    link: string,
    valid: boolean
}

interface Tcare {
    id: number,
    model: string,
    price: number
}

const tovar: Tequipmwnt = {
    id: 10,
    name: 'saske',
    link: 'http://vk.com/15454465',
    valid: true
}

const care:Tcare = {
    id: 10,
    model: 'niva',
    price: 4000
}

let tovarArr: Tequipmwnt[]  = [
    {
        id: 10,
        name: 'saske',
        link: 'http://vk.com/15454465',
        valid: true
    },
    {
        id: 12,
        name: 'saske',
        link: 'http://vk.com/15d54465',
        valid: true
    },
    {
        id: 122,
        name: 'sasske',
        link: 'http://vk.com/15d854465',
        valid: false
    },
]

interface priceOut {
    (care:Tcare, tovar:Tequipmwnt, num:number):number
}

let price_out:priceOut = (careobj:Tcare, tovarobj:Tequipmwnt, num:number) => {
    return (careobj.price + tovarobj.id + num)
}

let result = price_out(care, tovar, 42)

tovarArr.push(tovar)
console.log(result)
console.log(tovarArr)
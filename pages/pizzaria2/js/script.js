const qs = (el) => document.querySelector(el)
const qsa = (el) => document.querySelectorAll(el)
let modalQt = 0
let totalPreco = 0
let qt = qs('.pizzaInfo--qt')
let modalKey = 0
qt.innerHTML = ''
let cart = []


pizzaJson.map((item, index) => {
    let pizzaItem = qs('.models .pizza-item').cloneNode(true)
    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = item.price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()
        qs('aside').classList.remove('show')
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQt++
        qt.innerHTML = modalQt
        modalKey = key

        qs('.pizzaBig img').src = pizzaJson[key].img
        qs('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        qs('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        qs('.pizzaInfo--actualPrice').innerHTML = pizzaJson[key].price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
        qs('.pizzaInfo--size.selected').classList.remove('selected')

        qsa('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if (sizeIndex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })

        openModal()
    })
    
    qs('.pizza-area').append(pizzaItem)
})

qs('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++
    qt.innerHTML = modalQt
})

qs('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1) {
        modalQt--
    }
    qt.innerHTML = modalQt
})

qsa('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (e) => {
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        size.classList.add('selected')
        qs('.pizzaInfo--actualPrice').innerHTML = pizzaJson[modalKey].precoPsize[sizeIndex].toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    })
})

qs('.pizzaInfo--addButton').addEventListener('click', () => {
    let sizePizza = qs('.pizzaInfo--size.selected').getAttribute('data-key')
    let tamanho = ''
    switch (sizePizza) {
        case '0':
            tamanho = 'Pequena'
            break;
        case '1':
            tamanho = 'Média'
            break;
        case '2':
            tamanho = 'Grande'
            break;
    }

    let identifier = `${pizzaJson[modalKey].id}@${tamanho}`
    let keyPizza = cart.findIndex((item) => {
        return item.identifier == identifier
    })

    if (keyPizza > -1) {
        cart[keyPizza].qt += modalQt
    } else {
        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            name: pizzaJson[modalKey].name,
            price: pizzaJson[modalKey].precoPsize[sizePizza],
            size: tamanho,
            qt: modalQt
        })
    }
    
    closeModal()
    updateCart()
})

qs('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        qs('aside').style.left = '0'
    }
})

qs('.menu-closer').addEventListener('click', () => {
    qs('aside').style.left = '100vw'
})

function updateCart() {
    qs('.menu-openner span').innerHTML = cart.length
    if (cart.length > 0) {
        qs('aside').classList.add('show')
        qs('.cart').innerHTML = ''

        let total = 0
        let subtotal = 0
        let desconto = 0

        for(let c in cart) {
            let pizzaItem = pizzaJson.find((item)=> {
                return item.id == cart[c].id
            })
            subtotal += cart[c].price * cart[c].qt
            let cartItem = qs('.models .cart--item').cloneNode(true)
            cartItem.querySelector('img').src = pizzaItem.img
            cartItem.querySelector('.cart--item-nome').innerHTML = `${pizzaItem.name} (${cart[c].size})`
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[c].qt
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if (cart[c].qt > 1) {
                    cart[c].qt--
                } else {
                    let resp = confirm(`tem certeza que deseja remover do carrinho todas as pizzas ${pizzaItem.name} (${cart[c].size}) ?`)
                    if (resp == true) {
                        cart.splice(c, 1)
                    }
                }
                updateCart()
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[c].qt++
                updateCart()
            })

            qs('.cart').append(cartItem)
        }

        desconto = subtotal * 0.1
        total = subtotal - desconto

        qs('.subtotal span:last-of-type').innerHTML = subtotal.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
        qs('.desconto span:last-of-type').innerHTML = desconto.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
        qs('.total span:last-of-type').innerHTML = total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    } else {
        qs('aside').classList.remove('show')
        qs('aside').style.left = '100vw'
    }
}

function openModal() {
    qs('.pizzaWindowArea').style.opacity = 0
    qs('.pizzaWindowArea').style.display = 'flex'
    setTimeout(() => {
        qs('.pizzaWindowArea').style.opacity = 1
    }, 200)
}

function closeModal() {
    qs('.pizzaWindowArea').style.opacity = 0
    setTimeout(() => {
        qs('.pizzaWindowArea').style.display = 'none'
    }, 500)
    modalQt = 0
    totalPreco = 0
    qt.innerHTML = ''
}


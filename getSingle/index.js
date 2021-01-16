const getSingle = fn => {
    let result
    return () => {
        return result || (result = fn.apply(this))
    }
}


const createSingleDiv = getSingle(
    function () {
        const div = document.createElement('div')
        document.body.appendChild(div)
        return true
    }
)

const button = document.getElementById('button');

button.addEventListener('click', () => {
    const single = createSingleDiv()
})
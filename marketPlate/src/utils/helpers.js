export const formatPrice = (number) => {
    const newNum = Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
    }).format(number / 100)
    return newNum
}

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    if(type === 'colors') {
        unique = unique.flat();
    }
    return ['all', ...new Set(unique)]
}

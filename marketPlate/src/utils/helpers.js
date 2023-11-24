export const formatPrice = (number) => {
    const newNum = Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
    }).format(number / 100)
    return newNum
}

export const getUniqueValues = () => {}

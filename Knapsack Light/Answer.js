function knapsackLight(value1, weight1, value2, weight2, maxW) {

    if (weight1 + weight2 <= maxW) {
        return value1 + value2
    }
    if (weight1 > maxW && weight2 > maxW) {
        return 0
    }
    if (value1 >= value2)  {
        return weight1 <= maxW ? value1 : value2
    } else {
        return weight2 <= maxW ? value2 : value1
    }

}

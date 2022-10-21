numbers_given: list = [1, 2, 3, 4, 5]


# def get_product_numbers(numbers: list) -> list:
#     total_product: int = 1
#     for number in numbers:
#         total_product *= number
#     return [total_product // number for number in numbers]


def get_product_numbers(numbers: list) -> list:
    product_numbers = []
    for number in numbers:
        total = 1
        for other_number in numbers:
            if number != other_number:
                total *= other_number
        product_numbers.append(total)
    return product_numbers


print(get_product_numbers(numbers_given))

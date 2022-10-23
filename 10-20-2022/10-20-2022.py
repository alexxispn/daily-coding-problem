numbers: list = [10, 15, 3, 7]
target: int = 17

is_target_the_sum_of_numbers = any(target - number in numbers for number
                                   in numbers)
print(is_target_the_sum_of_numbers)

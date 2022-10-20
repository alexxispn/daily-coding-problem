numbers: list = [10, 15, 3, 7]
k: int = 17

print([number for number in numbers if k - number in numbers] != [])

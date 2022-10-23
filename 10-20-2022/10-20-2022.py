numbers: list = [10, 15, 3, 7]
k: int = 17

result = any(k - number in numbers for number in numbers)
print(result)

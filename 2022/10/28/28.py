entry = [2, 4, 6, 2, 5]
entry2 = [5, 1, 1, 5]


def func(integers: list) -> int:
    if len(integers) == 0:
        return 0
    if len(integers) == 1:
        return integers[0]
    if len(integers) == 2:
        return max(integers[0], integers[1])
    return max(integers[0] + func(integers[2:]), func(integers[1:]))


print(func(entry))
print(func(entry2))

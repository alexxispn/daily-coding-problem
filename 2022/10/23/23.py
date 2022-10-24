entry = [3, 4, -1, 1]
entry2 = [1, 2, 0]


def get_first_missing_positive(integers):
    integers.sort()
    first_missing_positive = 1
    while first_missing_positive in integers:
        first_missing_positive += 1
    return first_missing_positive


def get_first_missing_positive_alt(integers):
    integers.sort()
    for integer in range(1, max(integers) + 2):
        if integer not in integers and integer > 0:
            return integer


print(get_first_missing_positive(entry))
print(get_first_missing_positive(entry2))

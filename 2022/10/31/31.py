staircase = 4
steps_possibles = [1, 2]


def get_ways_to_climb(stair):
    if stair <= 0:
        return 0
    if stair == 1 or stair == 2:
        return stair
    return get_ways_to_climb(stair - 1) + get_ways_to_climb(stair - 2)


def get_ways_to_climb_alternative(stair):
    if stair <= 0:
        return 0
    if stair == 1 or stair == 2:
        return stair
    a = 1
    b = 2
    for i in range(3, stair + 1):
        c = a + b
        a = b
        b = c
    return c


assert get_ways_to_climb(staircase) == 5
assert get_ways_to_climb_alternative(staircase) == 5

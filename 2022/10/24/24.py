def cons(a, b):
    def pair(f):
        return f(a, b)

    return pair

def car(pair):
    def first(a, b):
        return a

    return pair(first)


def cdr(pair):
    def last(a, b):
        return b

    return pair(last)


class Pair:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def first(self):
        return self.a

    def last(self):
        return self.b


def cons2(a, b) -> Pair:
    return Pair(a, b)


def car2(pair: Pair) -> int:
    return pair.first()


def cdr2(pair: Pair) -> int:
    return pair.last()


assert car(cons(3, 4)) == 3
assert cdr(cons(3, 4)) == 4
assert car2(cons2(3, 4)) == 3
assert cdr2(cons2(3, 4)) == 4

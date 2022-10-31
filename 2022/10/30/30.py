hint = 'de'
entry = ['dog', 'deer', 'deal']


def autocomplete_system(query: str, words: list) -> list:
    return [word for word in words if word.startswith(query)]


print(autocomplete_system(hint, entry))

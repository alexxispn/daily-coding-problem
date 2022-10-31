import os


def create_november():
    os.mkdir('11')
    os.chdir('11')
    for day in range(1, 31):
        os.mkdir(str(day))
        os.chdir(str(day))
        with open(f'{day}.md', 'w') as f:
            f.write(f'# {day} November')
        with open(f'{day}.py', 'w') as f:
            f.write(f'# {day} November')
        with open(f'{day}.ts', 'w') as f:
            f.write(f'# {day} November')
        os.chdir('..')
    os.chdir('..')


create_november()

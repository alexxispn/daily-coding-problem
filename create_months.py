import calendar
import os

extensions = ['.md', '.py', '.ts']


def create_month(month, year):
    os.mkdir(f'{month}')
    os.chdir(f'{month}')
    for day in range(1, calendar.monthrange(year, month)[1] + 1):
        if day < 10:
            day = f'0{day}'
        os.mkdir(str(day))
        os.chdir(str(day))
        for extension in extensions:
            with open(f'{day}{extension}', 'w') as f:
                f.write(f'# {day} {calendar.month_name[month]}')
        os.chdir('..')
    os.chdir('..')


create_month(11, 2022)

#!/usr/bin/env python3

import calendar
import os
from sys import argv

extensions = ['.md', '.py', '.ts']


def get_md_content(day, month, year):
    return f'# {day} {calendar.month_name[month]} {year}' \
           f' \r\n\r\n> :bulb:️ **Kata Description**'


def create_month(month, year):  # 11, 2022
    os.mkdir(f'{month}')
    os.chdir(f'{month}')
    for day in range(1, calendar.monthrange(year, month)[1] + 1):
        if day < 10:
            day = f'0{day}'
        os.mkdir(str(day))
        os.chdir(str(day))
        for extension in extensions:
            with open(f'{day}{extension}', 'w') as f:
                f.write(get_md_content(day, month, year))
        os.chdir('..')
    os.chdir('..')


if __name__ == '__main__':
    create_month(int(argv[1]), int(argv[2]))

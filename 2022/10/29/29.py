from time import sleep


def hello_world():
    print("hello world")


def job_scheduler(func, integer):
    sleep(integer)
    func()


job_scheduler(hello_world, 5)

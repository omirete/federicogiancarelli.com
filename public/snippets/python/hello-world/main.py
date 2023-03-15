from browser import document
from browser.html import DIV
import sys

class Test:
    def write(x):
        div = document['python-terminal']
        div <= DIV(x)

sys.stdout = Test

print('Test 1.')
print('Test 2.')
print('Test 3.')
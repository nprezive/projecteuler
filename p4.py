#!usr/bin/env python

"""
    A palindromic number reads the same both ways. 
    The largest palindrome made from the product of two 2-digit 
    numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product of two 
    3-digit numbers.
"""

largest = 0
for x in range(999, 99, -1):
    for y in range(999, 99, -1):
        if str(x*y) == str(x*y)[::-1] and x*y > largest:
            largest = x*y
print(largest)
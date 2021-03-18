# Change Maker
import math

def make_change(total_charge, payment):

    paymentOwed = total_charge - payment
    paymentTuple = math.modf(paymentOwed);

    billsTuple = make_bills(paymentTuple[1])
    coinsTuple = make_coins(paymentTuple[0])

    return [billsTuple, coinsTuple]

def make_bills(moneyOwed):

    billsArray = []

    billsArray.insert(0, math.floor(moneyOwed / 100))
    billsArray.insert(0, math.floor(moneyOwed % 100 / 50))
    billsArray.insert(0, math.floor(moneyOwed % 100 % 50 / 25))
    billsArray.insert(0, math.floor(moneyOwed % 100 % 50 % 25 / 10))
    billsArray.insert(0, math.floor(moneyOwed % 100 % 50 % 25 % 10 / 5))
    billsArray.insert(0, math.floor(moneyOwed % 100 % 50 % 25 % 10 % 5))

    return billsArray


def make_coins(moneyOwed):

    coinsArray = []

    coinsArray.insert(0, int(moneyOwed / 0.25))
    coinsArray.insert(0, int(moneyOwed % 0.25 / 0.1))
    coinsArray.insert(0, int(moneyOwed % 0.25 % 0.1 / 0.05))
    coinsArray.insert(0, int(moneyOwed % 0.25 % 0.1 % 0.05 / 0.01))

    return coinsArray


def value_of_change(money):

    sum = value_of_bills(money[0]) + value_of_coins(money[1])

    return sum


def value_of_bills(bills):

    sum = bills[0] * 1 + bills[1] * 5 + bills[2] * 10 + bills[3] * 20 + bills[4] * 50 + bills[5] * 100

    return sum

def value_of_coins(change):

    sum = change[0] * 0.01 + change[1] * 0.05 + change[2] * 0.1 + change[3] * 0.25

    return sum

print(make_change(130.50, 113))
print(value_of_change(make_change(130.50, 113)))
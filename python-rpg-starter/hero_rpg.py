# In this simple RPG game, the hero fights the goblin. He has the options to:

# 1. fight goblin
# 2. do nothing - in which case the goblin will attack him anyway
# 3. flee
class Character():

    def __init__(self, health, power):
        self.health = health
        self.power = power

    def attack(self, foe):
        foe.health -= self.power
        print(f"{self.name} does {self.power} damage to the {foe.name}.")

    def _alive(self, foe):
        if foe.health <= 0:
            print(f'{foe.name} is dead.')

class Hero(Character):

    def __init__(self, health = 10, power = 5):
        super().__init__(health, power) 
        self.name = "Hero"


class Goblin(Character):

    def __init__(self, health = 6, power = 2):
        super().__init__(health, power)
        self.name = "Goblin"
    

def main():

    user = Hero()
    enemy = Goblin()

    while enemy.health > 0 and user.health > 0:
        print(f"{user.name} has {user.health} health and {user.power} power.")
        print(f"{enemy.name} has {enemy.health} health and {enemy.power} power.")
        print()
        print("What do you want to do?")
        print(f"1. fight {enemy.name}")
        print("2. do nothing")
        print("3. flee")
        print("> ", end=' ')
        raw_input = input()
        if raw_input == "1":
            # Hero attacks goblin
            user.attack(enemy)
        elif raw_input == "2":
            pass
        elif raw_input == "3":
            print("Goodbye.")
            break
        else:
            print("Invalid input {}".format(raw_input))

        if enemy.health > 0:
            # Goblin attacks hero
            enemy.attack(user)

main()
class Triangle:
    def __init__(self):
        self.name = "triangle"
        self.sides = 3

wrongs = {}
def question():
    tri = Triangle()
    correct = tri.sides
    answer = input("How many sides are on a triangle? ")

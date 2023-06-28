import os
from pathlib import Path
from PIL import Image
import sys
import shutil
# Created by hackerofdarkness for the usage of cropping sprites

# Lets us debug the image data
def printInfo(left, top, right, bottom, tag):
    print("The " + tag + " left value is: " + str(left) + "\nThe " + tag + " top value is: " + str(top)
    + "\nThe " + tag + " right value is: " + str(right) + "\nThe " + tag + " bottom value is: " + str(bottom) + "\n")

def imageCropper(pokemonImage):
    frontFolder = Path(os.getcwd() + "/output/front").mkdir(parents= True, exist_ok= True)
    shinyFrontFolder  =  Path(os.getcwd() + "/output/shinyfront").mkdir(parents= True, exist_ok= True)
    backFolderFolder  =  Path(os.getcwd() + "/output/back").mkdir(parents= True, exist_ok= True)
    shinyBackFolder  =  Path(os.getcwd() + "/output/shinyback").mkdir(parents= True, exist_ok= True)
    # Create an image
    image = (pokemonImage)
    originalSprite = Image.open(image)

    width, height = originalSprite.size

    # This is for the front sprite
    frontLeft = 0
    frontTop = 0
    frontRight = 64
    frontBottom = 64

    # Tags for debugging, simply pass it to debug and it'll add it to the command line
    front = "front"
    frontShiny = "front shiny"
    backShiny = "back shiny"
    back = "back"

    # This is for the shiny front sprite
    frontShinyLeft = 64
    frontShinyTop = 0
    frontShinyRight = 128
    frontShinyBottom = 64

    # This is for the regular back sprite
    backLeft = 128
    backTop = 0
    backRight = 192
    backBottom = 64

    # This is for the shiny back sprite
    backShinyLeft = 192
    backShinyTop = 0
    backShinyRight = 256 
    backShinyBottom = 64

    # Crops the individual images
    croppedFront = originalSprite.crop((frontLeft, frontTop, frontRight, frontBottom))
    croppedFrontShiny = originalSprite.crop((frontShinyLeft, frontShinyTop, frontShinyRight, frontShinyBottom))
    croppedBack = originalSprite.crop((backLeft, backTop, backRight, backBottom))
    croppedShinyBack = originalSprite.crop((backShinyLeft, backShinyTop, backShinyRight, backShinyBottom))
    
    # Saves the images to a file
    croppedFront.save(pokemonImage + "front.png")
    croppedFrontShiny.save(pokemonImage + "_front_shiny.png")
    croppedBack.save(pokemonImage + "_back.png")
    croppedShinyBack.save(pokemonImage + "_shiny_back.png")

    # Moves the images to the appropriate folder
    shutil.move(pokemonImage + "front.png", "output/front")
    shutil.move(pokemonImage + "_front_shiny.png", "output/shinyfront")
    shutil.move(pokemonImage + "_back.png", "output/back")
    shutil.move(pokemonImage + "_shiny_back.png", "output/shinyback")

    printInfo(frontLeft, frontTop, frontRight, frontBottom, front)
    printInfo(frontShinyLeft, frontShinyTop, frontShinyRight, frontShinyBottom, frontShiny)
    printInfo(backLeft, backTop, backRight, backBottom, back)
    printInfo(backShinyLeft, backShinyTop, backShinyRight, backShinyBottom, backShiny)

if __name__ == "__main__":
    # Lets us accept input from the command line for the file, important for the .exe
    imageCropper(sys.argv[1])